import { SignOutBtn } from "@/components/auth/SignOutBtn";
import { auth } from "@/auth";

export default async function Dashboard() {
  const session = await auth();
    return (
          <main style={{ padding: "24px" }}>
            <h1>/Dashboard</h1>
            {session?.user ? (
              <>
                <p>{session.user.name} さんとしてログイン中</p>
                <SignOutBtn />
              </>
            ) : (
              <>
                <p>ログインしていません</p>
                <a href="/login">ログインする</a>
              </>
            )}
          </main>
    );
  }