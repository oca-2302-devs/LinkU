// import { signOut } from "@/auth"

// export function SignOutBtn() {
//   return (
//     // <form
//     //   action={async () => {
//     //     "use server";
//     //     await signOut();
//     //   }}
//     // >
//     //   <button type="submit">ログアウト</button>
//     // </form>
//   );
// }

// components/auth/SignOutBtn.tsx
"use client";

import { signOut } from "next-auth/react";
export function SignOutBtn() {
  const handleSignOut = () => {
    const confirmLogout = window.confirm("本当にログアウトしますか？")
    if (confirmLogout) {
      signOut({ redirectTo: "/login" }) // ログアウト後にログインページにリダイレクト
    }
  }
  return (
    <button onClick={handleSignOut}>
      ログアウト
    </button>
  );
}