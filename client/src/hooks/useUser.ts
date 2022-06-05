import { useAtom } from "jotai"
import { accessTokenAtom } from "../store"
import { AuthApiResponse } from "../types/AuthApiResponse"
import { useAxios } from "./useAxios"
import { toast } from "react-hot-toast"
import useSWR from "swr"
import { User } from "../types/User"

// Dealing with auth functions and state

export const useUser = () => {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom)
  const axios = useAxios()
  const { data, mutate, error } = useSWR<User>(accessToken ? "/users/me" : null)

  // Register function
  const register = async (email: string, password: string) => {
    try {
      const { data } = await axios.post<AuthApiResponse>("/auth/register", {
        email,
        password,
      })

      setAccessToken(data.accessToken)
      toast.success("Logged in!")

      return {
        data,
        error: null,
      }
    } catch (err) {
      console.error(err)

      return {
        data: null,
        err,
      }
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

      return {
        data,
        error: null,
      }
    } catch (err) {
      console.error(err)

      return {
        data: null,
        err,
      }
    }
  }

  // Logout function
  const logout = async () => {
    try {
      await axios.post("/auth/logout")
      setAccessToken("")
    } catch (err) {
      console.error("Logout error", err)
    }
  }

  // Return user data and auth functions
  return {
    isLoading: !data && !error,
    user: data,
    mutate,

    register,
    login,
    logout,
  }
}
