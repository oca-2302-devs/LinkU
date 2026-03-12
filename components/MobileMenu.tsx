"use client"

import { useState } from "react"
import Link from "next/link"
import { signOut } from "next-auth/react"
import { UserIcon, HomeIcon, ArrowRightEndOnRectangleIcon, XMarkIcon, Squares2X2Icon } from "@heroicons/react/24/outline"

export function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const handleSignOut = () => {
    const confirmLogout = window.confirm("本当にログアウトしますか？")
    if (confirmLogout) {
      signOut({ redirectTo: "/login" })
    }
  }

  return (
    <>
      {/* ハンバーガーボタン */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="p-2.5 -mr-2.5 rounded-full text-black hover:text-gray-900 hover:bg-gray-100 transition-colors md:hidden"
      >
        <Squares2X2Icon className="h-6 w-6" />
      </button>

      {/* ドロワーメニュー */}
      <div
        className={`fixed inset-0 z-50 flex transition-opacity duration-300 ease-in-out ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* 背景オーバーレイ */}
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={closeMenu} />

        {/* メニュー本体 */}
        <div
          className={`relative bg-white w-full max-w-75 h-full shadow-2xl rounded-r-2xl p-6 flex flex-col transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* 上部：ロゴと閉じるボタンを綺麗に配置 */}
          <div className="flex items-center justify-between mb-10 pt-2">
            <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
              <img src="/logo.png" alt="LinkU Logo" className="h-8 w-auto" />
              <span className="text-2xl font-bold text-gray-900 tracking-tight">Link<span className="text-[#99EE00]">U</span></span>
            </Link>

            {/* 閉じるボタン：min-w-fullを削除し、適切なサイズに */}
            <button
              onClick={closeMenu}
              className="p-2 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="メニューを閉じる"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* メニュー項目：共通スタイルで統一 */}
          <nav className="flex flex-col gap-1">
            <Link
              href="/profile"
              className="flex items-center gap-4 w-full py-3.5 px-4 rounded-xl text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all font-medium group"
              onClick={closeMenu}
            >
              <UserIcon className="h-6 w-6 text-gray-400 group-hover:text-indigo-500" />
              プロフィール
            </Link>

            <Link
              href="/dashboard"
              className="flex items-center gap-4 w-full py-3.5 px-4 rounded-xl text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all font-medium group"
              onClick={closeMenu}
            >
              <HomeIcon className="h-6 w-6 text-gray-400 group-hover:text-indigo-500" />
              ダッシュボード
            </Link>

            <button
              onClick={() => { closeMenu(); handleSignOut(); }}
              className="flex items-center gap-4 w-full py-3.5 px-4 rounded-xl text-red-600 hover:bg-red-50 transition-all font-medium text-left group"
            >
              <ArrowRightEndOnRectangleIcon className="h-6 w-6 text-red-400 group-hover:text-red-600" />
              ログアウト
            </button>
          </nav>

          {/* フッター */}
          <div className="mt-auto pt-10 text-center text-xs text-gray-400">
            &copy; 2026 LinkU - Built by saryu & jhsand
          </div>
        </div>
      </div>
    </>
  )
}