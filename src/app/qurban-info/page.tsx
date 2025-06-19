'use client';

import MainAppLayout from '@/components/layout/MainAppLayout';
import QurbanInfoCard from '@/components/qurban-info/QurbanInfoCard';
import { BookOpen, FileText, ShieldQuestion, Users, Info } from 'lucide-react';

// Mock data for Qurban information articles
const qurbanArticles = [
  {
    id: '1',
    title: 'Apa Itu Qurban?',
    summary: 'Memahami definisi, sejarah, dan dasar hukum pelaksanaan ibadah qurban dalam Islam.',
    category: 'Dasar-dasar Qurban',
    icon: BookOpen,
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'islamic scholar teaching'
  },
  {
    id: '2',
    title: 'Syarat Hewan Qurban',
    summary: 'Kriteria hewan yang sah untuk dijadikan qurban, meliputi jenis, usia, dan kondisi fisik.',
    category: 'Ketentuan Hewan',
    icon: FileText,
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'sheep livestock'
  },
  {
    id: '3',
    title: 'Waktu Pelaksanaan Qurban',
    summary: 'Batasan waktu penyembelihan hewan qurban yang sah menurut syariat Islam.',
    category: 'Pelaksanaan',
    icon: ShieldQuestion,
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'islamic calendar prayer'
  },
  {
    id: '4',
    title: 'Distribusi Daging Qurban',
    summary: 'Tata cara pembagian daging qurban kepada yang berhak menerima.',
    category: 'Distribusi',
    icon: Users,
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'charity food distribution'
  },
  {
    id: '5',
    title: 'Hikmah Ibadah Qurban',
    summary: 'Pelajaran dan nilai-nilai spiritual yang terkandung dalam pelaksanaan ibadah qurban.',
    category: 'Hikmah & Manfaat',
    icon: BookOpen,
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'reflection spiritual'
  },
];

export default function QurbanInfoPage() {
  return (
    <MainAppLayout>
      <div className="space-y-8">
        <div className="text-center">
          <Info className="w-16 h-16 mx-auto text-primary mb-4" />
          <h1 className="text-3xl md:text-4xl font-headline text-gray-800 dark:text-gray-100">Informasi Seputar Qurban</h1>
          <p className="text-muted-foreground mt-1 max-w-xl mx-auto">
            Pelajari lebih lanjut tentang ibadah qurban, mulai dari dasar hukum, syarat, hingga hikmahnya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qurbanArticles.map((article) => (
            <QurbanInfoCard
              key={article.id}
              title={article.title}
              summary={article.summary}
              category={article.category}
              icon={article.icon}
              imageUrl={article.imageUrl}
              aiHint={article.aiHint}
              articleId={article.id}
            />
          ))}
        </div>
      </div>
    </MainAppLayout>
  );
}
