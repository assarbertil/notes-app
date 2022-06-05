import { Router } from "express"
import { isAuthed } from "../middleware/isAuthed.middleware"
import { prisma } from "../utils/initPrisma"

export const notesRouter = Router()

notesRouter.get("/", isAuthed, async (req, res) => {
  const notes = await prisma.note.findMany()

  console.log("Notes successfully fetched")
  return res.json(notes)
})

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
