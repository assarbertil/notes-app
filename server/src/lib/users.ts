import { PrismaClient } from "@prisma/client"
import type { User } from "@prisma/client"

const prisma = new PrismaClient()

// Crud operations for users

export const createUser = async (user: User) =>
  await prisma.user.create({ data: user })

export const getUsers = async () =>
  await prisma.user.findMany({ include: { notes: true } })

export const updateUser = async (user: User) =>
  await prisma.user.update({
    where: { id: user.id },
    data: user,
  })

export const deleteUser = async (id: number) =>
  await prisma.user.delete({ where: { id } })
