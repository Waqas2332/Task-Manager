import { useNavigate } from "react-router-dom";
import { Button } from "../@/components/button";

export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col w-[100%] h-[85vh] justify-center items-center space-y-6">
      <h2 className="text-3xl w-[70%] text-center">
        Empower Your Productivity: Your Tasks, Your Way - Effortless
        Organization with <span className="italic">SyncUP</span>
      </h2>
      <Button
        variant="secondary"
        onClick={() => {
          navigate("/auth/login");
        }}
      >
        Login
      </Button>
    </main>
  );
}
