import express from "express"
import logger from "morgan"
import createError from "http-errors"
import { authRouter } from "./routes/auth"
import { notesRouter } from "./routes/notes"
import cors from "cors"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
export const app = express()
const port = process.env.PORT || 4000

app.use(logger("dev"))
app.use(express.json())
app.use(cors({ origin: process.env.FRONTEND_URL!, credentials: true }))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => res.send("<pre>Nothing here</pre>"))
app.use("/auth", authRouter)
app.use("/notes", notesRouter)
app.use((_, __, next) => next(createError(404)))

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})
