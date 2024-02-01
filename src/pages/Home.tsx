import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <main className={styles.home}>
      <h2>
        Empower Your Productivity: Your Tasks, Your Way - Effortless
        Organization with SyncUP
      </h2>
      <button
        onClick={() => {
          navigate("/auth/login");
        }}
      >
        Login
      </button>
    </main>
  );
}
