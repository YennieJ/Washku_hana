'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Search, Calendar, Clock, MapPin, Phone, Edit, X } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function BookingCheckPage() {
  const [bookingNumber, setBookingNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [booking, setBooking] = useState(null);

  const handleSearch = () => {
    // 실제로는 API 호출
    setBooking({
      id: 'SP240115001',
      date: '2024년 1월 15일 (월)',
      time: '19:00',
      menu: 'Premium Omakase',
      guests: 2,
      address: '서울시 강남구 테헤란로 123',
      phone: '010-1234-5678',
      status: 'confirmed',
      price: '180,000원',
      requests: '견과류 알레르기 있습니다',
    });
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10" />
        <Image
          src="/placeholder.svg?height=400&width=1920"
          alt="예약 확인"
          fill
          className="object-cover"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Check Reservation
          </h1>
          <p className="text-white/90 text-lg font-light">
            예약번호와 휴대폰 번호로 예약 내용을 확인하세요
          </p>
        </div>
      </section>

      <div className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          {!booking ? (
            <Card className="bg-white border-0 shadow-xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="font-serif text-3xl text-foreground mb-2">
                  예약 조회
                </CardTitle>
                <p className="text-foreground font-light">
                  예약번호와 휴대폰 번호를 입력해주세요
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="booking-number"
                    className="text-foreground font-medium"
                  >
                    예약번호
                  </Label>
                  <Input
                    id="booking-number"
                    placeholder="SP240115001"
                    value={bookingNumber}
                    onChange={(e) => setBookingNumber(e.target.value)}
                    className="bg-cream-50 border-gray-200 focus:border-gold-500 py-3 rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="phone-number"
                    className="text-foreground font-medium"
                  >
                    휴대폰 번호
                  </Label>
                  <Input
                    id="phone-number"
                    placeholder="010-1234-5678"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="bg-cream-50 border-gray-200 focus:border-gold-500 py-3 rounded-lg"
                  />
                </div>
                <Button
                  onClick={handleSearch}
                  className="w-full bg-gold-500 text-white hover:bg-gold-600 py-4 rounded-lg font-medium"
                  disabled={!bookingNumber || !phoneNumber}
                >
                  <Search className="w-4 h-4 mr-2" />
                  예약 조회
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-8">
              <Card className="bg-white border-0 shadow-xl">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="font-serif text-2xl text-foreground">
                      예약 정보
                    </CardTitle>
                    <Badge
                      className={
                        booking.status === 'confirmed'
                          ? 'bg-green-600 text-white px-4 py-2'
                          : 'bg-yellow-600 text-white px-4 py-2'
                      }
                    >
                      {booking.status === 'confirmed'
                        ? '예약 확정'
                        : '예약 대기'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4 p-4 bg-cream-50 rounded-lg">
                      <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-gold-500" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {booking.date}
                        </p>
                        <p className="text-sm text-foreground">예약 날짜</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-cream-50 rounded-lg">
                      <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-gold-500" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {booking.time}
                        </p>
                        <p className="text-sm text-foreground">예약 시간</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-cream-50 rounded-lg">
                      <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-gold-500" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {booking.address}
                        </p>
                        <p className="text-sm text-foreground">방문 주소</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-cream-50 rounded-lg">
                      <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-gold-500" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {booking.phone}
                        </p>
                        <p className="text-sm text-foreground">연락처</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="font-serif text-lg font-semibold mb-4 text-foreground">
                      주문 내역
                    </h4>
                    <div className="flex justify-between items-center p-4 bg-cream-50 rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">
                          {booking.menu}
                        </p>
                        <p className="text-sm text-foreground">
                          {booking.guests}명
                        </p>
                      </div>
                      <p className="font-serif text-2xl font-bold text-gold-500">
                        ₩{booking.price}
                      </p>
                    </div>
                  </div>

                  {booking.requests && (
                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="font-serif text-lg font-semibold mb-3 text-foreground">
                        요청사항
                      </h4>
                      <p className="text-foreground bg-cream-50 p-4 rounded-lg">
                        {booking.requests}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                <Button className="bg-gold-500 text-white hover:bg-gold-600 py-3 rounded-lg font-medium flex items-center gap-2">
                  <Edit className="w-4 h-4" />
                  예약 변경
                </Button>
                <Button
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-3 rounded-lg font-medium flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  예약 취소
                </Button>
              </div>

              <Button
                variant="ghost"
                onClick={() => setBooking(null)}
                className="w-full text-foreground hover:text-foreground py-3"
              >
                다른 예약 조회하기
              </Button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
