import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import * as z from "zod";
import { FcGoogle } from "react-icons/fc";

import { Button } from "../../@/components/button.tsx";
import CardWrapper from "../ui/CardWrapper.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../@/components/form.tsx";
import { Input } from "../../@/components/input.tsx";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../schemas/index.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { Link, useNavigate } from "react-router-dom";

type LoginFormProps = {
  onAuthenticate: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoginForm({ onAuthenticate }: LoginFormProps) {
  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  function onSubmit(values: z.infer<typeof loginSchema>) {
    startTransition(() => {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          const user = userCredential.user;
          localStorage.setItem("user", user.email!);
          navigate("/todo/all-todos");
          onAuthenticate(true);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  function handleGoogleSignIn() {
    console.log("Hello");
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem("user", user.email!);
        navigate("/todo/all-todos");
        onAuthenticate(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <section className="">
      <CardWrapper title="Login" description="Welcome Back!">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-6">
              <FormField
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        {...field}
                        placeholder="waqasmunir@example.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        {...field}
                        type="password"
                        placeholder="123456"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-4">
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isPending}
                  size="default"
                >
                  Login
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full mt-8 space-x-2"
                  onClick={handleGoogleSignIn}
                  size="default"
                >
                  <span>Sign in With Google</span>
                  <FcGoogle className="w-5 h-5" />
                </Button>
                <p className="text-center">
                  <Link to="/auth/register" className="text-center text-sm">
                    Don't have an account? Register
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </Form>
      </CardWrapper>
    </section>
  );
}
