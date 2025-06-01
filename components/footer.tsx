import { Instagram, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-cream-100 border-t border-gray-200 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <span className="font-serif text-xl font-bold text-gold-500">SUSHI PRIVATE</span>
            </div>
            <p className="text-gray-600 text-sm font-light leading-relaxed">당신만을 위한 프라이빗 스시 경험</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-6">서비스</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/reservation" className="hover:text-gold-500 transition-colors">
                  예약하기
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-gold-500 transition-colors">
                  메뉴 소개
                </Link>
              </li>
              <li>
                <Link href="/booking-check" className="hover:text-gold-500 transition-colors">
                  예약 확인
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-6">고객 지원</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/faq" className="hover:text-gold-500 transition-colors">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gold-500 transition-colors">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gold-500 transition-colors">
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-6">연락처</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <MessageCircle className="w-4 h-4" />
                <span>@sushi_private</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>info@sushiprivate.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Instagram className="w-4 h-4" />
                <span>@sushi_private</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2024 SUSHI PRIVATE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
