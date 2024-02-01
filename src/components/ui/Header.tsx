import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">SyncUP</Link>
      </div>
      <div>
        <Link to="/todos/all-todos">View Todos</Link>
        <Link to="/todo/add-todo">Add Todo</Link>
        <Link to="/login">Login</Link>
        <Link to="/">Logout</Link>
      </div>
    </header>
  );
}
