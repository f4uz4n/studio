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
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface ProfileFormProps {
  currentUser: User;
}

const profileSchema = z.object({
  name: z.string().min(1, { message: 'Nama tidak boleh kosong.' }),
  email: z.string().email({ message: 'Alamat email tidak valid.' }),
  // Add other fields like phone number if needed
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function ProfileForm({ currentUser }: ProfileFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: currentUser.name,
      email: currentUser.email,
    },
  });

  const onSubmit = async (values: ProfileFormValues) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Updated profile data:', values);
    // In a real app, update user data via API and update AuthContext if needed

    toast({
      title: 'Profil Diperbarui',
      description: 'Informasi profil Anda telah berhasil disimpan.',
      variant: 'default',
    });
    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Alamat Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="email@contoh.com" {...field} disabled /> 
                {/* Email usually not editable or requires verification */}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Add more fields here, e.g., phone number, address */}
        {/* 
        <FormField
          control={form.control}
          name="phone" // assuming you add phone to schema
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nomor Telepon</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="08123456789" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        */}
        <div>
          <Button type="submit" className="w-full sm:w-auto" disabled={isLoading}>
            {isLoading ? 'Menyimpan...' : 'Simpan Perubahan'}
          </Button>
        </div>
      </form>
    </Form>
  );
}
