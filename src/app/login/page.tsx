import AuthForm from '@/components/auth/AuthForm';
import Logo from '@/components/Logo';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 via-background to-accent/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-8 left-8">
        <Logo />
      </div>
      <AuthForm mode="login" />
    </div>
  );
}
