import useSWR from "swr"
import { useAtom } from "jotai"
import { accessTokenAtom } from "../store"
import { useAxios } from "./useAxios"
import { AuthApiResponse } from "../types/AuthApiResponse"

export const useUser = () => {
  const [accessToken] = useAtom(accessTokenAtom)
  const axios = useAxios()
  const { data, mutate, error } = useSWR<AuthApiResponse>(
    accessToken ? "/users/me" : null,
    axios.get
  )

  return {
    isLoading: !data && !error,
    user: data,
    mutate,
  }
}
