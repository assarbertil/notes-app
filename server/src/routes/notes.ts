import { Router } from "express"
import { getUserNotes } from "../lib/notes"
export const notesRouter = Router()

notesRouter.get("/", async (req, res) => {
  const userNotes = await getUserNotes(1)
  console.log(userNotes)
  res.json(userNotes)
})
