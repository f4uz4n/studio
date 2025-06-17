'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { PiggyBank, Target, TrendingUp, CheckCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface SavingsProgressCardProps {
  currentSavings: number;
  targetAmount: number;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function SavingsProgressCard({ currentSavings, targetAmount }: SavingsProgressCardProps) {
  const [progress, setProgress] = useState(0);
  const remainingAmount = Math.max(0, targetAmount - currentSavings);
  const isTargetReached = currentSavings >= targetAmount;

  useEffect(() => {
    // Animate progress bar
    const timer = setTimeout(() => {
      setProgress((currentSavings / targetAmount) * 100);
    }, 300); // Slight delay for animation effect
    return () => clearTimeout(timer);
  }, [currentSavings, targetAmount]);

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-headline text-gray-700 dark:text-gray-200 flex items-center">
            <PiggyBank className="w-7 h-7 mr-3 text-primary" />
            Progres Tabungan Qurban
          </CardTitle>
          {isTargetReached && (
            <span className="flex items-center text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
              <CheckCircle2 className="w-4 h-4 mr-1" />
              Target Tercapai!
            </span>
          )}
        </div>
        <CardDescription className="font-body">
          {isTargetReached 
            ? "Selamat! Anda telah mencapai target tabungan qurban Anda."
            : "Terus tingkatkan tabungan Anda untuk mencapai target qurban tahun ini."}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm font-medium text-muted-foreground">
            <span>Terkumpul</span>
            <span className="text-primary font-semibold">{formatCurrency(currentSavings)}</span>
          </div>
          <Progress value={progress} aria-label={`Progres tabungan ${progress.toFixed(0)}%`} className="h-3 [&>div]:bg-primary transition-all duration-500 ease-out" />
          <div className="flex justify-between items-center text-xs text-muted-foreground">
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="p-4 bg-primary/5 rounded-md">
            <div className="flex items-center text-muted-foreground mb-1">
              <Target className="w-4 h-4 mr-2" />
              Target Tabungan
            </div>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{formatCurrency(targetAmount)}</p>
          </div>
          <div className="p-4 bg-accent/10 rounded-md">
            <div className="flex items-center text-muted-foreground mb-1">
              <TrendingUp className="w-4 h-4 mr-2" />
              Sisa Kebutuhan
            </div>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{formatCurrency(remainingAmount)}</p>
          </div>
        </div>

        {isTargetReached ? (
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg" asChild>
            <Link href="/qurban-realization">
              <CheckCircle2 className="w-5 h-5 mr-2" />
              Realisasikan Qurban Anda
            </Link>
          </Button>
        ) : (
          <Button className="w-full" size="lg" asChild>
            <Link href="/schedule">
              Atur Jadwal Setor Rutin
            </Link>
          </Button>
        )}
         {isTargetReached && (
          <p className="text-xs text-center text-muted-foreground mt-2">
            Dana Anda akan otomatis terkunci untuk proses realisasi qurban.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
