import prisma from "../prisma";

function isUUID(str: string) {
 const uuidRegex =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
 return uuidRegex.test(str);
}

export async function findOne(body: any) {
 const { description, done = false } = body;

 // 🧩 Validación 1: Campo obligatorio
 if (!description) {
  throw new Error("El campo 'description' es obligatorio");
 }

 // 🧩 Validación 2: Tipo de dato
 if (typeof description !== "string") {
  throw new Error("El campo 'description' debe ser un string");
 }

 // 🧩 Validación 3: Longitud mínima (opcional)
 if (description.trim().length < 3) {
  throw new Error("La descripción debe tener al menos 3 caracteres");
 }

 // 🧩 Validación 4: Evitar duplicados (case-insensitive)
 const existingTodo = await prisma.todo.findFirst({
  where: {
   description: {
    equals: description,
    mode: "insensitive",
   },
  },
 });

 if (existingTodo) {
  throw new Error("Ya existe una tarea con esa descripción");
 }

 // ✅ Si todo es correcto, devolver datos normalizados
 return {
  description: description.trim(),
  done: Boolean(done),
 };
}
