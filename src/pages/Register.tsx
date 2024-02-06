import RegisterForm from "../components/auth/RegisterForm";

type RegisterProps = {
  onAuthenticate: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Register({ onAuthenticate }: RegisterProps) {
  return (
    <section className="flex items-center justify-center mt-12 mb-20">
      <RegisterForm onAuthenticate={onAuthenticate} />;
    </section>
  );
}
