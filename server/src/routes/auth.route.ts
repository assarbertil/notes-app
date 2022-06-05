import { Router } from "express"
import jsonwebtoken from "jsonwebtoken"
import {
  generateAccessToken,
  generateRefreshToken,
  setRefreshTokenCookie,
} from "../helpers/jwt.helpers"
import { prisma } from "../utils/initPrisma"
const { verify } = jsonwebtoken
import * as argon2 from "argon2"
import { v4 as uuidv4 } from "uuid"

export const authRouter = Router()

authRouter.post("/register", async (req, res) => {
  const { email, password } = req.body

  if (typeof email !== "string" || typeof password !== "string") {
    console.log("Register error: Email and password are required")
    return res.status(400).send({ error: "Email and password are required" })
  }

  if (await prisma.user.findUnique({ where: { email } })) {
    console.log("Register error: User already exists")
    return res.status(409).send({ error: "Username taken!" })
  }

  let user

  try {
    user = await prisma.user.create({
      data: {
        id: uuidv4(),
        email,
        password: await argon2.hash(password),
      },
    })
  } catch (err) {
    console.log("Register error:", err.message)
    return res.status(409).send({ error: err.message })
  }

  setRefreshTokenCookie(res, generateRefreshToken(user))

  console.log("Register success:", user.email)
  return res.send({
    user: { id: user.id, email: user.email },
    accessToken: generateAccessToken(user),
  })
})

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body

  if (typeof email !== "string" || typeof password !== "string") {
    console.log("Login error: Missing email or password")
    return res.status(400).send({ error: "Email and password are required" })
  }

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    console.log("Login error: Entered email does not exist")
    return res.status(401).send({ error: "No user found" })
  }

  const isValid = await argon2.verify(user.password, password)
  if (!isValid) {
    console.log("Login error: Wrong password")
    return res.status(401).send({ error: "Incorrect password" })
  }

  setRefreshTokenCookie(res, generateRefreshToken(user))

  console.log("Login success:", user.email)
  return res.send({
    user: { id: user.id, email: user.email },
    accessToken: generateAccessToken(user),
  })
})

authRouter.post("/logout", async (req, res) => {
  setRefreshTokenCookie(res, "")
  console.log("Logged out a user")
  return res.send({ message: "Logged out" })
})

authRouter.post("/refresh_token", async (req, res) => {
  const token = req.cookies.jid

  if (!token) {
    console.log("Refresh token error: No token provided in cookies")
    return res.send({ ok: false, accessToken: "" })
  }

  let payload: any = null
  try {
    payload = verify(token, process.env.REFRESH_TOKEN_SECRET!)
  } catch (err) {
    console.log("Refresh token error:", err.message)
    return res.send({ ok: false, accessToken: "" })
  }

  const user = await prisma.user.findUnique({ where: { id: payload.userId } })

  if (!user) {
    console.log("Refresh token error: No user found with id inside token")
    return res.send({ ok: false, accessToken: "" })
  }

  setRefreshTokenCookie(res, generateRefreshToken(user))

  console.log("Refresh token success: Refreshed", user.email)
  return res.send({ ok: true, accessToken: generateAccessToken(user) })
})
