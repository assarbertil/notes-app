import { atom, useAtom } from "jotai"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Note } from "../types/Note"
import { useNotes } from "./useNotes"

const noteAtom = atom<Note | null>(null)

export const useActiveNote = () => {
  const { noteId } = useParams()
  const { notes } = useNotes()
  const [activeNote, setActiveNote] = useAtom(noteAtom)

  useEffect(() => {
    if (notes) {
      const note = notes.find((note) => note.id === noteId)
      if (note) setActiveNote(note)
    }

    if (!noteId) setActiveNote(null)
  }, [noteId, notes, setActiveNote])

  return activeNote
}
