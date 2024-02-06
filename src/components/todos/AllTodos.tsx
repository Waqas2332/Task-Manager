import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../db/firebase";
import Spinner from "../ui/Spinner";

type Task = {
  id?: string;
  title?: string;
  isCompleted?: boolean;
  user?: string;
  createdAt?: string;
  description?: string;
};

export default function AllTodos() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getTasks() {
    setIsLoading(true);
    const collectionRef = collection(db, "tasks");
    getDocs(collectionRef)
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

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Spinner /> // Show spinner while loading
      ) : (
        tasks.map((task) => <p key={task.id}>{task.title}</p>)
      )}
    </div>
  );
}
