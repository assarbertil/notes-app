import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const main = async () => {
  await prisma.user.create({
    data: {
      id: 1,
      email: "assar@classon.se",
      password:
        "$argon2i$v=19$m=4096,t=3,p=1$f8Vf6QG190IftTZIV34/XQ$6tOhnt/rkt9vH6zlIyo5Zm8Swpb5JKBr+skuuFg+dvs",
      notes: {
        create: {
          title: "Assars Anteckning",
          content: "Det här är innehållet",
        },
      },
    },
  })
}

main()
  .catch((e) => {
    throw e
  })

  .finally(async () => {
    await prisma.$disconnect()
  })
