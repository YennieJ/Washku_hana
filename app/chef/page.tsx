import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Award, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ChefPage() {
  const achievements = [
    "도쿄 긴자 미슐랭 3스타 '스시 요시타케' 수석 요리사",
    "일본 전국 스시 대회 우승 (2019)",
    "한국 스시 협회 인증 마스터 쉐프",
    "15년간 2000회 이상의 오마카세 경험",
  ]

  const experiences = [
    {
      period: "2008-2015",
      place: "스시 요시타케 (도쿄 긴자)",
      position: "수석 요리사",
      description: "미슐랭 3스타 레스토랑에서 전통 에도마에 스시 기법 습득",
    },
    {
      period: "2015-2018",
      place: "스시 사이토 (도쿄 롯폰기)",
      position: "부주방장",
      description: "혁신적인 스시 기법과 현대적 프레젠테이션 연구",
    },
    {
      period: "2018-2020",
      place: "오마카세 한 (서울 청담)",
      position: "총주방장",
      description: "한국 최초 미슐랭 스타 스시 레스토랑 오픈",
    },
    {
      period: "2020-현재",
      place: "SUSHI PRIVATE",
      position: "대표 쉐프",
      description: "프라이빗 스시 서비스로 더욱 특별한 경험 제공",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      <div className="pt-20 pb-32 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="쉐프 김태현"
                  width={400}
                  height={500}
                  className="rounded-lg object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-amber-400 text-black p-4 rounded-full">
                  <Award className="w-8 h-8" />
                </div>
              </div>
            </div>

            <div>
              <Badge className="bg-amber-400 text-black mb-4">미슐랭 출신</Badge>
              <h1 className="text-4xl font-bold mb-4 text-amber-400">쉐프 김태현</h1>
              <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                도쿄에서 15년간 수련을 쌓은 후, 한국에서 프라이빗 스시 서비스를 시작했습니다. 전통 에도마에 스시 기법과
                현대적 감각을 조화시켜 잊을 수 없는 미식 경험을 선사합니다.
              </p>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-slate-300">15년 경력</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                  <div className="text-2xl font-bold text-amber-400">2000+</div>
                  <div className="text-sm text-slate-400">오마카세 경험</div>
                </div>
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                  <div className="text-2xl font-bold text-amber-400">15년</div>
                  <div className="text-sm text-slate-400">일본 수련</div>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-amber-400">요리 철학</h2>
            </div>
            <Card className="bg-slate-900 border-slate-700">
              <CardContent className="p-8">
                <blockquote className="text-xl text-center text-slate-300 leading-relaxed italic">
                  "스시는 단순한 음식이 아닙니다. 계절의 변화를 담고, 재료의 본질을 살리며, 손님과의 소통을 통해
                  완성되는 예술입니다. 저는 매 순간 최고의 재료와 정성으로 특별한 경험을 만들어갑니다."
                </blockquote>
                <div className="text-center mt-6">
                  <cite className="text-amber-400 font-semibold">- 김태현</cite>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Achievements */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-amber-400">주요 성과</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-slate-900 rounded-lg border border-slate-700">
                  <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-black" />
                  </div>
                  <p className="text-slate-300">{achievement}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Timeline */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-amber-400">경력 사항</h2>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-amber-400 rounded-full"></div>
                      {index < experiences.length - 1 && <div className="w-0.5 h-20 bg-slate-700 mt-2"></div>}
                    </div>
                    <Card className="flex-1 bg-slate-900 border-slate-700">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h3 className="text-xl font-bold text-white">{exp.place}</h3>
                          <Badge variant="outline" className="border-amber-400 text-amber-400 w-fit">
                            {exp.period}
                          </Badge>
                        </div>
                        <p className="text-amber-400 font-semibold mb-2">{exp.position}</p>
                        <p className="text-slate-300">{exp.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Specialties */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-amber-400">전문 분야</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-slate-900 border-slate-700">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">에도마에 스시</h3>
                  <p className="text-slate-300">전통 일본 스시 기법으로 생선의 본연의 맛을 극대화</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-700">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">숙성 기법</h3>
                  <p className="text-slate-300">생선별 최적의 숙성 시간과 방법으로 깊은 맛 구현</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-700">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">재료 선별</h3>
                  <p className="text-slate-300">전국 최고의 어시장에서 직접 선별한 프리미엄 재료</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}
