import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID!,
            clientSecret: process.env.AUTH_GOOGLE_SECRET!,
        }),
    ],
    callbacks: {
        //もしメアドが許可リストにないなら弾く
        async signIn({ user }) {
             const allowedUser = await prisma.user.findUnique({
        where: { email: user.email },
      });

      return !!allowedUser;
        }
    },

})