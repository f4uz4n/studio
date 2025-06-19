
'use client';

import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, LayoutDashboard, CalendarPlus, Info, UserCircle, LogOut, DollarSign, ShieldCheck } from 'lucide-react';
import Logo from '@/components/Logo';
import { useAuth } from '@/contexts/AuthContext';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/schedule', label: 'Jadwal Setor', icon: CalendarPlus },
  { href: '/qurban-info', label: 'Info Qurban', icon: Info },
  { href: '/virtual-account', label: 'Akun Virtual', icon: DollarSign },
];

export default function Header() {
  const { user, logout, isAuthenticated } = useAuth();
  const pathname = usePathname();

  if (!isAuthenticated) {
    return null; // Don't render header on login/signup pages handled by AuthProvider redirects
  }
  
  const NavLinkItem = ({ href, label, icon: Icon, isSheetClose = false }: { href: string; label: string; icon: React.ElementType; isSheetClose?: boolean }) => {
    const Comp = isSheetClose ? SheetClose : 'div';
    
    const linkElement = (
      <Link
        href={href}
        className={cn(
          "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
          pathname === href
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
        )}
      >
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </Link>
    );

    if (isSheetClose) {
      // If Comp is SheetClose, pass asChild to it.
      return <Comp asChild>{linkElement}</Comp>;
    } else {
      // If Comp is 'div', it does not take asChild. Render the linkElement within the div.
      return <Comp>{linkElement}</Comp>;
    }
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLinkItem key={link.href} {...link} />
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10 border-2 border-primary/50">
                    <AvatarImage src={`https://placehold.co/100x100.png?text=${user.name.charAt(0)}`} alt={user.name} data-ai-hint="avatar person" />
                    <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none font-headline">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center cursor-pointer">
                    <UserCircle className="mr-2 h-4 w-4" />
                    Profil
                  </Link>
                </DropdownMenuItem>
                 <DropdownMenuItem asChild>
                  <Link href="/security" className="flex items-center cursor-pointer">
                    <ShieldCheck className="mr-2 h-4 w-4" />
                    Keamanan
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="text-red-600 hover:!text-red-600 hover:!bg-red-500/10 cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  Keluar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex space-x-2">
              <Button variant="outline" asChild><Link href="/login">Masuk</Link></Button>
              <Button asChild><Link href="/signup">Daftar</Link></Button>
            </div>
          )}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Buka menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs sm:max-w-sm bg-card">
                <div className="p-4">
                  <Logo className="mb-6"/>
                  <nav className="flex flex-col space-y-2">
                    {navLinks.map((link) => (
                       <NavLinkItem key={link.href} {...link} isSheetClose />
                    ))}
                    {user && ( // Only show profile/logout if user is logged in
                      <>
                        <DropdownMenuSeparator className="my-2" />
                        <NavLinkItem href="/profile" label="Profil" icon={UserCircle} isSheetClose />
                        <NavLinkItem href="/security" label="Keamanan" icon={ShieldCheck} isSheetClose />
                        <SheetClose asChild>
                          <button
                            onClick={logout}
                            className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-500/10 w-full text-left"
                            >
                            <LogOut className="h-5 w-5" />
                            <span>Keluar</span>
                          </button>
                        </SheetClose>
                      </>
                    )}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

// Placeholder for /security page, can be moved later
export function SecurityPagePlaceholder() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-headline">Pengaturan Keamanan</h1>
      <p className="text-muted-foreground">Kelola pengaturan keamanan akun Anda di sini.</p>
    </div>
  );
}
