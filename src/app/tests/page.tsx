import { AddForm } from "./add-form";
import { DeleteForm } from "./delete-form";
import { fetchTodos } from "./actions";
import { unstable_noStore as noStore } from "next/cache";

type todos = {
    id: number;
    text: string;
  };

export default async function Home() {
    noStore();
    const todos = await fetchTodos();
    console.log(todos);

    return (
      <main>
        <h1 className="sr-only">Todos</h1>
        <section>
            <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                {todo.text}
                {todo.id}
                <DeleteForm id={todo.id} todo={todo.text} />
                </li>
            ))}
            </ul>
        </section>
        <AddForm />
      </main>
    );
  }
