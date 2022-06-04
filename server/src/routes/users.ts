import { Router } from "express"
import { CustomResponse } from "../interfaces/CustomResponse"
import { isAuthed } from "../lib/isAuthed"
import { prisma } from "../utils/initPrisma"

export const usersRouter = Router()

usersRouter.get("/:id", isAuthed, async (req, res: CustomResponse) => {
  const { id: userId } = req.params
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

  if (res.payload.userId !== user.id) {
    console.log("User error: User id does not match")
    return res.status(400).send({ error: "Ids do not match" })
  }

  console.log("User successfully fetched")
  return res.send({
    user: {
      id: user.id,
      email: user.email,
    },
  })
})
