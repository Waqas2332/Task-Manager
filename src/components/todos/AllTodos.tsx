import { useEffect } from "react";

import Spinner from "../ui/Spinner";
import TasksList from "./TasksList";
import { Task } from "../../pages/Todos";

type AllTodosProps = {
  isLoading: boolean;
  tasks: Task[];
  getTasks: () => void;
};

export default function AllTodos({
  isLoading,
  getTasks,
  tasks,
}: AllTodosProps) {
  useEffect(() => {
    getTasks();
  }, []);

  return <div>{isLoading ? <Spinner /> : <TasksList tasks={tasks} />}</div>;
}
