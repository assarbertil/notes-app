import { useNotes } from "../../hooks/useNotes"
import { Note } from "../Note"
import { NoteListContainer } from "./noteList.children"

export const NoteList = () => {
  const { notes } = useNotes()

  return (
    <NoteListContainer>
      {notes?.map(({ id, title, content }) => (
        <Note key={id} id={id} title={title} content={content} />
      ))}
    </NoteListContainer>
  )
}
