import { auth } from "@/auth";
import { SignOutButton } from "@/components/auth/SignOutButton";

export default async function Dashboard() {
  const session = await auth();
  if (!session?.user) {
    return (
          <main style={{ padding: "24px" }}>
            {session?.user ? (
              <>
                <p>{session.user.name} さんとしてログイン中</p>
                <SignOutButton />
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
}