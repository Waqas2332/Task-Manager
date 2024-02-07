import { Link } from "react-router-dom";
import { Button } from "../../@/components/button";
import { signOut } from "firebase/auth";
import { auth } from "../../db/firebase";

type HeaderProps = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({
  isAuthenticated,
  setIsAuthenticated,
}: HeaderProps) {
  async function handleLogout() {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
      setIsAuthenticated(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <header className="bg-white h-16 w-full shadow-sm mb-4">
      <nav className="flex justify-between items-center w-[80%] m-auto h-16">
        <div>
          <Link to="/">SyncUP</Link>
        </div>
        <div className="space-x-6">
          <Link to="/todo/all-todos">Task Manager</Link>
          {isAuthenticated ? (
            <Button onClick={handleLogout}>
              <Link to="/">Logout</Link>
            </Button>
          ) : (
            <Button>
              <Link to="/auth/login">Login</Link>
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}
