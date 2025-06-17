'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { ListChecks, ArrowDownCircle, ArrowUpCircle } from 'lucide-react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

// Mock data for recent activities
const activities = [
  { id: '1', type: 'deposit', amount: 250000, date: new Date(2024, 6, 15), description: 'Setoran rutin mingguan' },
  { id: '2', type: 'milestone', amount: 0, date: new Date(2024, 6, 10), description: 'Mencapai 25% target!' },
  { id: '3', type: 'deposit', amount: 150000, date: new Date(2024, 6, 8), description: 'Setoran awal' },
  { id: '4', type: 'schedule_created', amount: 0, date: new Date(2024, 6, 5), description: 'Jadwal setoran dibuat' },
  { id: '5', type: 'deposit', amount: 50000, date: new Date(2024, 6, 1), description: 'Top up saldo' },
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function RecentActivityCard() {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <CardHeader>
        <CardTitle className="text-2xl font-headline text-gray-700 dark:text-gray-200 flex items-center">
          <ListChecks className="w-7 h-7 mr-3 text-primary" />
          Aktivitas Terbaru
        </CardTitle>
        <CardDescription className="font-body">Riwayat transaksi dan perkembangan tabungan Anda.</CardDescription>
      </CardHeader>
      <CardContent>
        {activities.length > 0 ? (
          <ScrollArea className="h-[300px] pr-3">
            <ul className="space-y-4">
              {activities.map((activity) => (
                <li key={activity.id} className="flex items-start space-x-3 p-3 bg-background rounded-md hover:bg-primary/5 transition-colors">
                  <div className="flex-shrink-0 mt-1">
                    {activity.type === 'deposit' ? (
                      <ArrowDownCircle className="w-5 h-5 text-green-500" />
                    ) : activity.type === 'milestone' ? (
                      <ArrowUpCircle className="w-5 h-5 text-blue-500" />
                    ) : (
                      <ListChecks className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-100">{activity.description}</p>
                      {activity.type === 'deposit' && (
                        <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                          {formatCurrency(activity.amount)}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {format(activity.date, "d MMMM yyyy, HH:mm", { locale: id })}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollArea>
        ) : (
          <p className="text-sm text-muted-foreground text-center py-8">Belum ada aktivitas terbaru.</p>
        )}
      </CardContent>
    </Card>
  );
}
