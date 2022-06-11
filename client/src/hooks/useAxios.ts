import { useAtom } from "jotai"
import { accessTokenAtom } from "../store"
import axiosSource from "axios"
import { useMemo } from "react"
import createAuthRefreshInterceptor from "axios-auth-refresh"

// This returns an instance of axios with the access token set as a header
// It is a react hook beacuse it uses the access token state atom

export const useAxios = () => {
  const [, setAccessToken] = useAtom(accessTokenAtom)

  // useMemo makes sure that the axios instance is only recreated when the access token changes
  const axios = useMemo(() => {
    const axiosInstance = axiosSource.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true,
    })

    function getAccessToken() {
      return JSON.parse(localStorage.getItem("jwt") || "{}")
    }

    // Use interceptor to inject the token to requests
    axiosInstance.interceptors.request.use((request) => {
      request.headers = { Authorization: `Bearer ${getAccessToken()}` }
      return request
    })

    createAuthRefreshInterceptor(axiosInstance, async (failedRequest) => {
      const { data } = await axiosInstance.post("/auth/refresh_token")

      setAccessToken(data.accessToken)

      failedRequest.response.config.headers = {
        Authorization: `Bearer ${data.accessToken}`,
      }
    })

    return axiosInstance
  }, [setAccessToken])

  return axios
}
