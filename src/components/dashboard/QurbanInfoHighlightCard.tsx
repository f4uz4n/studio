
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowRight } from 'lucide-react';

export default function QurbanInfoHighlightCard() {
  // Mock highlight data
  const highlight = {
    title: "Memahami Makna Qurban",
    description: "Pelajari lebih dalam tentang signifikansi ibadah qurban dalam Islam, syarat-syaratnya, dan hikmah di baliknya.",
    imageUrl: "https://placehold.co/600x400.png", // Placeholder image
    aiHint: "islamic calligraphy book"
  };

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl font-headline text-gray-700 dark:text-gray-200 flex items-center">
          <BookOpen className="w-7 h-7 mr-3 text-primary" />
          Info Qurban Pilihan
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="relative w-full h-48 rounded-md overflow-hidden mb-4 group">
          <Image 
            src={highlight.imageUrl} 
            alt={highlight.title} 
            layout="fill" 
            objectFit="cover" 
            className="group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={highlight.aiHint}
          />
           <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
        </div>
        <h3 className="text-lg font-semibold font-headline text-gray-800 dark:text-gray-100 mb-1">{highlight.title}</h3>
        <CardDescription className="font-body text-sm leading-relaxed">
          {highlight.description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full text-primary hover:text-primary hover:bg-primary/10" asChild>
          <Link href="/qurban-info">
            Baca Selengkapnya <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
