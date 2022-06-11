import { useAtom } from "jotai"
import { accessTokenAtom } from "../store"
import { AuthApiResponse } from "../types/AuthApiResponse"
import { useAxios } from "./useAxios"
import { toast } from "react-hot-toast"
import { AxiosError } from "axios"

// Dealing with auth functions and state

export const useAuth = () => {
  const [, setAccessToken] = useAtom(accessTokenAtom)
  const axios = useAxios()

  // Register function
  const register = async (email: string, password: string) => {
    try {
      const { data } = await axios.post<AuthApiResponse>("/auth/register", {
        email,
        password,
      })

      setAccessToken(data.accessToken)
      toast.success("Logged in!")

      return { data }
    } catch (err) {
      const error = err as AxiosError<AuthApiResponse>

      return { error }
    }
  }

  // Login function
  const login = async (email: string, password: string) => {
    try {
      const { data } = await axios.post<AuthApiResponse>("/auth/login", {
        email,
        password,
      })

      setAccessToken(data.accessToken)
      toast.success("Logged in!")

      return { data }
    } catch (err) {
      const error = err as AxiosError<AuthApiResponse>

      return { error }
    }
  }

  // Logout function
  const logout = async () => {
    try {
      await axios.post("/auth/logout")
      setAccessToken("")

      return { ok: true }
    } catch (err) {
      const error = err as Error | AxiosError

      return { error }
    }
  }

  // Return user data and auth functions
  return {
    register,
    login,
    logout,
  }
}
