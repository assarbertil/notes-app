import { useAtom } from "jotai"
import { accessTokenAtom } from "../store"
import axiosSource from "axios"
import { useMemo } from "react"

export const useAxios = () => {
  const [accessToken] = useAtom(accessTokenAtom, "accessToken")

  // useMemo makes sure that the axios instance is only created when the access token changes
  const axios = useMemo(() => {
    return axiosSource.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      headers: { authorization: `Bearer ${accessToken}` },
      withCredentials: true,
    })
  }, [accessToken])

  return axios
}
