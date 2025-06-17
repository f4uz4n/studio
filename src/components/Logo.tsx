import { PiggyBank } from 'lucide-react';
import Link from 'next/link';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function Logo({ size = 'medium', className = '' }: LogoProps) {
  const sizeClasses = {
    small: 'h-8 w-8',
    medium: 'h-10 w-10',
    large: 'h-12 w-12',
  };
  const textSizeClasses = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-3xl',
  }

  return (
    <Link href="/" className={`flex items-center space-x-2 text-primary ${className}`} aria-label="QurbanKu Home">
      <PiggyBank className={`${sizeClasses[size]} text-primary`} />
      <span className={`font-headline font-bold ${textSizeClasses[size]}`}>QurbanKu</span>
    </Link>
  );
}
