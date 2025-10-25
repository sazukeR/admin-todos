import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
 await prisma.todo.deleteMany();

 await prisma.todo.createMany({
  data: [
   {
    description: "Recolectar la piedra del alma en Vormir",
   },
   {
    description: "Conseguir la piedra del tiempo del Doctor Strange",
   },
   {
    description: "Robar la piedra de la realidad del Coleccionista",
   },
   {
    description: "Capturar la piedra del espacio del Teseracto",
    done: true,
   },
   {
    description: "Tomar la piedra del poder de Xandar",
   },
  ],
 });

 return NextResponse.json({ message: "SEED EXCECUTED" });
}
