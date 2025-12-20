import { PrismaClient } from "@/generated/prisma/client";

const globalForPrisma = global as unknown as {
  prisma?: PrismaClient;
};

// @ts-ignore — Prisma 7.2 constructor typing bug
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
export default prisma;
