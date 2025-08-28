import { PrismaClient, UserRole } from '../app/generated/prisma/'

const prisma = new PrismaClient;

async function main() {
  // await prisma.user.deleteMany();

  await prisma.user.createMany({
    data: [
      {
        email: "ike@gmail.com",
        name: "Ike",
        phone: "090129342",
        role: UserRole.ADMIN,
        isVerified: true
      },
      {
        email: "chad@gmail.com",
        name: "Chadie Gil",
        phone: '0912844844',
        role: UserRole.SUPER_ADMIN,
        isVerified: true
      },
      {
        email: "doe@gmail.com",
        name: 'John Doe',
        phone: "0912049104",
        role: UserRole.BUSINESS_OWNER,
        isVerified: true
      }
    ]
  })
  console.log('Database seeded successfully')
}
main().catch((e) => {
  console.error(e);
  process.exit(1)
}).finally(async () => {
  await prisma.$disconnect()
})
