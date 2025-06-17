// src/app/qurban-realization/page.tsx
'use client';

import MainAppLayout from '@/components/layout/MainAppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Sheep, Users, MapPin, CalendarDays, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Mock data for Qurban options
const qurbanOptions = [
  { id: 'domba_std', name: 'Domba Standar', type: 'Domba', price: 3300000, weight: '23-25 kg', imageUrl: 'https://placehold.co/300x200.png?text=Domba', aiHint: 'sheep animal' },
  { id: 'sapi_patungan', name: 'Patungan Sapi (1/7)', type: 'Sapi', price: 3300000, weight: ' estimasi 1/7 bagian', imageUrl: 'https://placehold.co/300x200.png?text=Sapi', aiHint: 'cow animal' },
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function QurbanRealizationPage() {
  // Assume target is met and savings amount is available
  const savingsAmount = 3300000; 

  return (
    <MainAppLayout>
      <div className="space-y-8">
        <div className="text-center">
          <CheckCircle2 className="w-16 h-16 mx-auto text-green-600 mb-4" />
          <h1 className="text-3xl md:text-4xl font-headline text-gray-800 dark:text-gray-100">Realisasikan Qurban Anda</h1>
          <p className="text-muted-foreground mt-1 max-w-xl mx-auto">
            Selamat! Tabungan Anda telah mencapai target. Pilih jenis hewan qurban yang Anda inginkan.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-xl">Saldo Tabungan Anda</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">{formatCurrency(savingsAmount)}</p>
            <p className="text-sm text-muted-foreground">Saldo ini siap digunakan untuk realisasi qurban.</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {qurbanOptions.map(option => (
            <Card key={option.id} className="shadow-md hover:shadow-xl transition-shadow flex flex-col">
              <CardHeader>
                 <div className="relative w-full h-40 rounded-t-md overflow-hidden mb-4">
                    <Image src={option.imageUrl} alt={option.name} layout="fill" objectFit="cover" data-ai-hint={option.aiHint} />
                </div>
                <CardTitle className="font-headline text-lg flex items-center">
                  {option.type === 'Domba' ? <Sheep className="w-5 h-5 mr-2 text-primary" /> : <Users className="w-5 h-5 mr-2 text-primary" />}
                  {option.name}
                </CardTitle>
                <CardDescription>Estimasi berat: {option.weight}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">{formatCurrency(option.price)}</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-primary/70" /> Distribusi ke daerah membutuhkan.</li>
                  <li className="flex items-center"><CalendarDays className="w-4 h-4 mr-2 text-primary/70" /> Penyembelihan sesuai syariat Islam.</li>
                </ul>
              </CardContent>
              <CardFooter>
                 <Button className="w-full" disabled={savingsAmount < option.price}>
                  {savingsAmount < option.price ? "Saldo Tidak Cukup" : `Pilih ${option.type === 'Domba' ? 'Domba Ini' : 'Patungan Sapi Ini'}`}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-md">
            <div className="flex">
            <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-blue-500" aria-hidden="true" />
            </div>
            <div className="ml-3">
                <p className="text-sm text-blue-700">
                <strong>Informasi Tambahan:</strong> Setelah memilih hewan qurban, tim kami akan menghubungi Anda untuk proses verifikasi dan detail penyaluran. 
                Anda juga akan mendapatkan laporan dokumentasi pelaksanaan qurban. Untuk pertanyaan lebih lanjut, hubungi <Link href="/contact" className="font-medium underline hover:text-blue-600">layanan pelanggan kami</Link>.
                </p>
            </div>
            </div>
        </div>

      </div>
    </MainAppLayout>
  );
}
