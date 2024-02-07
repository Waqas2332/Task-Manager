import { type FormEvent, useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../db/firebase";
import { Button } from "../../@/components/button.tsx";
import { FaPlus } from "react-icons/fa6";

type TodoFormProps = {
  getTasks: () => void;
};

export default function TodoForm({ getTasks }: TodoFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      await addDoc(collection(db, "tasks"), {
        title: titleRef.current?.value,
        createdAt: formattedDate,
        isCompleted: false,
        user: localStorage.getItem("user"),
      });
      await getTasks();
    } catch (error) {
      console.log(error);
    } finally {
      titleRef.current!.value = " ";
    }
  }

  return (
    <div>
      <form
        className="flex gap-3 sm:w-[90%] md:w-[450px]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-[90%]">
          <label className="text-white" htmlFor="title">
            Add New Task
          </label>
          <input
            type="text"
            id="title"
            className="p-2 ps-4 outline-none rounded-md"
            ref={titleRef}
          />
        </div>

        <Button className="mt-6">
          <FaPlus />
        </Button>
      </form>
    </div>
  );
}
