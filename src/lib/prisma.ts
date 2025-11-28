import { PrismaClient } from "@prisma/client";

declare global {
 var prisma: PrismaClient | undefined;
}

// Usamos global para evitar múltiples instancias en dev
const prisma = global.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;
