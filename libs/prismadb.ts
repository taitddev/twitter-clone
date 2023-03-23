import { PrismaClient } from "@prisma/client";

declare global {
  const prisma: PrismaClient | undefined;
}

const prisma = new PrismaClient();

export default prisma;
