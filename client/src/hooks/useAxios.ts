import { useAtom } from "jotai"
import { accessTokenAtom } from "../store"
import axiosSource from "axios"
import { useMemo } from "react"

// This returns an instance of axios with the access token set as a header
// It is a react hook beacuse it uses the access token state atom

export const useAxios = () => {
  const [accessToken] = useAtom(accessTokenAtom)

  // useMemo makes sure that the axios instance is only recreated when the access token changes
  const axios = useMemo(() => {
    return axiosSource.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      headers: { authorization: `Bearer ${accessToken}` },
      withCredentials: true,
    })
  }, [accessToken])

  return axios
}
