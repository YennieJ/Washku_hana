'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Calendar, BookOpen, Search, LogIn } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/reservation', label: '예약하기', icon: Calendar },
    { href: '/menu', label: '메뉴 소개', icon: BookOpen },
    { href: '/booking-check', label: '내 예약 확인', icon: Search },
    { href: '/login', label: '로그인/회원가입', icon: LogIn },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <span className="font-serif text-2xl font-bold text-gold-500">
            SUSHI PRIVATE
          </span>
        </Link>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:bg-cream-100"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white border-gray-200 w-80">
            <div className="mb-8">
              <span className="font-serif text-xl font-bold text-gold-500">
                SUSHI PRIVATE
              </span>
            </div>

            <nav className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-4 rounded-lg hover:bg-cream-100 transition-colors text-foreground hover:text-gold-500 group"
                  >
                    <Icon className="w-5 h-5 group-hover:text-gold-500" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-8 p-4 bg-cream-50 rounded-lg">
              <p className="text-sm text-foreground font-medium mb-2">
                예약 문의
              </p>
              <p className="text-xs text-foreground">
                카카오톡: @sushi_private
                <br />
                이메일: info@sushiprivate.com
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
