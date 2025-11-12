import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { findOne } from "@/lib/helpers/findOne";

export async function GET(request: Request) {
 const { searchParams } = new URL(request.url);

 const take = Number(searchParams.get("take") ?? "10");
 const skip = Number(searchParams.get("skip") ?? "0");

 if (isNaN(take))
  return NextResponse.json(
   { message: "take is not a number" },
   { status: 400 }
  );

 if (isNaN(skip))
  return NextResponse.json(
   { message: "skip is not a number" },
   { status: 400 }
  );

 const todos = await prisma.todo.findMany({ take, skip });
 return NextResponse.json(todos);
}

export async function POST(request: Request) {
 try {
  const body = await request.json();

  // ✅ Usa el helper findOne para validar
  const { description, done } = await findOne(body);

  const newTodo = await prisma.todo.create({
   data: { description, done },
  });

  return NextResponse.json(newTodo);
 } catch (error: any) {
  console.error("POST /todos error:", error);

  return NextResponse.json(
   { message: error.message || "Error interno del servidor" },
   { status: 400 }
  );
 }
}

export async function DELETE(request: Request) {
 try {
  const deletedTodo = await prisma.todo.deleteMany({
   where: { done: true },
  });

  return NextResponse.json("Todos have been deleted");
 } catch (error) {
  return NextResponse.json(error, { status: 400 });
 }
}
