'use client';

import MainAppLayout from '@/components/layout/MainAppLayout';
import PaymentScheduleForm from '@/components/schedule/PaymentScheduleForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarClock, ListOrdered } from 'lucide-react';

// Mock data for existing schedules
const existingSchedules = [
  { id: '1', amount: 250000, frequency: 'weekly', day: 'Senin', nextPayment: '22 Juli 2024' },
  // { id: '2', amount: 1000000, frequency: 'monthly', day: 'Tanggal 1', nextPayment: '1 Agustus 2024' },
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};


export default function SchedulePage() {
  return (
    <MainAppLayout>
      <div className="space-y-8">
        <div className="text-center">
          <CalendarClock className="w-16 h-16 mx-auto text-primary mb-4" />
          <h1 className="text-3xl md:text-4xl font-headline text-gray-800 dark:text-gray-100">Jadwal Setor Rutin</h1>
          <p className="text-muted-foreground mt-1 max-w-xl mx-auto">
            Atur jadwal setoran rutin untuk mencapai target tabungan qurban Anda lebih cepat dan konsisten.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-xl">Buat atau Ubah Jadwal Setoran</CardTitle>
            <CardDescription>Isi formulir di bawah untuk mengatur preferensi setoran otomatis Anda.</CardDescription>
          </CardHeader>
          <CardContent>
            <PaymentScheduleForm />
          </CardContent>
        </Card>
        
        {existingSchedules.length > 0 && (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-xl flex items-center">
                <ListOrdered className="w-6 h-6 mr-2 text-primary" />
                Jadwal Aktif Anda
              </CardTitle>
              <CardDescription>Berikut adalah jadwal setoran rutin yang telah Anda atur.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {existingSchedules.map(schedule => (
                  <li key={schedule.id} className="p-4 border rounded-md bg-primary/5 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-lg text-primary">{formatCurrency(schedule.amount)}</p>
                      <span className="text-sm capitalize bg-accent/20 text-accent-foreground px-2 py-0.5 rounded-full">{schedule.frequency}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Setiap {schedule.day}</p>
                    <p className="text-xs text-muted-foreground mt-2">Setoran berikutnya: {schedule.nextPayment}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </MainAppLayout>
  );
}
