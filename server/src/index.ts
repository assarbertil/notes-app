import express from "express"
import logger from "morgan"
import { authRouter } from "./routes/auth"
import { notesRouter } from "./routes/notes"
import { usersRouter } from "./routes/users"
import cors from "cors"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
export const app = express()
const port = process.env.PORT || 4000

app.use(logger("dev"))
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: process.env.FRONTEND_URL!, credentials: true }))
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/auth", authRouter)
app.use("/users", usersRouter)
app.use("/notes", notesRouter)

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`)
})
