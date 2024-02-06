import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import * as z from "zod";

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

type RegisterFormProps = {
  onAuthenticate: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function RegisterForm({ onAuthenticate }: RegisterFormProps) {
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

  function onSubmit(values: z.infer<typeof loginSchema>) {
    startTransition(() => {
      createUserWithEmailAndPassword(auth, values.email, values.password)
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

  return (
    <section className="">
      <CardWrapper title="Register" description="Welcome to SyncUP">
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
              <div className="space-y-10">
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isPending}
                  size="default"
                >
                  Register
                </Button>
                <p className="text-sm text-center">
                  <Link to="/auth/login">Already have an account? Sign in</Link>
                </p>
              </div>
            </div>
          </form>
        </Form>
      </CardWrapper>
    </section>
  );
}
