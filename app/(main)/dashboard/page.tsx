import { getAllUsers } from "@/app/lib/users";
import { auth } from "@/auth";
import { DashboardClient } from "@/app/(main)/dashboard/DashBoardClient";
import { redirect } from "next/navigation";

async function getUsers() {
  const session = await auth();

  const currentUserEmail = session?.user?.email ?? undefined;
  return getAllUsers(currentUserEmail);
}

export default async function Dashboard() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const allUsers = await getUsers();
  console.log("全ユーザーデータ(/dashboard/page.tsx):", allUsers);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8">学生検索</h1>
      <DashboardClient allUsers={allUsers} />
    </div>
  );
}