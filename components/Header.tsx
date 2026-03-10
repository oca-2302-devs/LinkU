import { SignOutBtn } from "@/components/auth/SignOutBtn"
import { MobileMenu } from "@/components/MobileMenu"
import Link from "next/link"

type User = {
  name: string
  icon: string
}


export default function Header() {

  return (
      <header className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* 左: ロゴ */}
        <Link href="/" className="flex items-center gap-2 group">
          <img src="/logo.png" alt="LinkU Logo" className="h-8 w-auto transition-transform group-hover:scale-105" />
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            Link<span className="text-[#99EE00]">U</span>
          </span>
        </Link>

        {/* 右: デスクトップメニュー */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/dashboard" className="hover:text-[#66BB00] transition-colors">ダッシュボード</Link>
          <Link href="/profile" className="hover:text-[#66BB00] transition-colors">プロフィール</Link>
        </nav>
          <SignOutBtn />
        </div>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
    )
}