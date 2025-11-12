"use client";

import { Todo } from "@prisma/client";

import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

interface Props {
 todo: Todo;
 // TODO: Acciones que quiero llamar

 toggleTodo: (id: string, done: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
 return (
  <div
   onClick={() => toggleTodo(todo.id, !todo.done)}
   className={`${
    todo.done
     ? "line-through bg-blue-50 border-blue-500"
     : "bg-red-50 border-red-500"
   } rounded-lg shadow-sm p-5 border border-dashed flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0`}
  >
   <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
    <div
     className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${
      todo.done ? "bg-blue-100" : "bg-red-100"
     }`}
    >
     {todo.done ? (
      <IoCheckboxOutline size={30} />
     ) : (
      <IoSquareOutline size={30} />
     )}
    </div>

    <div className="text-center sm:text-left">{todo.description}</div>
   </div>
  </div>
 );
};
