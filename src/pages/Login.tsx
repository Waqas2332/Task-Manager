import LoginForm from "../components/auth/LoginForm";

type LoginProps = {
  onAuthenticate: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Login({ onAuthenticate }: LoginProps) {
  return (
    <section className="flex items-center justify-center mt-12 mb-20">
      <LoginForm onAuthenticate={onAuthenticate} />;
    </section>
  );
}
