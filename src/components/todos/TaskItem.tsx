import { Task } from "../../pages/Todos";
import { MdDeleteForever } from "react-icons/md";

type TaskItemProps = {
  task: Task;
};

export default function TaskItem({ task }: TaskItemProps) {
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
      <button className="bg-red-600 rounded-md hover:bg-red-800 text-white">
        <MdDeleteForever size="32" />
      </button>
    </li>
  );
}
