import { useAtom } from "jotai"
import useSWR from "swr"
import { editModeAtom } from "../store"
import { Note } from "../types/Note"

export const useNotes = () => {
  const [editMode] = useAtom(editModeAtom)
  const { data, error, mutate } = useSWR<Note[]>("/notes", null, {
    revalidateIfStale: !editMode,
    revalidateOnFocus: !editMode,
    revalidateOnReconnect: !editMode,
    revalidateOnMount: !editMode,
  })

  return {
    notes: data,
    error: error,
    mutate,
  }
}
