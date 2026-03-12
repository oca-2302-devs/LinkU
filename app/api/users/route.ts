// Not Used

import { auth } from "@/auth"
import { SessionUser } from "@/app/types/auth"


export async function GET() {

  const session = await auth()

  if (!session?.user?.email) {
    return Response.json({ error: "unauthorized" }, { status: 401 })
  }

  const api = `${process.env.SHEETS_API}?key=${process.env.SHEETS_SECRET}`

  const res = await fetch(api)
  const users = await res.json()
  // console.log("ユーザーデータ(/users/route.ts):", users)

  // ログインユーザーを除外して返す
  const filteredUsers = users.filter((u: SessionUser) => u.email !== session?.user?.email)
  // console.log("フィルタリング後のユーザーデータ(/users/route.ts):", filteredUsers)

  return Response.json(filteredUsers)
}