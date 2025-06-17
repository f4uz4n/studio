// src/app/security/page.tsx
'use client';

import MainAppLayout from '@/components/layout/MainAppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShieldCheck, KeyRound, Fingerprint } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

export default function SecurityPage() {
  const { toast } = useToast();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast({ title: "Error", description: "Kata sandi baru dan konfirmasi tidak cocok.", variant: "destructive" });
      return;
    }
    if (newPassword.length < 6) {
      toast({ title: "Error", description: "Kata sandi baru minimal 6 karakter.", variant: "destructive" });
      return;
    }
    setIsChangingPassword(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Changing password...");
    toast({ title: "Sukses", description: "Kata sandi berhasil diubah." });
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setIsChangingPassword(false);
  };

  return (
    <MainAppLayout>
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <ShieldCheck className="w-16 h-16 mx-auto text-primary mb-4" />
          <h1 className="text-3xl md:text-4xl font-headline text-gray-800 dark:text-gray-100">Pengaturan Keamanan</h1>
          <p className="text-muted-foreground mt-1">
            Kelola kata sandi dan opsi keamanan lainnya untuk akun Anda.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <KeyRound className="w-5 h-5 mr-2 text-primary" />
              Ubah Kata Sandi
            </CardTitle>
            <CardDescription>Untuk keamanan akun Anda, ubah kata sandi secara berkala.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleChangePassword} className="space-y-4">
              <div>
                <Label htmlFor="currentPassword">Kata Sandi Saat Ini</Label>
                <Input 
                  id="currentPassword" 
                  type="password" 
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required 
                />
              </div>
              <div>
                <Label htmlFor="newPassword">Kata Sandi Baru</Label>
                <Input 
                  id="newPassword" 
                  type="password" 
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required 
                />
              </div>
              <div>
                <Label htmlFor="confirmPassword">Konfirmasi Kata Sandi Baru</Label>
                <Input 
                  id="confirmPassword" 
                  type="password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required 
                />
              </div>
              <Button type="submit" disabled={isChangingPassword}>
                {isChangingPassword ? 'Menyimpan...' : 'Ubah Kata Sandi'}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <Fingerprint className="w-5 h-5 mr-2 text-primary" />
              Autentikasi Dua Faktor (2FA)
            </CardTitle>
            <CardDescription>Tambahkan lapisan keamanan ekstra pada akun Anda.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Fitur Autentikasi Dua Faktor (2FA) akan segera hadir untuk meningkatkan keamanan akun QurbanKu Anda.
            </p>
            <Button variant="outline" disabled>Aktifkan 2FA (Segera Hadir)</Button>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-xl">Sesi Aktif</CardTitle>
            <CardDescription>Lihat dan kelola perangkat yang masuk ke akun Anda.</CardDescription>
          </CardHeader>
          <CardContent>
             <p className="text-sm text-muted-foreground">
              Saat ini Anda masuk dari perangkat ini. Fitur pengelolaan sesi aktif akan segera tersedia.
            </p>
            {/* Placeholder for active sessions list */}
          </CardContent>
        </Card>

      </div>
    </MainAppLayout>
  );
}
