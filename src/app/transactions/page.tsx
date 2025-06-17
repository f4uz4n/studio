// src/app/transactions/page.tsx
'use client';

import MainAppLayout from '@/components/layout/MainAppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { History, ArrowDownCircle, ArrowUpCircle, FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

// Mock transaction data
const transactions = [
  { id: 'txn_001', date: new Date(2024, 6, 15, 10, 30), type: 'Setoran Rutin', description: 'Setoran mingguan via VA', amount: 250000, status: 'Berhasil' },
  { id: 'txn_002', date: new Date(2024, 6, 8, 14, 15), type: 'Setoran Awal', description: 'Setoran pertama tabungan', amount: 150000, status: 'Berhasil' },
  { id: 'txn_003', date: new Date(2024, 6, 1, 9, 0), type: 'Top Up Saldo', description: 'Penambahan saldo manual', amount: 50000, status: 'Berhasil' },
  { id: 'txn_004', date: new Date(2024, 5, 25, 11, 50), type: 'Penyesuaian Admin', description: 'Koreksi saldo', amount: -5000, status: 'Berhasil', isAdjustment: true },
  { id: 'txn_005', date: new Date(2024, 5, 20, 16, 5), type: 'Setoran Rutin', description: 'Setoran mingguan via VA', amount: 250000, status: 'Pending' },
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const getStatusBadgeVariant = (status: string) => {
  switch (status.toLowerCase()) {
    case 'berhasil': return 'default'; // Will use primary color
    case 'pending': return 'secondary'; // Will use accent color
    case 'gagal': return 'destructive';
    default: return 'outline';
  }
};

export default function TransactionsPage() {
  return (
    <MainAppLayout>
      <div className="space-y-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-headline text-gray-800 dark:text-gray-100 flex items-center justify-center md:justify-start">
              <History className="w-8 h-8 mr-3 text-primary" />
              Riwayat Transaksi
            </h1>
            <p className="text-muted-foreground mt-1">
              Lihat semua catatan setoran dan aktivitas keuangan Anda.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            <Download className="w-4 h-4 mr-2" />
            Unduh Laporan
          </Button>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-xl">Daftar Transaksi</CardTitle>
            <CardDescription>Berikut adalah semua transaksi yang tercatat di akun Anda.</CardDescription>
          </CardHeader>
          <CardContent>
            {transactions.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tanggal</TableHead>
                    <TableHead>Jenis</TableHead>
                    <TableHead>Deskripsi</TableHead>
                    <TableHead className="text-right">Jumlah</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((txn) => (
                    <TableRow key={txn.id} className="hover:bg-muted/50">
                      <TableCell className="font-medium whitespace-nowrap">
                        {format(txn.date, "dd MMM yyyy, HH:mm", { locale: id })}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {txn.amount > 0 && !txn.isAdjustment ? <ArrowDownCircle className="w-4 h-4 mr-2 text-green-500" /> : 
                           txn.amount < 0 && txn.isAdjustment ? <ArrowUpCircle className="w-4 h-4 mr-2 text-red-500" /> :
                           <FileText className="w-4 h-4 mr-2 text-gray-500" /> }
                          {txn.type}
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{txn.description}</TableCell>
                      <TableCell className={`text-right font-semibold ${txn.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {formatCurrency(txn.amount)}
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant={getStatusBadgeVariant(txn.status)} className={
                          txn.status === 'Berhasil' ? 'bg-green-100 text-green-700 border-green-300' : 
                          txn.status === 'Pending' ? 'bg-yellow-100 text-yellow-700 border-yellow-300' :
                          'bg-red-100 text-red-700 border-red-300' // Gagal
                        }>
                          {txn.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <p className="text-center text-muted-foreground py-10">
                Belum ada transaksi tercatat.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </MainAppLayout>
  );
}
