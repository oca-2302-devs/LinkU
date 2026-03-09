import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import authConfig from "./auth.config"

const prisma = new PrismaClient();

export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    callbacks: {
        //もしメアドが許可リストにないなら弾く
        async signIn({ user }) {
             const allowedUser = await prisma.user.findUnique({
        where: { email: user.email },
      });

      return !!allowedUser;
        }
    },
    pages: {
        signIn: "/login",
        error: "/login",
    }

})

// export const { auth, handlers, signIn, signOut } = NextAuth({
//   adapter: PrismaAdapter(prisma),
//   session: { strategy: "jwt" },
//   ...authConfig,
// })