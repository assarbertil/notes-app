import { Router } from "express"
import { isAuthed } from "../middleware/isAuthed.middleware"
import { prisma } from "../utils/initPrisma"
import { v4 as uuidv4 } from "uuid"

export const notesRouter = Router()

notesRouter.get("/", isAuthed, async (req, res) => {
  const notes = await prisma.note.findMany()

  console.log("Notes successfully fetched")
  return res.json(notes)
})

// Get a note by id
notesRouter.get("/:id", isAuthed, async (req, res) => {
  const { id: noteId } = req.params

  if (!noteId) {
    console.log("Note error: Missing id")
    return res.status(400).send({ error: "author id is required" })
  }

  const note = await prisma.note.findUnique({ where: { id: noteId } })

  console.log("Notes successfully fetched")
  return res.json(note)
})

// Create a new note
notesRouter.post("/", isAuthed, async (req, res) => {
  const { content } = req.body

  if (!content) {
    console.log("Note error: Missing content")
    return res.status(400).send({ error: "Content is required" })
  }
  let note
  try {
    note = await prisma.note.create({ data: { id: uuidv4(), content } })
  } catch (err) {
    console.log(err.message)
    return res.status(400).send({ error: err.message })
  }

  console.log("Note successfully created")
  return res.json(await prisma.note.findMany())
})

// Delete a note by id
notesRouter.delete("/:id", isAuthed, async (req, res) => {
  const { id: noteId } = req.params

  if (!noteId) {
    console.log("Note error: Missing id")
    return res.status(400).send({ error: "author id is required" })
  }

  let note
  try {
    note = await prisma.note.delete({ where: { id: noteId } })
  } catch (err) {
    console.log(err.message)
    return res.status(400).send({ error: err.message })
  }

  console.log("Note successfully deleted")
  return res.json(note)
})

// Update a note by id
notesRouter.put("/:id", isAuthed, async (req, res) => {
  const { id: noteId } = req.params
  const { content } = req.body

  if (!noteId) {
    console.log("Note error: Missing id")
    return res.status(400).send({ error: "author id is required" })
  }

  let note
  try {
    note = await prisma.note.update({
      where: { id: noteId },
      data: { content },
    })
  } catch (err) {
    console.log(err.message)
    return res.status(400).send({ error: err.message })
  }

  console.log("Note successfully updated")
  return res.json(await prisma.note.findMany())
})
