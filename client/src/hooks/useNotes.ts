import useSWR from "swr"
import { Note } from "../types/Note"

export const useNotes = () => {
  const { data, error, mutate } = useSWR<Note[]>("/notes")

  return {
    notes: data,
    isError: error,
    mutate,
  }
}
