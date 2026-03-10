import { auth } from "@/auth";
import ProfileContent from "@/app/(main)/profile/ProfileContent";


export default async function Profile() {
  const session = await auth();
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