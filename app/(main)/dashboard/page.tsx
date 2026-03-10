import { ProfileCards } from "@/app/(main)/dashboard/ProfileCards";
import { SearchBar } from "@/app/(main)/dashboard/SearchBar";
import { auth } from "@/auth";

export default async function Dashboard() {
  const session = await auth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {session?.user ? (
        <div className="space-y-10">
          <header className="space-y-2">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Dashboard
            </h1>
            <p className="text-gray-500 font-medium">
              コミュニティのメンバーを探してみましょう。
            </p>
          </header>

          <section className="max-w-2xl">
            <SearchBar />
          </section>

          <section>
            <ProfileCards />
          </section>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
          <div className="bg-indigo-50 p-6 rounded-full">
            <img src="/logo.png" alt="Logo" className="h-16 w-auto opacity-50" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">ログインが必要です</h2>
            <p className="text-gray-500">メンバーの情報を閲覧するにはログインしてください。</p>
          </div>
          <a
            href="/login"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-2xl text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
          >
            ログインする
          </a>
        </div>
      )}
    </div>
  );
}