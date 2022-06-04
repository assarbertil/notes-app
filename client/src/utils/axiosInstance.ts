import axiosSource from "axios"

export const axios = axiosSource.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true,
})
