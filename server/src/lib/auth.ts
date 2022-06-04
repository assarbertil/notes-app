import { Response } from "express"
import { User } from "@prisma/client"
import jwt from "jsonwebtoken"
import { NextFunction, Request } from "express"
import { CustomResponse } from "../interfaces/CustomResponse"

// Working with JWTs

export const generateAccessToken = (user: User) =>
  jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "15s",
  })

export const generateRefreshToken = (user: User) =>
  jwt.sign({ userId: user.id }, process.env.REFRESH_TOKEN_SECRET!, {
    expiresIn: "7d",
  })

export const setRefreshTokenCookie = (res: Response, token: string) =>
  res.cookie("jid", token, {
    httpOnly: true,
    // path: "/refresh_token", // This sometimes breaks setting the cookie
    sameSite: "strict",
  })

// Express middleware to check if user is authenticated

export const isAuthed = (
  req: Request,
  res: CustomResponse,
  next: NextFunction
) => {
  const authorization = req.headers["authorization"]

  if (!authorization) {
    return res.status(401).send({ error: "not authenticated" })
  }

  try {
    const token = authorization.split(" ")[1]

    const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!)

    res.payload = payload as any
  } catch (err) {
    console.log(err)
    return res.status(401).send({ error: "not authenticated" })
  }

  return next()
}
