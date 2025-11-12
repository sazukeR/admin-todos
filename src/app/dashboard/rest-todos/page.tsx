import prisma from "@/lib/prisma";
import { NewTodo } from "@/todos/components/NewTodo";
import { TodosGrid } from "@/todos/components/TodosGrid";

export const metadata = {
 title: "Todo List",
 description: "Todo List",
};

export default async function RestTodosPage() {
 const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

 return (
  <div>
   <div className="p-3 mx-5 mb-5 w-full">
    <NewTodo />
   </div>

   <TodosGrid todos={todos} />
  </div>
 );
}
