import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { AnimatePresence } from "framer-motion"
import { useAtom } from "jotai"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useActiveNote } from "../../hooks/useActiveNote"
import {
  activeNoteContentAtom,
  editModeAtom,
  unsavedChangesAtom,
} from "../../store"
import { Placeholder } from "../primitives"
import { editorMotion } from "./editor.animations"
import {
  EditLabel,
  EditorContainer,
  EditorContent,
  EditorWrapper,
} from "./editor.children"

export const Editor = () => {
  const note = useActiveNote()
  const { noteId } = useParams()
  const [editMode] = useAtom(editModeAtom)
  const [, setActiveNoteContent] = useAtom(activeNoteContentAtom)
  const [, setUnsavedChanges] = useAtom(unsavedChangesAtom)

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    editable: false,
    onUpdate: ({ editor }) => {
      console.log("Updates")
      setActiveNoteContent(editor.getJSON())
      setUnsavedChanges(true)
    },
  })

  // Enable edit mode
  useEffect(() => {
    editor?.setEditable(editMode)
  }, [editMode, editor])

  // Set the editor content if the note changes
  useEffect(() => {
    if (editor && note?.content) {
      editor.commands.setContent(note.content)
    }
  }, [note, editor])

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
      </AnimatePresence>

      <Placeholder css={{ height: "100%" }}>Välj en anteckning</Placeholder>

      {editMode && <EditLabel>Editing</EditLabel>}
    </EditorContainer>
  )
}
