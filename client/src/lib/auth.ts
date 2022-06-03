import axios from "axios"
import { User } from "../types/User"

export const register = async (email: string, password: string) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/auth/signup`,
    {
      email,
      password,
    }
  )
  console.log(response)
}

export const login = async (email: string, password: string) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/auth/login/password`,
    {
      email,
      password,
    }
  )
  console.log(response)
}
