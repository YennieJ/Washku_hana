import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, Star } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function MenuPage() {
  const menus = [
    {
      id: 'premium',
      name: 'Premium Omakase',
      description: '15피스 + 디저트',
      price: '180,000',
      duration: '90분',
      maxGuests: 4,
      image: '/placeholder.svg?height=400&width=600',
      features: ['계절 생선 15종', '미소시루', '디저트', '녹차'],
      popular: true,
    },
    {
      id: 'special',
      name: 'Special Omakase',
      description: '20피스 + 디저트 + 사케 페어링',
      price: '250,000',
      duration: '120분',
      maxGuests: 4,
      image: '/placeholder.svg?height=400&width=600',
      features: [
        '프리미엄 생선 20종',
        '사케 페어링 3잔',
        '미소시루',
        '디저트',
        '녹차',
      ],
      popular: false,
    },
    {
      id: 'grand',
      name: 'Grand Omakase',
      description: '25피스 + 디저트 + 프리미엄 사케',
      price: '350,000',
      duration: '150분',
      maxGuests: 4,
      image: '/placeholder.svg?height=400&width=600',
      features: [
        '최고급 생선 25종',
        '프리미엄 사케 페어링',
        '전채 요리',
        '미소시루',
        '디저트',
        '말차',
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10" />
        <Image
          src="/placeholder.svg?height=400&width=1920"
          alt="메뉴 소개"
          fill
          className="object-cover"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Our Menu
          </h1>
          <p className="text-white/90 text-lg font-light">
            엄선된 최고급 재료로 만드는 특별한 오마카세
          </p>
        </div>
      </section>

      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12">
            {menus.map((menu, index) => (
              <Card
                key={menu.id}
                className="bg-white border-0 shadow-xl overflow-hidden"
              >
                <div
                  className={`grid ${
                    index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2'
                  } gap-0`}
                >
                  <div
                    className={`relative h-64 md:h-auto ${
                      index % 2 === 1 ? 'md:order-2' : ''
                    }`}
                  >
                    <Image
                      src={menu.image || '/placeholder.svg'}
                      alt={menu.name}
                      fill
                      className="object-cover"
                    />
                    {menu.popular && (
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-gold-500 text-white border-0 flex items-center gap-1 px-4 py-2">
                          <Star className="w-3 h-3" />
                          Most Popular
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardContent
                    className={`p-8 flex flex-col justify-center ${
                      index % 2 === 1 ? 'md:order-1' : ''
                    }`}
                  >
                    <div className="mb-6">
                      <h3 className="font-serif text-3xl font-bold mb-4 text-foreground">
                        {menu.name}
                      </h3>
                      <p className="text-foreground mb-6 font-light text-lg">
                        {menu.description}
                      </p>

                      <div className="flex items-center gap-6 mb-6">
                        <div className="flex items-center gap-2 text-foreground">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{menu.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">
                            최대 {menu.maxGuests}명
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-semibold mb-4 text-foreground">
                        포함 내역
                      </h4>
                      <ul className="space-y-3">
                        {menu.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 text-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-serif text-4xl font-bold text-gold-500">
                          ₩{menu.price}
                        </span>
                        <span className="text-foreground text-sm ml-2">
                          per person
                        </span>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-gold-500 text-gold-500 px-4 py-2"
                      >
                        1인 기준
                      </Badge>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-20 bg-white p-12 rounded-xl border-0 shadow-xl">
            <h3 className="font-serif text-3xl font-bold mb-8 text-foreground text-center">
              추가 서비스
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-gold-500" />
                </div>
                <h4 className="font-serif text-xl font-semibold mb-3 text-foreground">
                  추가 인원
                </h4>
                <p className="text-foreground text-sm mb-3">
                  5명 이상 시 추가 요금
                </p>
                <p className="font-serif text-2xl font-bold text-gold-500">
                  +₩50,000/인
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-gold-500" />
                </div>
                <h4 className="font-serif text-xl font-semibold mb-3 text-foreground">
                  시간 연장
                </h4>
                <p className="text-foreground text-sm mb-3">
                  30분 단위 연장 가능
                </p>
                <p className="font-serif text-2xl font-bold text-gold-500">
                  +₩30,000/30분
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10 text-gold-500" />
                </div>
                <h4 className="font-serif text-xl font-semibold mb-3 text-foreground">
                  특별 요청
                </h4>
                <p className="text-foreground text-sm mb-3">생일, 기념일 등</p>
                <p className="font-serif text-2xl font-bold text-gold-500">
                  별도 문의
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
