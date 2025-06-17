'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";


interface AuthFormProps {
  mode: 'login' | 'signup';
}

const loginSchema = z.object({
  email: z.string().email({ message: 'Alamat email tidak valid.' }),
  password: z.string().min(1, { message: 'Kata sandi tidak boleh kosong.' }),
});

const signupSchema = z.object({
  name: z.string().min(1, { message: 'Nama tidak boleh kosong.' }),
  email: z.string().email({ message: 'Alamat email tidak valid.' }),
  password: z.string().min(6, { message: 'Kata sandi minimal 6 karakter.' }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Konfirmasi kata sandi tidak cocok.',
  path: ['confirmPassword'],
});

type LoginFormValues = z.infer<typeof loginSchema>;
type SignupFormValues = z.infer<typeof signupSchema>;

export default function AuthForm({ mode }: AuthFormProps) {
  const { login: authLogin } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = mode === 'login' ? loginSchema : signupSchema;
  type FormValues = typeof mode extends 'login' ? LoginFormValues : SignupFormValues;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: mode === 'login' 
      ? { email: '', password: '' } 
      : { name: '', email: '', password: '', confirmPassword: '' } as any, // Need type assertion for SignupFormValues
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    setError(null);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      if (mode === 'login') {
        // Mock login: in a real app, call your backend API
        if (values.email === 'user@example.com' && (values as LoginFormValues).password === 'password123') {
          authLogin({ id: '1', name: 'Demo User', email: values.email });
          router.push('/');
        } else {
          setError('Email atau kata sandi salah.');
        }
      } else {
        // Mock signup
        const signupValues = values as SignupFormValues;
        console.log('Signup data:', signupValues);
        // In a real app, register user then login
        authLogin({ id: '2', name: signupValues.name, email: signupValues.email });
        router.push('/');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-8 bg-card rounded-xl shadow-2xl">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold font-headline text-foreground">
          {mode === 'login' ? 'Masuk ke Akun Anda' : 'Buat Akun Baru'}
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          {mode === 'login' ? (
            <>
              Atau{' '}
              <Link href="/signup" className="font-medium text-primary hover:text-primary/80">
                buat akun baru
              </Link>
            </>
          ) : (
            <>
              Sudah punya akun?{' '}
              <Link href="/login" className="font-medium text-primary hover:text-primary/80">
                masuk di sini
              </Link>
            </>
          )}
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {mode === 'signup' && (
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Lengkap</FormLabel>
                  <FormControl>
                    <Input placeholder="Nama Anda" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alamat Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="email@contoh.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kata Sandi</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {mode === 'signup' && (
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Konfirmasi Kata Sandi</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {error && (
             <Alert variant="destructive">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Kesalahan</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (mode === 'login' ? 'Memproses Masuk...' : 'Memproses Daftar...') : (mode === 'login' ? 'Masuk' : 'Daftar')}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
