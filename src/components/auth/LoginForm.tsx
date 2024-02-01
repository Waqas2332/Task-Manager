import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRef } from "react";
import { FcGoogle } from "react-icons/fc";

import Button from "../ui/Button";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    createUserWithEmailAndPassword(auth, email!, password!)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleGoogleSignIn() {
    console.log("Hello");
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        console.log(user, result, token);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <form className={styles["login-form"]} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" ref={passwordRef} />
        </div>
        <div>
          <Button>Login</Button>
        </div>
      </form>
      <div className={styles.google}>
        <p>More sign in options</p>
        <Button onClick={handleGoogleSignIn}>
          <FcGoogle />
        </Button>
      </div>
    </div>
  );
}
