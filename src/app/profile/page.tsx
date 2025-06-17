'use client';

import MainAppLayout from '@/components/layout/MainAppLayout';
import ProfileForm from '@/components/profile/ProfileForm';
import { useAuth } from '@/contexts/AuthContext';
import { UserCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProfilePage() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <MainAppLayout><div>Loading...</div></MainAppLayout>;
  }

  if (!user) {
    // Should be redirected by AuthProvider, but as a fallback:
    return <MainAppLayout><div>Please log in to view your profile.</div></MainAppLayout>;
  }

  return (
    <MainAppLayout>
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <UserCircle2 className="w-24 h-24 mx-auto text-primary mb-4" />
          <h1 className="text-3xl md:text-4xl font-headline text-gray-800 dark:text-gray-100">Profil Anda</h1>
          <p className="text-muted-foreground mt-1">
            Kelola informasi pribadi dan pengaturan akun Anda.
          </p>
        </div>
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-xl">Informasi Akun</CardTitle>
            <CardDescription>Perbarui detail kontak dan informasi pribadi Anda.</CardDescription>
          </CardHeader>
          <CardContent>
            <ProfileForm currentUser={user} />
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-xl">Pengaturan Keamanan</CardTitle>
            <CardDescription>Ubah kata sandi dan kelola preferensi keamanan.</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Placeholder for security settings, e.g., change password form */}
            <p className="text-muted-foreground">Fitur ubah kata sandi akan segera tersedia.</p>
          </CardContent>
        </Card>
      </div>
    </MainAppLayout>
  );
}
