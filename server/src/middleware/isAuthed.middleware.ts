import { NextFunction, Request } from "express"
import { CustomResponse } from "../interfaces/CustomResponse"
import jwt from "jsonwebtoken"

// Express middleware to check if user is authenticated

export const isAuthed = (
  req: Request,
  res: CustomResponse,
  next: NextFunction
) => {
  const authorization = req.headers["authorization"]

  if (!authorization) {
    console.log("isAuth error: No authorization header")
    return res.status(401).send({ error: "not authenticated" })
  }

  try {
    const token = authorization.split(" ")[1]

    const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!)

    res.payload = payload as any
  } catch (err) {
    console.log("isAuthed error: ", err.message)
    return res.status(401).send({ error: "not authenticated" })
  }

  return next()
}
