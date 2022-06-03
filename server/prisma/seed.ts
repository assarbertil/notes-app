import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.create({
    data: {
      id: 1,
      email: "assar@classon.se",
      password: "asdfasdf",
      notes: {
        create: {
          title: "Assars Anteckning",
          content: "Det här är innehållet",
        },
      },
    },
  });
};

main()
  .catch(e => {
    throw e;
  })

  .finally(async () => {
    await prisma.$disconnect();
  });
