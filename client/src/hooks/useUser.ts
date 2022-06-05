import useSWR from "swr"
import { useAtom } from "jotai"
import { accessTokenAtom } from "../store"
import { useAxios } from "./useAxios"
import { AuthApiResponse } from "../types/AuthApiResponse"

export const useUser = () => {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom, "accessToken")
  const axios = useAxios()
  const { data, mutate, error } = useSWR<AuthApiResponse>(
    accessToken ? "/users/me" : null,
    axios.get,
    { onSuccess: (data) => setAccessToken(data.accessToken) }
  )

  return {
    isLoading: !data && !error,
    user: data,
    mutate,
  }
}
