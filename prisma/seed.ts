import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const alice = prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
    },
  })

  const bob = prisma.user.create({
    data: {
      name: 'Bob',
      email: 'bob@example.com',
    },
  })

  await prisma.$transaction([alice, bob])
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })