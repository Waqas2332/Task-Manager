import { type Task } from "../../pages/Todos";
import TaskItem from "./TaskItem";

type TasksListsProps = {
  tasks: Task[];
};

export default function TasksList({ tasks }: TasksListsProps) {
  return (
    <section>
      <p className="text-3xl text-white">Your Tasks 📃</p>
      <div>
        <ul className="mt-6 mb-6">
          {tasks.map((task) => (
            <TaskItem task={task} />
          ))}
        </ul>
      </div>
    </section>
  );
}
