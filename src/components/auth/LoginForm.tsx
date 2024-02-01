import Button from "../ui/Button";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  return (
    <div>
      <form className={styles["login-form"]}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" />
        </div>
        <Button>Login</Button>
      </form>
    </div>
  );
}
