import express from "express"
import logger from "morgan"
import cookieParser from "cookie-parser"
import createError from "http-errors"
import { indexRouter } from "./routes/index"
import { notesRouter } from "./routes/notes"
import { usersRouter } from "./routes/users"
import { authRouter } from "./routes/auth"
import * as argon2 from "argon2"

export const app = express()
const port = process.env.PORT || 3000

app.use(logger("dev"))
app.use(express.json())
app.use(cookieParser())

app.use("/", indexRouter)
app.use("/notes", notesRouter)
app.use("/users", usersRouter)
app.use("/auth", authRouter)

app.use((_, __, next) => next(createError(404)))

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})
