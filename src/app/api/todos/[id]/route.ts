import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";

interface Segments {
 params: Promise<{ id: string }>;
}

const getTodo = async (id: string): Promise<Todo | null> => {
 const todo = await prisma.todo.findFirst({
  where: { id: id },
 });

 return todo;
};

export async function GET(request: Request, segments: Segments) {
 const { id } = await segments.params;

 const todo = await getTodo(id);

 if (!todo) {
  return NextResponse.json(`element with id ${id} not found`, { status: 404 });
 }

 return NextResponse.json(todo);
}

export async function PUT(request: Request, segments: Segments) {
 const { id } = await segments.params;

 const todo = await getTodo(id);

 if (!todo) {
  return NextResponse.json(`element with id ${id} not found`, { status: 404 });
 }

 try {
  const { description, done } = await request.json();

  const updatedTodo = await prisma.todo.update({
   where: { id: id },
   data: { description, done },
  });

  return NextResponse.json(updatedTodo);
 } catch (error) {
  return NextResponse.json(error, { status: 400 });
 }
}
