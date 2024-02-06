import { type Task } from "../../pages/Todos";
import TaskItem from "./TaskItem";

type TasksListsProps = {
  isLoading: boolean;
  tasks: Task[];
  getTasks: () => void;
};

export default function TasksList({ tasks, getTasks }: TasksListsProps) {
  return (
    <section>
      <p className="text-3xl text-white">Your Tasks 📃</p>
      <div>
        <ul className="mt-6 mb-6">
          {tasks.map((task) => (
            <TaskItem task={task} getTasks={getTasks} />
          ))}
        </ul>
      </div>
    </section>
  );
}
