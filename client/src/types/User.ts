import { Note } from "./Note"

export type User = {
  id: number
  email: string
  password: string
  notes: Note[]
}
