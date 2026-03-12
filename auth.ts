import NextAuth from "next-auth"
import authConfig from "./auth.config"


export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user }) {

      const email = user.email

      if (!email) return false

      const admins = process.env.ADMIN_EMAILS?.split(",") ?? []

      if (admins.includes(email)) {
        return true
      }

      const sheets_api_with_secret = `${process.env.SHEETS_API}?key=${process.env.SHEETS_SECRET}`
      const res = await fetch(sheets_api_with_secret)
      const users = await res.json()
      // console.log("ユーザーリスト:", users)

      const allowed = users.some((u: any) => u.email === email)

      return allowed
    }
  },
  pages: {
    signIn: "/login",
    error: "/login",
  }
})