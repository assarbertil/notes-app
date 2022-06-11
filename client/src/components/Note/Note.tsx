import { useAtom } from "jotai"
import { FC, useCallback } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { editModeAtom, unsavedChangesAtom } from "../../store"
import { Text } from "../primitives"
import {
  Article,
  ButtonContainer,
  NoteButton,
  NoteContainer,
} from "./note.children"
import { CrossIcon, CheckIcon, EditIcon, DeleteIcon } from "../Icons"
import { useNote } from "./useNote"
import { noteMotion } from "./note.animationts"
import { JSONContent } from "@tiptap/react"

interface Props {
  id: string
  content: JSONContent | undefined
}

export const Note: FC<Props> = ({ id, content }) => {
  const { editNote, cancelEditing, saveNote, deleteNote } = useNote()
  const [unsavedChanges] = useAtom(unsavedChangesAtom)
  const [editMode] = useAtom(editModeAtom)
  const navigate = useNavigate()
  const { noteId } = useParams()
  const isSelected = noteId === id

  // On note select, go to noteId url
  // On note deselect, go back
  const handleClick = useCallback(() => {
    if (isSelected) {
      if (!editMode) {
        navigate("/notes")
      }
    } else {
      navigate(`/notes/${id}`)
    }
  }, [isSelected, navigate, id, editMode])

  return (
    <NoteContainer
      onClick={handleClick}
      active={isSelected}
      softDisable={editMode && !isSelected}
      disabled={editMode && !isSelected}
      variants={noteMotion}
    >
      <Article>
        <Text
          as="h2"
          weight="bold"
          css={{
            paddingBottom: "0.125rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            width: "100%",
          }}
        >
          {content?.content?.[0]?.content?.[0]?.text ||
            content?.[0]?.content?.[0]?.text ||
            "Odöpt anteckning"}
          {isSelected && unsavedChanges && editMode && (
            <Text css={{ opacity: 0.5, fontSize: "0.875rem" }}> (Ändrad)</Text>
          )}
        </Text>
      </Article>

      {isSelected && !editMode && (
        <ButtonContainer>
          <NoteButton onClick={editNote}>
            <EditIcon />
          </NoteButton>
          <NoteButton onClick={deleteNote} color="crimson">
            <DeleteIcon />
          </NoteButton>
        </ButtonContainer>
      )}

      {isSelected && editMode && (
        <ButtonContainer>
          <NoteButton onClick={saveNote} color="grass">
            <CheckIcon />
          </NoteButton>
          <NoteButton onClick={cancelEditing} color="crimson">
            <CrossIcon />
          </NoteButton>
        </ButtonContainer>
      )}
    </NoteContainer>
  )
}
