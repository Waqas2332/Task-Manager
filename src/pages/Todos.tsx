import AllTodos from "../components/todos/AllTodos";
import TodoForm from "../components/todos/TodoForm";
import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../db/firebase";

export type Task = {
  id?: string;
  title?: string;
  isCompleted?: boolean;
  user?: string;
  createdAt?: string;
  description?: string;
};

export default function Todos() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getTasks() {
    setIsLoading(true);
    const userEmail = localStorage.getItem("user");
    const collectionRef = collection(db, "tasks");
    const queryRef = userEmail
      ? query(collectionRef, where("user", "==", userEmail))
      : collectionRef;
    getDocs(queryRef)
      .then((snapshot) => {
        const tasksData: Task[] = [];
        snapshot.docs.forEach((doc) => {
          tasksData.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        setTasks(tasksData);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <main className="flex flex-col gap-16 mt-20">
      <div className="sm:w-[90%] md:w-[450px] m-auto space-y-10">
        <TodoForm getTasks={getTasks} />
        <AllTodos isLoading={isLoading} tasks={tasks} getTasks={getTasks} />
      </div>
    </main>
  );
}
