import { useAtom } from "jotai"
import { FC, useCallback } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
  activeNoteContentAtom,
  editModeAtom,
  unsavedChangesAtom,
} from "../../store"
import { Text } from "../primitives"
import { NoteButton, NoteContainer } from "./note.children"
import { CrossIcon, CheckIcon, EditIcon, DeleteIcon } from "../Icons"
import { useNoteCrud } from "./useNoteCrud"
import { useActiveNote } from "../../hooks/useActiveNote"

interface Props {
  id: string
  title: string
}

export const Note: FC<Props> = ({ id, title }) => {
  const { postNote, updateNote, deleteNote } = useNoteCrud()
  const [unsavedChanges] = useAtom(unsavedChangesAtom)
  const [editMode, setEditMode] = useAtom(editModeAtom)
  const [activeNoteContent, setActiveNoteContent] = useAtom(
    activeNoteContentAtom
  )
  const activeNote = useActiveNote()
  const navigate = useNavigate()
  const { noteId } = useParams()
  const active = noteId === id

  const handleClick = useCallback(() => {
    if (active) {
      if (!editMode) {
        navigate("/notes")
      }
    } else {
      navigate(`/notes/${id}`)
    }
  }, [active, navigate, id, editMode])

  return (
    <NoteContainer
      onClick={handleClick}
      active={active}
      softDisable={editMode && !active}
      disabled={editMode && !active}
    >
      <article>
        <Text as="h2" weight="bold" css={{ paddingBottom: "0.125rem" }}>
          {title}{" "}
          {active && unsavedChanges && editMode && (
            <Text css={{ opacity: 0.5, fontSize: "0.875rem" }}>(Ändrad)</Text>
          )}
        </Text>
      </article>
      {active && !editMode && (
        <div>
          <NoteButton
            onClick={(e) => {
              e.stopPropagation()
              setEditMode(true)
            }}
          >
            <EditIcon />
          </NoteButton>
          <NoteButton
            color="crimson"
            onClick={(e) => {
              e.stopPropagation()

              if (window.confirm("Är du säker på att du vill radera?")) {
                deleteNote(id)
              }
            }}
          >
            <DeleteIcon />
          </NoteButton>
        </div>
      )}

      {active && editMode && (
        <div>
          <NoteButton
            onClick={async (e) => {
              e.stopPropagation()

              // Post the note
              if (activeNote) {
                console.log("Should post note")

                await updateNote({
                  id: activeNote.id,
                  title: activeNote.title,
                  content: activeNoteContent,
                })
              } else {
                console.log("No active note")
              }

              setEditMode(false)
            }}
            color="grass"
          >
            <CheckIcon />
          </NoteButton>
          <NoteButton
            onClick={(e) => {
              e.stopPropagation()

              // prettier-ignore
              if (window.confirm("Är du säker på att du vill raderad den här anteckningen?")) {
                setActiveNoteContent(undefined)
                setEditMode(false)
              }
            }}
            color="crimson"
          >
            <CrossIcon />
          </NoteButton>
        </div>
      )}
    </NoteContainer>
  )
}
