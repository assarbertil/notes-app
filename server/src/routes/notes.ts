import { Router } from "express"
import { isAuthed } from "../lib/isAuthed"
import { prisma } from "../utils/initPrisma"

export const notesRouter = Router()

notesRouter.get("/", isAuthed, async (req, res) => {
  const { id: noteId } = req.params

  if (!noteId) {
    console.log("Note error: Missing id")
    return res.status(400).send({ error: "author id is required" })
  }

  const userNotes = await prisma.note.findMany()

  console.log("Notes successfully fetched")
  return res.json(userNotes)
})
