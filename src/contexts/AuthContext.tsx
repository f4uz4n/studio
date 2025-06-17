// src/contexts/AuthContext.tsx
'use client';
import type { ReactNode } from 'react';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Mock checking for an existing session
    const mockSessionCheck = setTimeout(() => {
      const storedUser = localStorage.getItem('qurbanKuUser');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setIsLoading(false);
    }, 500); // Simulate async check
    return () => clearTimeout(mockSessionCheck);
  }, []);

  useEffect(() => {
    if (!isLoading && !user && !['/login', '/signup'].includes(pathname)) {
      router.push('/login');
    }
    if (!isLoading && user && ['/login', '/signup'].includes(pathname)) {
      router.push('/');
    }
  }, [user, isLoading, pathname, router]);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('qurbanKuUser', JSON.stringify(userData)); // Mock session persistence
    router.push('/');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('qurbanKuUser');
    router.push('/login');
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, isLoading }}>
      {isLoading ? <LoadingScreen /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const LoadingScreen = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="flex flex-col items-center">
      {/* You can replace this with a more sophisticated SVG logo or animation */}
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary animate-pulse h-16 w-16"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-4h4v-2h-4v2zm0-4h4V8h-4v4z"/></svg>
      <p className="text-primary font-headline mt-4 text-lg">Loading QurbanKu...</p>
    </div>
  </div>
);
