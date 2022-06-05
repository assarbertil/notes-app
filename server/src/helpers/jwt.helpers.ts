import { Response } from "express"
import { User } from "@prisma/client"
import jwt from "jsonwebtoken"

// Working with JWTs

export const generateAccessToken = (user: User) =>
  jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "15m",
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
