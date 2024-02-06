import AllTodos from "../components/todos/AllTodos";
import TodoForm from "../components/todos/TodoForm";

export default function Todos() {
  return (
    <main className="flex flex-col gap-16 mt-20 items-center">
      <TodoForm />
      <AllTodos />
      {/* <Spinner /> */}
    </main>
  );
}
