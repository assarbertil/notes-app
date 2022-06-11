import { JSONContent } from "@tiptap/react"
import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

export const accessTokenAtom = atomWithStorage("jwt", "")

export const loginErrorAtom = atom("")

export const routerGuardLockAtom = atom(false)

export const originalContentAtom = atom<JSONContent | undefined>(undefined)
export const editorContentAtom = atom<JSONContent | undefined>(undefined)
export const unsavedChangesAtom = atom(false)
export const editModeAtom = atom(false)
