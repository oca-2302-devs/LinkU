"use client"

import { useEffect, useState } from "react"

type User = {
  name: string
  email: string
  mbti: string
  hobby: string
  boom: string
  game: string
  from: string
  course: string
  friend: string
  message: string
  icon: string
}

export default function ProfileContent({ email }: { email: string }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => {
        if (!data || Object.keys(data).length === 0) {
          setUser({
            name: "管理者",
            email: email,
            icon: "./admin-icon.png",
            mbti: "-",
            hobby: "-",
            boom: "-",
            game: "-",
            from: "-",
            course: "-",
            friend: "-",
            message: "-"
          })
        } else {
          setUser(data)
        }
      })
      .finally(() => setLoading(false))
  }, [email])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-100">
        <div className="animate-pulse text-gray-400 font-medium">loading...</div>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        {/* カード上部の装飾的な背景 */}
        <div className="h-24 bg-linear-to-br from-lime-300 via-lime-500 to-green-600" />
        <div className="px-8 pb-10">
          <div className="relative flex justify-center">
            {/* アイコン */}
            <div className="-mt-12 p-1 bg-white rounded-full shadow-md">
              <img
                src={user?.icon || "/default-icon.png"}
                alt="profile"
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
          </div>

          <div className="text-center mt-4">
            <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>
            <div className="space-y-4 text-left border-t border-gray-50 pt-6">
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">メールアドレス</label>
                <p className="text-gray-700 font-medium">{user?.email}</p>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">MBTI</label>
                <p className="text-gray-700 font-medium">{user?.mbti}</p>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">趣味</label>
                <p className="text-gray-700 font-medium">{user?.hobby}</p>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">最近のマイブーム</label>
                <p className="text-gray-700 font-medium">{user?.boom}</p>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">好きなゲーム</label>
                <p className="text-gray-700 font-medium">{user?.game}</p>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">出身地</label>
                <p className="text-gray-700 font-medium">{user?.from}</p>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">コース名</label>
                <p className="text-gray-700 font-medium">{user?.course}</p>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">仲良くなりたいタイプ</label>
                <p className="text-gray-700 font-medium">{user?.friend}</p>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">みんなへ一言</label>
                <p className="text-gray-700 font-medium">{user?.message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}