import { useAtom } from "jotai"
import { MouseEvent } from "react"
import { useActiveNote } from "../../hooks/useActiveNote"
import { useAxios } from "../../hooks/useAxios"
import { useNotes } from "../../hooks/useNotes"
import {
  editModeAtom,
  editorContentAtom,
  originalContentAtom,
  unsavedChangesAtom,
} from "../../store"
import { Note } from "../../types/Note"

export const useNote = () => {
  const axios = useAxios()
  const activeNote = useActiveNote()
  const [, setUnsavedChanges] = useAtom(unsavedChangesAtom)
  const [, setEditMode] = useAtom(editModeAtom)
  const { notes, mutate } = useNotes()
  const [originalContent] = useAtom(originalContentAtom)
  const [editorContent, setEditorContent] = useAtom(editorContentAtom)

  // Post or update
  const saveNote = async (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation()

    if (!notes || !activeNote) return

    // This means we're editing an existing note

    const note: Note = {
      id: activeNote.id,
      content: editorContent,
    }

    // Check if note exists in the local list of notes.
    // That tells if it's been saved before and should be updated instead of posted
    const noteIndex = notes.findIndex((n) => n.id === note.id)
    const newNotes = [...notes]
    newNotes[noteIndex] = note

    const mutateOptions = {
      optimisticData: newNotes,
      rollbackOnError: true,
    }

    mutate(async () => {
      const { data } = await axios.post("/notes", note)

      return data
    }, mutateOptions)

    setUnsavedChanges(false)
    setEditMode(false)
  }

  const deleteNote = async (e: MouseEvent<HTMLSpanElement>, noteId: string) => {
    e.stopPropagation()

    if (!window.confirm("Är du säker på att du vill radera anteckningen?")) {
      return
    }

    try {
      const { data } = await axios.delete(`/notes/${noteId}`)

      return { data }
    } catch (err) {
      return { err }
    }
  }

  const editNote = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation()
    setEditMode(true)
  }

  // On cancel button click, set edit mode to false and revert to original content
  const cancelEditing = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation()

    if (!window.confirm("Är du säker på att du vill stänga utan att spara?")) {
      return
    }

    setUnsavedChanges(false)
    setEditorContent(originalContent)
    setEditMode(false)
  }

  return {
    saveNote,
    deleteNote,
    editNote,
    cancelEditing,
  }
}
