'use server';

import { revalidatePath } from "next/cache";
import { sql } from "@vercel/postgres";
import { z } from "zod";

type todos = {
    id: number;
    text: string;
  };

export async function fetchTodos() {
    const data = await sql<todos>`SELECT todos.text, todos.id FROM todos`;
    return data.rows;
  }


export async function createTodo(
    prevState: {
      message: string;
    },
    formData: FormData,
  ) {
    const schema = z.object({
      todo: z.string().min(1),
    });
    const parse = schema.safeParse({
      todo: formData.get("todo"),
    });
  
    if (!parse.success) {
      return { message: "Failed to create todo" };
    }
  
    const data = parse.data;
  
    try {
      await sql`
        INSERT INTO todos (text)
        VALUES (${data.todo})
      `;
  
      revalidatePath("/");
      return { message: `Added todo ${data.todo}` };
    } catch (e) {
      return { message: "Failed to create todo" };
    }
  }

export async function deleteTodo(
    prevState: {
      message: string;
    },
    formData: FormData,
  ) {
    const schema = z.object({
      id: z.string().min(1),
      todo: z.string().min(1),
    });
    const data = schema.parse({
      id: formData.get("id"),
      todo: formData.get("todo"),
    });
  
    try {
      await sql`
        DELETE FROM todos
        WHERE id = ${data.id};
      `;
  
      revalidatePath("/");
      return { message: `Deleted todo ${data.todo}` };
    } catch (e) {
      return { message: "Failed to delete todo" };
    }
  }

