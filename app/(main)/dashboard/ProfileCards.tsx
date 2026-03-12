"use client"

import { useState } from "react"
import {
  XMarkIcon,
  MapPinIcon,
  SparklesIcon,
  HandRaisedIcon,
  FaceSmileIcon,
  TagIcon,
  TrophyIcon
} from "@heroicons/react/24/outline"
import { User } from "@/app/types/user"



export function ProfileCards({ users }: { users: User[] }) {
  const [selected, setSelected] = useState<User | null>(null)

  // 検索結果が空の場合
  if (users.length === 0) {
    return (
      <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
        <p className="text-gray-400 font-medium">該当する学生が見つかりませんでした。</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
    {selected && (
      <div
        className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 cursor-pointer" 
        onClick={() => setSelected(null)}
      >
        {/* モーダル本体：ここを relative にしてボタンの基点にする */}
        <div
          className="bg-white rounded-4xl w-full max-w-xl max-h-[90vh] shadow-2xl relative animate-in fade-in zoom-in duration-200 cursor-default flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >

          {/* ★ 固定バツボタン：スクロールしても常にここに表示される ★ */}
          <button
            className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-md rounded-full text-gray-600 hover:text-black hover:bg-white transition-all z-50 shadow-xl border border-gray-200"
            onClick={() => setSelected(null)}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          {/* スクロール可能なエリア */}
          <div className="overflow-y-auto w-full">
            {/* ヘッダーグラデーション */}
            <div className="h-40 bg-linear-to-br from-lime-300 via-lime-500 to-green-600" />
            <div className="px-6 sm:px-10 pb-10">
              <div className="relative flex justify-center">
                <div className="-mt-16 p-1.5 bg-white rounded-full shadow-xl">
                  {/* 画像ガードも追加 */}
                  {selected.icon ? (
                    <img src={selected.icon} className="w-32 h-32 rounded-full object-cover" alt={selected.name} />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">No Photo</div>
                  )}
                </div>
              </div>

              <div className="text-center mt-6 mb-8">
                <h2 className="text-3xl font-black text-gray-900 wrap-break-word">{selected.name}</h2>
                <div className="inline-block mt-2 px-4 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-bold">
                  {selected.course}
                </div>
              </div>

              {/* メッセージ */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8 relative">
                <span className="absolute -top-3 left-6 px-2 bg-gray-50 text-gray-400 text-xs font-bold uppercase tracking-widest">みんなへ一言</span>
                <p className="text-gray-700 leading-relaxed text-center italic font-medium wrap-break-word">
                  {selected.message}
                </p>
              </div>

              {/* 詳細グリッド */}
              <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <DetailItem icon={TagIcon} label="MBTI" value={selected.mbti} color="text-purple-500" />
                  <DetailItem icon={MapPinIcon} label="出身地" value={selected.from} color="text-red-500" />
                </div>
                <DetailItem icon={SparklesIcon} label="趣味" value={selected.hobby} color="text-amber-500" />
                <DetailItem icon={FaceSmileIcon} label="最近のマイブーム" value={selected.boom} color="text-green-500" />
                <DetailItem icon={TrophyIcon} label="好きなゲーム" value={selected.game} color="text-blue-500" />
                <DetailItem icon={HandRaisedIcon} label="こんな人と仲良くなりたい" value={selected.friend} color="text-pink-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

      {/* --- カードグリッド --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {users.map((user) => (
          <div
            key={user.email}
            className="group bg-white border border-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer relative flex items-center gap-4"
            onClick={() => setSelected(user)}
          >

            <img
              src={user.icon}
              className="w-12 h-12 rounded-xl object-cover shrink-0 shadow-sm group-hover:scale-105 transition-transform"
              alt=""
            />

            {/* テキストエリア：余計なマージンを排除 */}
            <div className="min-w-0 flex-1">
              <p className="font-bold text-gray-900 text-base leading-snug wrap-break-word">
                {user.name}
              </p>
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-wider mt-0.5">
                {user.course}
              </p>
            </div>

            {/* 右端にさりげないアクセント（お好みで） */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function DetailItem({ icon: Icon, label, value, color }: { icon: any, label: string, value: string, color: string }) {
  return (
    <div className="flex items-start gap-4 p-4 bg-white border border-gray-50 rounded-2xl shadow-sm hover:border-gray-100 transition-colors h-full">
      <div className={`p-2 rounded-xl bg-gray-50 shrink-0 ${color}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{label}</p>
        <p className="text-gray-900 font-bold leading-relaxed wrap-break-word whitespace-pre-wrap">
          {value || "未設定"}
        </p>
      </div>
    </div>
  )
}