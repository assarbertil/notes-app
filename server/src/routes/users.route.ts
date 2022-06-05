import { Router } from "express"
import { CustomResponse } from "../interfaces/CustomResponse"
import { isAuthed } from "../middleware/isAuthed.middleware"
import { prisma } from "../utils/initPrisma"

export const usersRouter = Router()

usersRouter.get("/me", isAuthed, async (req, res: CustomResponse) => {
  const { userId } = res.payload
  if (!userId) {
    console.log("User error: Missing id")
    return res.status(400).send({ error: "User id is required" })
  }

  let user

  try {
    user = await prisma.user.findUnique({ where: { id: userId } })
  } catch (err) {
    console.log(err)
    return res.status(400).send({ error: "User not found" })
  }

  if (!user) {
    console.log("User error: User not found")
    return res.status(400).send({ error: "User not found" })
  }

  console.log("User successfully fetched")
  return res.send({
    id: user.id,
    email: user.email,
  })
})
