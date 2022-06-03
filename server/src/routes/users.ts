import { Router } from "express"
import { getUsers } from "../lib/users"
export const usersRouter = Router()

usersRouter.get("/", async (req, res) => {
  const allUsers = await getUsers()
  console.dir(allUsers, { depth: null })
  res.json(allUsers)
})
