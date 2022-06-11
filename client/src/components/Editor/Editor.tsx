import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { AnimatePresence } from "framer-motion"
import { atom, useAtom } from "jotai"
import { useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import { useActiveNote } from "../../hooks/useActiveNote"
import {
  editModeAtom,
  unsavedChangesAtom,
  originalContentAtom,
  editorContentAtom,
} from "../../store"
import {
  BoldIcon,
  BulletListIcon,
  Header1Icon,
  Header2Icon,
  OrderedListIcon,
  StrikeThroughIcon,
} from "../Icons"
import { Placeholder } from "../primitives"
import { editorMotion, toolbarMotion } from "./editor.animations"
import {
  ButtonContainer,
  Divider,
  EditLabel,
  EditorContainer,
  EditorContent,
  EditorWrapper,
  Toolbar,
} from "./editor.children"

const isWritePageAtom = atom(false)

export const Editor = () => {
  const note = useActiveNote()
  const { noteId } = useParams()
  const { pathname } = useLocation()
  const activeNote = useActiveNote()

  const [originalContent, setOriginalContent] = useAtom(originalContentAtom)
  const [unsavedChanges, setUnsavedChanges] = useAtom(unsavedChangesAtom)
  const [, setEditorContent] = useAtom(editorContentAtom)
  const [isWritePage, setIsWritePage] = useAtom(isWritePageAtom)
  const [editMode, setEditMode] = useAtom(editModeAtom)

  // Initialize editor with no content and edit mode off
  const editor = useEditor({
    extensions: [StarterKit],
    content: "...",
    editable: false,
    onUpdate: ({ editor }) => {
      setUnsavedChanges(true)
      setEditorContent(editor.getJSON())
      console.log(editor.getJSON())
    },
  })

  useEffect(() => {
    const pathnameAsArray = pathname.split("/")
    setIsWritePage(pathnameAsArray[pathnameAsArray.length - 1] === "write")

    if (isWritePage) {
      setEditMode(true)
      setEditorContent({})
    }
  }, [pathname, setEditMode, setEditorContent, isWritePage, setIsWritePage])

  // Handles edit mode state changes
  // Turn on edit mode: set the original content atom to the current content
  // Cancel edit mode: revert content to the original content
  // Save content: update the note with the new content
  useEffect(() => {
    if (editor && editMode === true) {
      editor?.setEditable(editMode)
    } else {
      editor?.setEditable(false)
      if (originalContent) {
        editor?.commands.setContent(originalContent)
      }
    }
  }, [editMode, editor, unsavedChanges, originalContent])

  // Set the editor content when note is initialized
  useEffect(() => {
    if (note?.content) {
      editor?.commands.setContent(note.content)
    }
  }, [note, editor, activeNote])

  // Set original content when note is initialized
  useEffect(() => {
    if (editMode && note) {
      setOriginalContent(note.content)
    }
  }, [editMode, note, setOriginalContent])

  return (
    <EditorContainer>
      <AnimatePresence>
        {noteId && (
          <EditorWrapper
            initial={editorMotion.in}
            animate={editorMotion.base}
            exit={editorMotion.out}
            transition={editorMotion.transition}
          >
            <EditorContent editor={editor} />
          </EditorWrapper>
        )}

        {isWritePage && (
          <EditorWrapper
            initial={editorMotion.in}
            animate={editorMotion.base}
            exit={editorMotion.out}
            transition={editorMotion.transition}
          >
            <EditorContent editor={editor} />
          </EditorWrapper>
        )}
      </AnimatePresence>

      <Placeholder
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        css={{ height: "100%" }}
      >
        Välj en anteckning
      </Placeholder>

      <AnimatePresence>
        {editMode && (
          <Toolbar
            initial={toolbarMotion.in}
            animate={toolbarMotion.base}
            exit={toolbarMotion.out}
            transition={toolbarMotion.transition}
          >
            <EditLabel>Editing</EditLabel>

            <ButtonContainer onClick={() => editor?.commands.toggleBold()}>
              <BoldIcon />
            </ButtonContainer>
            <ButtonContainer onClick={() => editor?.commands.toggleStrike()}>
              <StrikeThroughIcon />
            </ButtonContainer>

            <Divider />

            <ButtonContainer
              onClick={() => editor?.commands.toggleHeading({ level: 1 })}
            >
              <Header1Icon />
            </ButtonContainer>
            <ButtonContainer
              onClick={() => editor?.commands.toggleHeading({ level: 2 })}
            >
              <Header2Icon />
            </ButtonContainer>
            <ButtonContainer
              onClick={() => editor?.commands.toggleBulletList()}
            >
              <BulletListIcon />
            </ButtonContainer>
            <ButtonContainer
              onClick={() => editor?.commands.toggleOrderedList()}
            >
              <OrderedListIcon />
            </ButtonContainer>
          </Toolbar>
        )}
      </AnimatePresence>
    </EditorContainer>
  )
}
