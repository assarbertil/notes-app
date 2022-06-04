import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

type UserState = {
  accessToken: string | null
  isLoading: boolean
}

export const userAtom = atomWithStorage<UserState>("jwt", {
  accessToken: null,
  isLoading: true,
})
