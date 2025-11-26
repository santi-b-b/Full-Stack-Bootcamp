import RegisterForm from '@/components/Register';
import LoginBar from '@/components/LoginBar';

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <RegisterForm />
      <LoginBar />
    </div>
  );
}
