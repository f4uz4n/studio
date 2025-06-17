'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface QurbanInfoCardProps {
  title: string;
  summary: string;
  category: string;
  icon: React.ElementType;
  imageUrl: string;
  aiHint: string;
  articleId: string;
}

export default function QurbanInfoCard({
  title,
  summary,
  category,
  icon: Icon,
  imageUrl,
  aiHint,
  articleId
}: QurbanInfoCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative w-full h-48 overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="group-hover:scale-105 transition-transform duration-300"
          data-ai-hint={aiHint} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <Badge variant="secondary" className="absolute top-3 right-3 bg-primary/80 text-primary-foreground backdrop-blur-sm">
          {category}
        </Badge>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="font-headline text-xl text-gray-800 dark:text-gray-100 line-clamp-2 group-hover:text-primary transition-colors">
          <Icon className="inline-block w-5 h-5 mr-2 mb-1 text-primary/70" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="font-body text-sm leading-relaxed line-clamp-3">
          {summary}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full text-primary hover:text-primary hover:bg-primary/10" asChild>
          {/* In a real app, this would link to a detailed article page: /qurban-info/${articleId} */}
          <Link href={`/qurban-info/#${articleId}`}> 
            Baca Selengkapnya <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
