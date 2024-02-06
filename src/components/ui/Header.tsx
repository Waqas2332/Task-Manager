import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white h-16 w-full shadow-sm mb-4">
      <nav className="flex justify-between items-center w-[80%] m-auto h-16">
        <div>
          <Link to="/">SyncUP</Link>
        </div>
        <div className="space-x-6">
          <Link to="/todo/all-todos">Task Manager</Link>
          <Link to="/auth/login">Login</Link>
          <Link to="/">Logout</Link>
        </div>
      </nav>
    </header>
  );
}
