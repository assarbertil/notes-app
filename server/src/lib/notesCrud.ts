import { prisma } from "../utils/initPrisma"
import type { Note } from "@prisma/client"

// Crud operations for notes

export const createNote = async (note: Note) =>
  await prisma.note.create({ data: note })

export const getUserNotes = async (authorId: string) =>
  await prisma.note.findMany({ where: { authorId } })

export const updateNote = async (note: Note) =>
  await prisma.note.update({
    where: { id: note.id },
    data: note,
  })

export const deleteNote = async (id: string) =>
  await prisma.note.delete({ where: { id } })
