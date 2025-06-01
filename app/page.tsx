import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Instagram, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="프라이빗 스시바 서비스"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
            Private Sushi
            <br />
            <span className="text-gold-400">Experience</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
            미슐랭 출신 쉐프가 선사하는 특별한 오마카세를 당신의 공간에서
          </p>
          <Link href="/reservation">
            <Button
              size="lg"
              className="bg-gold-500 hover:bg-gold-600 text-white font-medium px-12 py-6 text-lg rounded-none shadow-2xl transform hover:scale-105 transition-all duration-300 font-sans"
            >
              예약하기
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-foreground leading-tight">
            당신만을 위한
            <br />
            <span className="text-gold-500">프라이빗 오마카세</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed font-light">
            번잡한 레스토랑을 벗어나 편안한 공간에서 오직 당신만을 위한 특별한
            오마카세를 경험하세요.
            <br />
            최고급 재료와 장인의 손길로 완성되는 진정한 스시의 예술을 만나보실
            수 있습니다.
          </p>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="py-24 px-4 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <div className="relative h-96 md:h-[500px] overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=500&width=800"
                  alt="프리미엄 스시 플레이팅"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="font-serif text-2xl font-bold mb-2">
                    Premium Omakase
                  </h3>
                  <p className="text-white/90">15피스의 정성스러운 오마카세</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="relative h-44 overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="신선한 재료"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-medium">최고급 재료</p>
                </div>
              </div>
              <div className="relative h-44 overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="장인의 손길"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-medium">장인의 기술</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Showcase */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl font-bold mb-6 text-foreground">
              Our Menu
            </h3>
            <p className="text-foreground text-lg font-light">
              엄선된 최고급 재료로 만드는 특별한 오마카세
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                name: 'Premium',
                description: '15피스 + 디저트',
                price: '180,000',
                image: '/placeholder.svg?height=400&width=350',
                features: ['계절 생선 15종', '미소시루', '디저트'],
              },
              {
                name: 'Special',
                description: '20피스 + 사케 페어링',
                price: '250,000',
                image: '/placeholder.svg?height=400&width=350',
                features: ['프리미엄 생선 20종', '사케 페어링', '디저트'],
                popular: true,
              },
              {
                name: 'Grand',
                description: '25피스 + 프리미엄 사케',
                price: '350,000',
                image: '/placeholder.svg?height=400&width=350',
                features: ['최고급 생선 25종', '프리미엄 사케', '전채 요리'],
              },
            ].map((menu, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={menu.image || '/placeholder.svg'}
                    alt={menu.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {menu.popular && (
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-gold-500 text-white border-0 px-4 py-2 font-medium">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-8">
                  <h4 className="font-serif text-2xl font-bold mb-3 text-foreground">
                    {menu.name}
                  </h4>
                  <p className="text-foreground mb-6 font-light">
                    {menu.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    {menu.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-sm text-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-serif text-3xl font-bold text-gold-500">
                        ₩{menu.price}
                      </span>
                      <span className="text-foreground text-sm ml-2">
                        per person
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/menu">
              <Button
                variant="outline"
                className="border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white px-8 py-3 rounded-none font-medium"
              >
                전체 메뉴 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-24 px-4 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Instagram className="w-8 h-8 text-gold-500" />
              <h3 className="font-serif text-4xl font-bold text-foreground">
                @sushi_private
              </h3>
            </div>
            <p className="text-foreground text-lg font-light">
              최신 요리 과정과 고객 후기를 확인하세요
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="relative aspect-square group cursor-pointer overflow-hidden"
              >
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Instagram+${
                    index + 1
                  }`}
                  alt={`Instagram post ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-serif text-4xl font-bold mb-8 text-foreground">
            Contact Us
          </h3>
          <p className="text-foreground mb-12 text-lg font-light">
            예약 관련 문의는 이메일이나 인스타그램으로 연락 주세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              이메일 문의
            </Button>
            <Button
              variant="outline"
              className="border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              인스타그램 DM
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200 z-50">
        <div className="max-w-md mx-auto">
          <Link href="/reservation">
            <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white font-medium py-4 text-lg rounded-none shadow-lg">
              지금 예약하기
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
