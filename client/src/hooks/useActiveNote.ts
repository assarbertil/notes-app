import { useMemo } from "react"
import { useParams } from "react-router-dom"
import { useNotes } from "./useNotes"

export const useActiveNote = () => {
  const { noteId } = useParams()
  const { notes } = useNotes()

  return useMemo(() => {
    if (notes && noteId) {
      return notes.find((note) => note.id === noteId)
    }

    return undefined
  }, [noteId, notes])
}
