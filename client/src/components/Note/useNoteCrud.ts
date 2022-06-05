import { useAxios } from "../../hooks/useAxios"
import { Note } from "../../types/Note"

export const useNoteCrud = () => {
  const axios = useAxios()

  const postNote = async (note: Note) => {
    try {
      const { data } = await axios.post("/notes", note)

      return { data, err: null }
    } catch (err) {
      return { data: null, err }
    }
  }

  const updateNote = async (note: Note) => {
    try {
      const { data } = await axios.put(`/notes/${note.id}`, note)

      return { data, err: null }
    } catch (err) {
      return { data: null, err }
    }
  }

  const deleteNote = async (noteId: string) => {
    try {
      const { data } = await axios.delete(`/notes/${noteId}`)

      return { data, err: null }
    } catch (err) {
      return { data: null, err }
    }
  }

  return {
    postNote,
    updateNote,
    deleteNote,
  }
}
