import { useAtom } from "jotai"
import { MouseEvent } from "react"
import { useNavigate } from "react-router-dom"
import { useActiveNote } from "../../hooks/useActiveNote"
import { useAxios } from "../../hooks/useAxios"
import { useNotes } from "../../hooks/useFetchNotes"
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
  const navigate = useNavigate()

  // Post or update
  const saveNote = async (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation()

    if (!notes || !activeNote) return

    const note: Note = {
      id: activeNote.id,
      content: editorContent,
    }

    // Optimistically update the note in the store
    const noteIndex = notes.findIndex((n) => n.id === note.id)
    const newNotes = [...notes]
    newNotes[noteIndex] = note

    const mutateOptions = {
      optimisticData: newNotes,
      rollbackOnError: true,
    }

    mutate(async () => {
      const { data } = await axios.post(`/notes/${note.id}`, note)

      return data
    }, mutateOptions)

    setUnsavedChanges(false)
    setEditMode(false)
  }

  const deleteNote = async (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation()

    if (!window.confirm("Är du säker på att du vill radera anteckningen?")) {
      return
    }

    if (!notes || !activeNote) return

    const mutateOptions = {
      optimisticData: notes.filter((note) => note.id !== activeNote.id),
      rollbackOnError: true,
    }

    mutate(async () => {
      const { data } = await axios.delete(`/notes/${activeNote.id}`)

      return data
    }, mutateOptions)

    navigate("/notes")
  }

  const editNote = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation()
    setEditMode(true)
    setEditorContent(undefined)
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
