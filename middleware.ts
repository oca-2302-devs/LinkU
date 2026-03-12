import { auth } from "@/auth";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default auth(async (req: NextRequest) => {
  const session = await auth();

  if (!session) {
    // console.log("ユーザーは未認証です。ログインページにリダイレクトします。");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
});

// matcherで特定のパスにのみミドルウェアを適用
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
};