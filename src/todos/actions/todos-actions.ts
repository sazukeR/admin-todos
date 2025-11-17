"use server";
import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const toggleTodo = async (id: string, done: boolean): Promise<Todo> => {
 const todo = await prisma.todo.findFirst({ where: { id } });

 if (!todo) throw `Todo with id ${id} not found`;

 const updatedTodo = await prisma.todo.update({
  where: { id: id },
  data: { done: done },
 });

 revalidatePath("/dashboard/server-todos");
 return updatedTodo;
};

export const addTodo = async (description: string) => {
 try {
  const newTodo = await prisma.todo.create({
   data: { description: description },
  });

  revalidatePath("/dashboard/server-todos");

  return newTodo;
 } catch (error) {
  throw "Error creating todo";
 }
};

export const deleteCompletedTodos = async (): Promise<void> => {
 try {
  await prisma.todo.deleteMany({
   where: { done: true },
  });

  revalidatePath("/dashboard/server-todos");
 } catch (error) {
  throw "Error deleting completed todos";
 }
};
