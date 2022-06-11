import { AnimatePresence, motion } from "framer-motion"
import { useAtom } from "jotai"
import { useNavigate } from "react-router-dom"
import { useNotes } from "../../hooks/useFetchNotes"
import { editModeAtom, editorContentAtom } from "../../store"
import type { Note as NoteType } from "../../types/Note"
import { Note } from "../Note"
import { Button, Flex, Text } from "../primitives"
import { headerMotion, noteListMotion } from "./noteList.animationts"
import {
  NewNoteButtonContainer,
  NewNoteButtonDisabler,
  NoteListContainer,
} from "./noteList.children"

export const NoteList = () => {
  const { notes } = useNotes()
  const [editMode] = useAtom(editModeAtom)
  const { mutate } = useNotes()
  const navigate = useNavigate()
  const [, setEditMode] = useAtom(editModeAtom)
  const [, setEditorContent] = useAtom(editorContentAtom)

  const createDraft = () => {
    if (!notes) return

    setEditMode(true)

    const note: NoteType = {
      id: "new",

      content: {
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: {
              level: 1,
            },
            content: [
              {
                type: "text",
                text: "Ny anteckning",
              },
            ],
          },
        ],
      },
    }

    setEditorContent(note.content)

    // Check if note exists in the local list of notes.
    // That tells if it's been saved before and should be updated instead of posted
    const newNotes = [note, ...notes]

    const mutateOptions = {
      optimisticData: newNotes,
      rollbackOnError: true,
      revalidate: false,
    }

    mutate(newNotes, mutateOptions)

    navigate("/notes/new")
  }

  return (
    <NoteListContainer>
      <Flex
        justify="between"
        align="center"
        css={{ marginBottom: "2rem" }}
        initial={headerMotion.in}
        animate={headerMotion.base}
        exit={headerMotion.out}
        transition={headerMotion.transition}
      >
        <Text as="h2" size="large" weight="bold">
          Alla anteckningar
        </Text>
        <NewNoteButtonContainer>
          {editMode && <NewNoteButtonDisabler />}
          <Button onClick={createDraft} color="grass">
            Skapa ny
          </Button>
        </NewNoteButtonContainer>
      </Flex>
      <AnimatePresence>
        {notes && (
          <motion.div
            variants={noteListMotion}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {notes?.map(({ id, content }) => (
              <Note key={id} id={id} content={content} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </NoteListContainer>
  )
}
