import { Task } from "../../pages/Todos";
import { MdDeleteForever } from "react-icons/md";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../db/firebase";
import { useState } from "react";

type TaskItemProps = {
  task: Task;
  getTasks: () => void;
};

export default function TaskItem({ task, getTasks }: TaskItemProps) {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  async function handleDelete() {
    try {
      await deleteDoc(doc(db, "tasks", task.id!));
      await getTasks();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleComplete() {
    const newIsCompleted = !isCompleted;
    setIsCompleted(newIsCompleted);

    try {
      const taskRef = doc(db, "tasks", task.id!);
      console.log(isCompleted);

      await updateDoc(taskRef, {
        isCompleted: newIsCompleted,
      });

      getTasks();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <li className="flex items-center justify-between border-b border-gray-200 py-3">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={isCompleted}
          disabled={isCompleted}
          className="form-checkbox h-5 w-5 text-indigo-600 rounded"
          onChange={handleComplete}
        />
        <p
          className={`${
            task.isCompleted ? "line-through text-gray-500" : ""
          } text-white capitalize`}
        >
          {task.title}
        </p>
      </div>
      <button
        onClick={handleDelete}
        className="bg-red-600 rounded-md hover:bg-red-800 text-white"
      >
        <MdDeleteForever size="32" />
      </button>
    </li>
  );
}
