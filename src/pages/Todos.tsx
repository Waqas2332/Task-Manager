import AllTodos from "../components/todos/AllTodos";
import TodoForm from "../components/todos/TodoForm";

export default function Todos() {
  return (
    <main className="flex flex-col gap-16 mt-20">
      <div className="sm:w-[90%] md:w-[450px] m-auto space-y-10">
        <TodoForm />
        <AllTodos />
      </div>
    </main>
  );
}
