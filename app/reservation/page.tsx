'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import {
  CalendarDays,
  Clock,
  Users,
  MapPin,
  ChefHat,
  ArrowRight,
  ArrowLeft,
  Check,
} from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function ReservationPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedMenu, setSelectedMenu] = useState('');
  const [step, setStep] = useState(1);

  const availableTimes = [
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
  ];

  const menus = [
    {
      id: 'premium',
      name: 'Premium Omakase',
      description: '15피스 + 디저트',
      price: '180,000',
      duration: '90분',
      image: '/placeholder.svg?height=300&width=400',
      features: ['계절 생선 15종', '미소시루', '디저트', '녹차'],
    },
    {
      id: 'special',
      name: 'Special Omakase',
      description: '20피스 + 사케 페어링',
      price: '250,000',
      duration: '120분',
      image: '/placeholder.svg?height=300&width=400',
      features: ['프리미엄 생선 20종', '사케 페어링 3잔', '미소시루', '디저트'],
      popular: true,
    },
    {
      id: 'grand',
      name: 'Grand Omakase',
      description: '25피스 + 프리미엄 사케',
      price: '350,000',
      duration: '150분',
      image: '/placeholder.svg?height=300&width=400',
      features: [
        '최고급 생선 25종',
        '프리미엄 사케 페어링',
        '전채 요리',
        '미소시루',
        '디저트',
      ],
    },
  ];

  const stepTitles = ['날짜 & 시간', '메뉴 선택', '고객 정보', '예약 확인'];

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10" />
        <Image
          src="/placeholder.svg?height=400&width=1920"
          alt="예약하기"
          fill
          className="object-cover"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Make a Reservation
          </h1>
          <p className="text-white/90 text-lg font-light">
            특별한 프라이빗 스시 경험을 예약하세요
          </p>
        </div>
      </section>

      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-center mb-16">
            <div className="flex items-center space-x-2 md:space-x-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                        step >= num
                          ? 'bg-gold-500 text-white shadow-lg'
                          : 'bg-white border-2 border-gray-200 text-gray-400'
                      }`}
                    >
                      {step > num ? <Check className="w-5 h-5" /> : num}
                    </div>
                    <span
                      className={`text-xs mt-2 font-medium ${
                        step >= num ? 'text-gold-500' : 'text-gray-400'
                      }`}
                    >
                      {stepTitles[num - 1]}
                    </span>
                  </div>
                  {num < 4 && (
                    <div
                      className={`w-8 md:w-16 h-0.5 mx-2 transition-all duration-300 ${
                        step > num ? 'bg-gold-500' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step 1: Date & Time Selection */}
          {step === 1 && (
            <Card className="bg-white border-0 shadow-xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="font-serif text-3xl text-foreground mb-2">
                  날짜 및 시간 선택
                </CardTitle>
                <p className="text-foreground font-light">
                  원하시는 날짜와 시간을 선택해주세요
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <Label className="text-foreground mb-6 block font-medium text-lg">
                      날짜 선택
                    </Label>
                    <div className="bg-cream-50 p-4 rounded-lg">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md"
                        disabled={(date) => {
                          const day = date.getDay();
                          return (
                            date < new Date() ||
                            (day !== 5 && day !== 6 && day !== 0)
                          ); // 금(5), 토(6), 일(0)만 허용
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-foreground mb-6 block font-medium text-lg">
                      시간 선택
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                      {availableTimes.map((time) => (
                        <Button
                          key={time}
                          variant={
                            selectedTime === time ? 'default' : 'outline'
                          }
                          className={`py-4 rounded-lg font-medium transition-all duration-300 group ${
                            selectedTime === time
                              ? 'bg-gold-500 text-white hover:bg-gold-600 shadow-lg'
                              : 'border-gray-200 text-gray-400 hover:text-foreground hover:border-gold-500 bg-gray-100 hover:bg-white'
                          }`}
                          onClick={() => setSelectedTime(time)}
                        >
                          <span>{time}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end pt-8">
                  <Button
                    onClick={() => setStep(2)}
                    disabled={!selectedDate || !selectedTime}
                    className="bg-gold-500 text-white hover:bg-gold-600 px-8 py-3 rounded-lg font-medium"
                  >
                    다음 단계
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Menu Selection */}
          {step === 2 && (
            <Card className="bg-white border-0 shadow-xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="font-serif text-3xl text-foreground mb-2">
                  메뉴 선택
                </CardTitle>
                <p className="text-foreground font-light">
                  원하시는 오마카세 코스를 선택해주세요
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6">
                  {menus.map((menu) => (
                    <div
                      key={menu.id}
                      className={`relative overflow-hidden rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        selectedMenu === menu.id
                          ? 'border-gold-500 shadow-xl bg-gold-50'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                      onClick={() => setSelectedMenu(menu.id)}
                    >
                      <div className="grid md:grid-cols-3 gap-0">
                        <div className="relative h-48 md:h-auto">
                          <Image
                            src={menu.image || '/placeholder.svg'}
                            alt={menu.name}
                            fill
                            className="object-cover"
                          />
                          {menu.popular && (
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-gold-500 text-white border-0 px-3 py-1">
                                Most Popular
                              </Badge>
                            </div>
                          )}
                        </div>

                        <div className="md:col-span-2 p-6 flex flex-col justify-center">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                                {menu.name}
                              </h3>
                              <p className="text-foreground mb-4 font-light">
                                {menu.description}
                              </p>
                              <div className="flex items-center gap-4 mb-4">
                                <Badge
                                  variant="outline"
                                  className="border-gold-500 text-gold-500 px-3 py-1"
                                >
                                  <Clock className="w-3 h-3 mr-1" />
                                  {menu.duration}
                                </Badge>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-serif text-3xl font-bold text-gold-500">
                                ₩{menu.price}
                              </div>
                              <div className="text-sm text-foreground">
                                per person
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            {menu.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-sm text-foreground"
                              >
                                <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between pt-8">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="px-8 py-3 rounded-lg font-medium"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    이전 단계
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    disabled={!selectedMenu}
                    className="bg-gold-500 text-white hover:bg-gold-600 px-8 py-3 rounded-lg font-medium"
                  >
                    다음 단계
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Customer Information */}
          {step === 3 && (
            <Card className="bg-white border-0 shadow-xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="font-serif text-3xl text-foreground mb-2">
                  고객 정보 입력
                </CardTitle>
                <p className="text-foreground font-light">
                  예약에 필요한 정보를 입력해주세요
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-foreground font-medium"
                    >
                      이름 *
                    </Label>
                    <Input
                      id="name"
                      className="bg-cream-50 border-gray-200 focus:border-gold-500 py-3 rounded-lg"
                      placeholder="성함을 입력해주세요"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-foreground font-medium"
                    >
                      연락처 *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      className="bg-cream-50 border-gray-200 focus:border-gold-500 py-3 rounded-lg"
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="address"
                    className="text-foreground font-medium"
                  >
                    방문 주소 *
                  </Label>
                  <Input
                    id="address"
                    className="bg-cream-50 border-gray-200 focus:border-gold-500 py-3 rounded-lg"
                    placeholder="서울시 강남구 테헤란로 123"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="guests"
                    className="text-foreground font-medium"
                  >
                    인원 수
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-cream-50 border-gray-200 focus:border-gold-500 py-3 rounded-lg">
                      <SelectValue placeholder="인원을 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1명</SelectItem>
                      <SelectItem value="2">2명</SelectItem>
                      <SelectItem value="3">3명</SelectItem>
                      <SelectItem value="4">4명</SelectItem>
                      <SelectItem value="5">5명 이상</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="requests"
                    className="text-foreground font-medium"
                  >
                    요청사항
                  </Label>
                  <Textarea
                    id="requests"
                    placeholder="알레르기, 특별 요청사항 등을 입력해주세요"
                    className="bg-cream-50 border-gray-200 focus:border-gold-500 rounded-lg min-h-[100px]"
                  />
                </div>
                <div className="flex justify-between pt-8">
                  <Button
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="px-8 py-3 rounded-lg font-medium"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    이전 단계
                  </Button>
                  <Button
                    onClick={() => setStep(4)}
                    className="bg-gold-500 text-white hover:bg-gold-600 px-8 py-3 rounded-lg font-medium"
                  >
                    다음 단계
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <Card className="bg-white border-0 shadow-xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="font-serif text-3xl text-foreground mb-2">
                  예약 내용 확인
                </CardTitle>
                <p className="text-foreground font-light">
                  예약 정보를 확인하고 완료해주세요
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="bg-cream-50 p-8 rounded-xl space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                      <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                        <CalendarDays className="w-6 h-6 text-gold-500" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          2024년 1월 15일 (월)
                        </p>
                        <p className="text-sm text-foreground">예약 날짜</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                      <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-gold-500" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">19:00</p>
                        <p className="text-sm text-foreground">예약 시간</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                      <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                        <ChefHat className="w-6 h-6 text-gold-500" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          Premium Omakase
                        </p>
                        <p className="text-sm text-foreground">₩180,000</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                      <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-gold-500" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">2명</p>
                        <p className="text-sm text-foreground">인원 수</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-gold-500" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        서울시 강남구 테헤란로 123
                      </p>
                      <p className="text-sm text-foreground">방문 주소</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gold-50 border border-gold-200 p-6 rounded-xl">
                  <h4 className="font-serif text-lg font-semibold text-gold-700 mb-3">
                    예약 안내사항
                  </h4>
                  <ul className="text-sm text-gold-600 space-y-2">
                    <li>
                      • 예약 확정 후 SMS/이메일로 확인 메시지를 보내드립니다
                    </li>
                    <li>• 예약 변경/취소는 24시간 전까지 가능합니다</li>
                    <li>• 당일 취소 시 취소 수수료가 발생할 수 있습니다</li>
                  </ul>
                </div>

                <div className="flex justify-between pt-8">
                  <Button
                    variant="outline"
                    onClick={() => setStep(3)}
                    className="px-8 py-3 rounded-lg font-medium"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    이전 단계
                  </Button>
                  <Button className="bg-gold-500 text-white hover:bg-gold-600 px-12 py-4 rounded-lg font-medium text-lg shadow-lg">
                    예약 완료
                    <Check className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
