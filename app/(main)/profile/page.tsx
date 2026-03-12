import { auth } from "@/auth";
import ProfileContent from "@/app/(main)/profile/ProfileContent";
import { redirect } from "next/navigation";


export default async function Profile() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-8">プロフィール</h2>
        <div className="max-w-md mx-auto mb-6">
        </div>
        {session && session.user && (
          <ProfileContent email={session.user.email ?? ""} />
        )}
      </div>
    </div>
  );
}