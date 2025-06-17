'use client';

import MainAppLayout from '@/components/layout/MainAppLayout';
import SavingsProgressCard from '@/components/dashboard/SavingsProgressCard';
import RecentActivityCard from '@/components/dashboard/RecentActivityCard';
import QuickActionsCard from '@/components/dashboard/QuickActionsCard';
import QurbanInfoHighlightCard from '@/components/dashboard/QurbanInfoHighlightCard';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PiggyBank, CalendarPlus, Info, DollarSign } from 'lucide-react';

export default function DashboardPage() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
         {/* Consistent loading state or handled by AuthProvider */}
      </div>
    );
  }

  if (!user) {
     // This case should ideally be handled by AuthProvider redirecting to /login
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 text-center">
        <PiggyBank className="w-16 h-16 text-primary mb-4" />
        <h1 className="text-3xl font-headline text-primary mb-2">Selamat Datang di QurbanKu</h1>
        <p className="text-muted-foreground mb-6">Silakan masuk untuk mengelola tabungan qurban Anda.</p>
        <Button asChild size="lg">
          <Link href="/login">Masuk Sekarang</Link>
        </Button>
      </div>
    );
  }
  
  const targetAmount = 3300000;
  // Mocked current savings, in a real app this would come from user data
  const currentSavings = 1250000; 

  return (
    <MainAppLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-headline text-gray-800 dark:text-gray-100">
            Selamat Datang, <span className="text-primary">{user.name}!</span>
          </h1>
          <p className="text-muted-foreground mt-1">
            Kelola tabungan qurban Anda dengan mudah dan transparan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <SavingsProgressCard currentSavings={currentSavings} targetAmount={targetAmount} />
          </div>
          <QuickActionsCard />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentActivityCard />
          <QurbanInfoHighlightCard />
        </div>

        {/* Placeholder for Virtual Account Info */}
        <div className="p-6 bg-card rounded-lg shadow">
           <div className="flex items-center mb-4">
            <DollarSign className="w-6 h-6 text-primary mr-3" />
            <h2 className="text-xl font-headline text-gray-700 dark:text-gray-200">Informasi Akun Virtual</h2>
          </div>
          <p className="text-muted-foreground">
            Informasi akun virtual Anda akan ditampilkan di sini setelah dibuat. Saat ini fitur ini dalam pengembangan.
          </p>
          <Button variant="outline" className="mt-4" disabled>Lihat Detail Akun Virtual</Button>
        </div>

      </div>
    </MainAppLayout>
  );
}
