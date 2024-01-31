import { type FormEvent, useRef } from "react";
import styles from "./TodoForm.module.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../db/firebase";
import Button from "../ui/Button";

export default function TodoForm() {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const isCompleted = useRef<HTMLInputElement>(null);

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
      const taskRef = await addDoc(collection(db, "tasks"), {
        title: titleRef.current?.value,
        descriptionRef: descriptionRef.current?.value,
        isCompleted: isCompleted.current?.checked,
        createdAt: formattedDate,
      });
      console.log(taskRef);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form className={styles["todo-form"]} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Task Title</label>
          <input type="text" id="title" ref={titleRef} />
        </div>
        <div>
          <label htmlFor="description">Task Description</label>
          <textarea rows={10} id="description" ref={descriptionRef}></textarea>
        </div>
        <div>
          <input type="checkbox" id="complete" ref={isCompleted} />
          <label htmlFor="complete">Completed</label>
        </div>
        <Button>Add Task</Button>
      </form>
    </div>
  );
}
