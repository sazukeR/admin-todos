// import "dotenv/config";
// import { defineConfig, env } from "prisma/config";
import { PrismaClient } from "@prisma/client";

declare global {
 var prisma: PrismaClient | undefined;
}

export const prisma =
 global.prisma ??
 new PrismaClient({
  log: ["info", "warn", "error"], // opcional
 });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;
