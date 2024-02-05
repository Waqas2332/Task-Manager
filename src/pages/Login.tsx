import LoginForm from "../components/auth/LoginForm";

type LoginProps = {
  onAuthenticate: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Login({ onAuthenticate }: LoginProps) {
  return <LoginForm onAuthenticate={onAuthenticate} />;
}
