import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

export const accessTokenAtom = atomWithStorage<string>("jwt", "", {
  getItem: (key) => localStorage.getItem(key) || "",
  removeItem: (key) => localStorage.removeItem(key),
  setItem: (key, newValue) => localStorage.setItem(key, newValue),
})
