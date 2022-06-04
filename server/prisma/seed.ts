import { PrismaClient } from "@prisma/client"
import { v4 as uuidv4 } from "uuid"
import * as argon2 from "argon2"

const prisma = new PrismaClient()

const main = async () => {
  await prisma.user.createMany({
    data: [
      {
        id: uuidv4(),
        email: "assar@classon.se",
        password: await argon2.hash("asdfasdf"),
      },
      {
        id: uuidv4(),
        email: "sam@smith.com",
        password: await argon2.hash("password"),
      },
    ],
  })
  await prisma.note.createMany({
    data: [
      {
        id: uuidv4(),
        title: "Assars första anteckning",
        content: "Det här är innehållet av den första anteckningen",
      },
      {
        id: uuidv4(),
        title: "Assars andra anteckning",
        content: "Det här är innehållet av den andra anteckningen",
      },
    ],
  })
}

main()
  .catch((e) => {
    throw e
  })

  .finally(async () => {
    await prisma.$disconnect()
  })

console.log("Database seeded")
