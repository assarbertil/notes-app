import { Response } from "express"
import { User } from "@prisma/client"
import { sign } from "jsonwebtoken"
import { NextFunction, Request } from "express"
import { verify } from "jsonwebtoken"
import { CustomResponse } from "src/interfaces/CustomResponse"

// Working with JWTs

export const createAccessToken = (user: User) => {
  return sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "15m",
  })
}

export const createRefreshToken = (user: User) => {
  return sign({ userId: user.id }, process.env.REFRESH_TOKEN_SECRET!, {
    expiresIn: "7d",
  })
}

export const sendRefreshToken = (res: Response, token: string) => {
  res.cookie("jid", token, {
    httpOnly: true,
    path: "/refresh_token",
  })
}

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
    const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!)
    res.payload = payload as any
  } catch (err) {
    console.log(err)
    return res.status(401).send({ error: "not authenticated" })
  }

  return next()
}
