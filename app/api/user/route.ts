import { auth } from "@/auth"

export async function GET() {

  const session = await auth()

  if (!session?.user?.email) {
    return Response.json({ error: "unauthorized" }, { status: 401 })
  }

  const api = `${process.env.SHEETS_API}?key=${process.env.SHEETS_SECRET}&email=${session.user.email}`

  const res = await fetch(api)
  const user = await res.json()
  // console.log("ユーザーデータ(/user/route.ts):", user)

  return Response.json(user)
}