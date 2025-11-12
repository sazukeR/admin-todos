import { Todo } from "@prisma/client";

const sleep = async (seconds: number) => {
 return new Promise((resolve) => {
  setTimeout(() => {
   resolve(true);
  }, seconds * 1000);
 });
};

export const updateTodo = async (id: string, done: boolean): Promise<Todo> => {
 const body = { done: done };

 // await sleep(2);

 const todo = await fetch(`/api/todos/${id}`, {
  method: "PUT",
  body: JSON.stringify(body),
  headers: {
   "Content-Type": "aplication/json",
  },
 }).then((res) => res.json());

 return todo;
};

export const createTodo = async (description: string): Promise<Todo> => {
 const body = { description: description };

 const todo = await fetch(`/api/todos`, {
  method: "POST",
  body: JSON.stringify(body),
  headers: {
   "Content-Type": "aplication/json",
  },
 }).then((res) => res.json());

 return todo;
};

export const deleteTodo = async (): Promise<boolean> => {
 await fetch(`/api/todos`, {
  method: "DELETE",

  headers: {
   "Content-Type": "aplication/json",
  },
 }).then((res) => res.json());

 return true;
};
