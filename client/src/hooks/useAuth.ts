import { useAtom } from "jotai"
import { accessTokenAtom } from "../store"
import { AuthApiResponse } from "../types/AuthApiResponse"
import { useAxios } from "./useAxios"

// Dealing with auth functions and state

export const useAuth = () => {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom)
  const axios = useAxios()

  const register = async (email: string, password: string) => {
    try {
      const { data } = await axios.post<AuthApiResponse>("/auth/register", {
        email,
        password,
      })
      setAccessToken(data.accessToken)

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

  const login = async (email: string, password: string) => {
    try {
      const { data } = await axios.post<AuthApiResponse>("/auth/login", {
        email,
        password,
      })
      console.log("Receiving data:", data)
      console.log("Should set access token:", data.accessToken)

      setAccessToken(data.accessToken)

      console.log("Token after being set:", accessToken)

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

  const logout = async () => {
    try {
      await axios.post("/auth/logout")
      setAccessToken("")
    } catch (err) {
      console.error("Logout error", err)
    }
  }

  return {
    register,
    login,
    logout,
  }
}
