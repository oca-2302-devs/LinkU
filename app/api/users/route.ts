import { auth } from "@/auth"

export async function GET() {

  const session = await auth()

  if (!session?.user?.email) {
    return Response.json({ error: "unauthorized" }, { status: 401 })
  }

  const api = `${process.env.SHEETS_API}?key=${process.env.SHEETS_SECRET}`

  const res = await fetch(api)
  const users = await res.json()

  // ログインユーザーを除外して返す
  const filteredUsers = users.filter((u: any) => u.email !== session?.user?.email)
  console.log(session)

  return Response.json(filteredUsers)
}