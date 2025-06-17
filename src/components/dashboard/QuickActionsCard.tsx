'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, Edit3, HelpCircle, ShieldCheck, History } from 'lucide-react';

const actions = [
  { href: '/schedule/new', label: 'Buat Jadwal Setor', icon: PlusCircle, variant: 'default' as const },
  { href: '/qurban-info', label: 'Pelajari Info Qurban', icon: HelpCircle, variant: 'outline' as const },
  { href: '/profile', label: 'Ubah Profil', icon: Edit3, variant: 'outline' as const },
  { href: '/transactions', label: 'Riwayat Transaksi', icon: History, variant: 'outline' as const },
];

export default function QuickActionsCard() {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <CardHeader>
        <CardTitle className="text-2xl font-headline text-gray-700 dark:text-gray-200 flex items-center">
          <ShieldCheck className="w-7 h-7 mr-3 text-primary" /> {/* Using ShieldCheck as a placeholder, can change */}
          Aksi Cepat
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-3">
        {actions.map((action) => (
          <Button key={action.href} variant={action.variant} className="w-full justify-start text-left" asChild size="lg">
            <Link href={action.href}>
              <action.icon className="w-5 h-5 mr-3" />
              {action.label}
            </Link>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
