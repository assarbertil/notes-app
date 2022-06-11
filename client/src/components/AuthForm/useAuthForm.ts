import { useAtom } from "jotai"
import { useLocation } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { loginErrorAtom } from "../../store"

type AuthFormValues = {
  email: string
  password: string
}

export const useAuthForm = () => {
  const { login, register } = useAuth()
  const { pathname } = useLocation()
  const [, setLoginError] = useAtom(loginErrorAtom)

  // Figure out what type of form we're dealing with
  let authType: "login" | "signup" | null = null
  if (pathname.includes("/auth/login")) authType = "login"
  if (pathname.includes("/auth/signup")) authType = "signup"

  // Function for handling form submission in Formik
  const handleSubmit = async ({ email, password }: AuthFormValues) => {
    if (!authType) return console.error("No auth type found")

    if (authType === "login") {
      const { data, error } = await login(email, password)

      if (error?.response?.data?.error) {
        setLoginError(error.response.data.error)
        console.error(error)
      }

      if (data) {
        setLoginError("")
        return true
      }
    }

    if (authType === "signup") {
      const { data, error } = await register(email, password)

      if (error?.response?.data?.error) {
        setLoginError(error.response.data.error)
        console.error(error)
      }

      if (data) {
        setLoginError("")
        return true
      }
    }
  }

  return {
    handleSubmit,
    authType,
  }
}
