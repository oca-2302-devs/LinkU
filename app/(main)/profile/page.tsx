import { auth } from "@/auth";
import ProfileContent from "@/app/(main)/profile/ProfileContent";
import { redirect } from "next/navigation";


export default async function Profile() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="p-4 md:p-8">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold text-gray-800">プロフィール</h2>
      </div>
       {session && session.user && (
         <ProfileContent email={session.user.email ?? ""} />
       )}
    </div>
  );
}