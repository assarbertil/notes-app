import { useLocation } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

type AuthFormValues = {
  email: string
  password: string
}

export const useAuthForm = () => {
  const { login, register } = useAuth()
  const { pathname } = useLocation()

  // Figure out what type of form we're dealing with
  let authType: "login" | "register" | null = null
  if (pathname.includes("/auth/login")) authType = "login"
  if (pathname.includes("/auth/register")) authType = "register"

  // Function for handling form submission in Formik
  const handleSubmit = async ({ email, password }: AuthFormValues) => {
    if (!authType) return console.error("No auth type found")

    if (authType === "login") {
      await login(email, password)
    }

    if (authType === "register") {
      await register(email, password)
    }

    return true
  }

  return {
    handleSubmit,
    authType,
  }
}
