import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white h-16 w-full shadow-sm mb-4">
      <nav className="flex justify-between items-center w-[80%] m-auto h-16">
        <div>
          <Link to="/">SyncUP</Link>
        </div>
        <div className="space-x-6">
          <Link to="/todos/all-todos">View Tasks</Link>
          <Link to="/todo/add-todo">Add Task</Link>
          <Link to="/login">Login</Link>
          <Link to="/">Logout</Link>
        </div>
      </nav>
    </header>
  );
}
