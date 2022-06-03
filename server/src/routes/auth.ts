import { Router } from "express"
import { verifyUser } from "../lib/auth"
// import passport from "passport"
var passport = require("passport")
const LocalStrategy = require("passport-local")

export const authRouter = Router()

// authRouter.get("/login", async (req, res) => {
//   res.send("Login")
// })

passport.use(new LocalStrategy(verifyUser))

authRouter.post(
  "/login/password",
  passport.authenticate("local", {
    successRedirect: "/success",
    failureRedirect: "/login",
  })
)
