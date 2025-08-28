import { PrismaClient } from "../app/generated/prisma";

// Prevent multiple instances of Prisma Client in development
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"], // remove if too noisy
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

