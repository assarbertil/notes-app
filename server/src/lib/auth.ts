import { PrismaClient, User } from "@prisma/client"
import * as argon2 from "argon2"

const prisma = new PrismaClient()

export const verifyUser = async (
  email: string,
  password: string,
  cb: (first: any, row: User | false, message?: {}) => void
) => {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    return cb(null, false, { message: "Incorrect username or password." })
  }

  const isValid = await argon2.verify(user.password, password)
  if (!isValid) {
    return cb(null, false, { message: "Incorrect username or password." })
  }

  return cb(null, user)
}

// User CRUD operations

export const createUser = async (user: User) =>
  prisma.user.create({
    data: {
      email: user.email,
      password: await argon2.hash(user.password),
    },
  })
