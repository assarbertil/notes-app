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
  return res.json(await prisma.note.findMany())
})

// Create a new note or edit an existing note
notesRouter.post("/:id", isAuthed, async (req, res) => {
  const { id: noteId } = req.params
  const { content } = req.body

  if (!noteId) {
    console.log("Note error: Missing id")
    return res.status(400).send({ error: "author id is required" })
  }

  // Make a post request with the id `new` to create a new note
  if (noteId === "new") {
    try {
      const note = await prisma.note.create({ data: { id: uuidv4(), content } })

      if (note) {
        console.log("Note successfully created")
      }
    } catch (err) {
      console.log(err.message)

      return res.status(400).send({ error: err.message })
    }
  } else {
    try {
      await prisma.note.update({
        where: { id: noteId },
        data: { content },
      })

      console.log("Note successfully updated")
    } catch (err) {
      console.log(err.message)

      return res.status(400).send({ error: err.message })
    }
  }

  return res.json(await prisma.note.findMany())
})
