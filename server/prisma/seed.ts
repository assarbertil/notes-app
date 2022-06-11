import { PrismaClient } from "@prisma/client"
import * as argon2 from "argon2"

import { notes } from "./notes"

const prisma = new PrismaClient()

const main = async () => {
  // Create default users
  await prisma.user.createMany({
    data: [
      {
        email: "assar@classon.se",
        password: await argon2.hash("asdfasdf"),
      },
      {
        email: "sam@smith.com",
        password: await argon2.hash("password"),
      },
    ],
    skipDuplicates: true,
  })

  // Create default notes
  await prisma.note.createMany({
    data: notes.map((note) => ({ content: note })),
    skipDuplicates: true,
  })
}

main()
  .catch((e) => {
    throw e
  })

  .finally(async () => {
    await prisma.$disconnect()
  })

console.info("Database seeded")
