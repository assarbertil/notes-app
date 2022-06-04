import { useAtom } from "jotai"
import { userAtom } from "../store"
import { AuthApiResponse } from "../types/AuthApiResponse"
import { axios } from "../utils/axiosInstance"

export const register = async (email: string, password: string) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/auth/register`,
    { email, password }
  )

  localStorage.setItem("jwt", await response.data.token)
}

export const login = async (email: string, password: string) => {
  try {
    const { data } = await axios.post<AuthApiResponse>("/auth/login", {
      email,
      password,
    })
    return data
  } catch (err) {
    console.log("Login error", err)
  }
}
