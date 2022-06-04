import { Router } from "express"
import { CustomResponse } from "src/interfaces/CustomResponse"
import { isAuthed } from "../lib/auth"
import { prisma } from "../utils/initPrisma"

export const notesRouter = Router()

notesRouter.get("/", isAuthed, async (req, res: CustomResponse) => {
  const { authorId } = req.body

  if (typeof authorId !== "number") {
    return res.status(400).send("authorId is required")
  }

  const userNotes = await prisma.note.findMany({ where: { authorId } })

  return res.json(userNotes)
})
