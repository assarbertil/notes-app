import { Router } from "express"
import jsonwebtoken from "jsonwebtoken"
import {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
} from "../lib/jwt"
import { prisma } from "../utils/initPrisma"
const { verify } = jsonwebtoken
import * as argon2 from "argon2"

export const authRouter = Router()

authRouter.post("/register", async (req, res) => {
  const { email, password } = req.body

  // Check if email and password is not empty
  if (email === undefined || password === undefined) {
    return res.status(400).send("Email and password are required")
  }

  // Check if user exists
  if (await prisma.user.findUnique({ where: { email } })) {
    return res.status(409).send({ error: "Username taken!" })
  }

  let user

  try {
    user = await prisma.user.create({
      data: {
        email,
        password: await argon2.hash(password),
      },
    })
  } catch (err) {
    return res.status(409).send({ error: err.message })
  }

  sendRefreshToken(res, createRefreshToken(user))
  return res.send({
    user: { id: user.id, email: user.email },
    accessToken: createAccessToken(user),
  })
})

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    return res.status(401).send({ error: "No user found" })
  }

  const isValid = await argon2.verify(user.password, password)
  if (!isValid) {
    return res.status(401).send({ error: "Incorrect password" })
  }

  sendRefreshToken(res, createRefreshToken(user))

  return res.send({
    user: { id: user.id, email: user.email },
    accessToken: createAccessToken(user),
  })
})

authRouter.post("/refresh_token", async (req, res) => {
  const token = req.cookies.jid
  if (!token) {
    return res.send({ ok: false, accessToken: "" })
  }

  let payload: any = null
  try {
    payload = verify(token, process.env.REFRESH_TOKEN_SECRET!)
  } catch (err) {
    console.log(err)
    return res.send({ ok: false, accessToken: "" })
  }

  const user = await prisma.user.findUnique({ where: { id: payload.userId } })

  if (!user) {
    return res.send({ ok: false, accessToken: "" })
  }

  sendRefreshToken(res, createRefreshToken(user))

  return res.send({ ok: true, accessToken: createAccessToken(user) })
})
