import { Task } from "../../pages/Todos";
import { MdDeleteForever } from "react-icons/md";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../db/firebase";

type TaskItemProps = {
  task: Task;
  getTasks: () => void;
};

export default function TaskItem({ task, getTasks }: TaskItemProps) {
  async function handleDelete() {
    try {
      await deleteDoc(doc(db, "tasks", task.id!));
      await getTasks();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <li className="flex items-center justify-between border-b border-gray-200 py-3">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-indigo-600 rounded"
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
