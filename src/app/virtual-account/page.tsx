'use client';

import MainAppLayout from '@/components/layout/MainAppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Copy, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// Mock virtual account data
const virtualAccountDetails = {
  bankName: 'Bank Syariah QurbanKu',
  accountNumber: '88081234567890',
  accountHolderName: 'PT QurbanKu Sejahtera (atas nama Anda)',
};

export default function VirtualAccountPage() {
  const { toast } = useToast();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Disalin!',
      description: `${text} telah disalin ke clipboard.`,
    });
  };

  return (
    <MainAppLayout>
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <DollarSign className="w-16 h-16 mx-auto text-primary mb-4" />
          <h1 className="text-3xl md:text-4xl font-headline text-gray-800 dark:text-gray-100">Akun Virtual Anda</h1>
          <p className="text-muted-foreground mt-1">
            Gunakan informasi akun virtual berikut untuk melakukan setoran tabungan qurban Anda.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-xl">Detail Akun Virtual</CardTitle>
            <CardDescription>Pastikan Anda mentransfer ke rekening yang benar.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Nama Bank</p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{virtualAccountDetails.bankName}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Nomor Rekening Virtual</p>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-mono font-semibold text-primary">{virtualAccountDetails.accountNumber}</p>
                <Button variant="ghost" size="icon" onClick={() => handleCopy(virtualAccountDetails.accountNumber)} aria-label="Salin nomor rekening">
                  <Copy className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Atas Nama</p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{virtualAccountDetails.accountHolderName}</p>
            </div>
            
            <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-amber-500" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-amber-700">
                    <strong>Penting:</strong> Nomor rekening virtual ini unik untuk Anda. Mohon untuk tidak memberikannya kepada pihak lain.
                    Setiap transfer ke nomor ini akan otomatis tercatat sebagai tabungan qurban Anda.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
             <CardTitle className="font-headline text-xl">Cara Melakukan Setoran</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Salin Nomor Rekening Virtual di atas.</li>
                <li>Buka aplikasi mobile banking, internet banking, atau pergi ke ATM.</li>
                <li>Pilih menu transfer ke bank lain (jika bank Anda berbeda) atau transfer sesama bank (jika {virtualAccountDetails.bankName}).</li>
                <li>Masukkan {virtualAccountDetails.bankName} sebagai bank tujuan.</li>
                <li>Masukkan Nomor Rekening Virtual yang telah Anda salin.</li>
                <li>Masukkan jumlah setoran yang diinginkan.</li>
                <li>Konfirmasi transaksi. Setoran Anda akan tercatat otomatis.</li>
            </ol>
          </CardContent>
        </Card>

      </div>
    </MainAppLayout>
  );
}
