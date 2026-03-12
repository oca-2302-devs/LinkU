// Server Logout Button Component (Not Used)
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

// Client Logout Button Component
"use client";

import { signOut } from "next-auth/react";
export function SignOutBtn() {
  const handleSignOut = () => {
    const confirmLogout = window.confirm("本当にログアウトしますか？")
    if (confirmLogout) {
      signOut({ redirectTo: "/login" })
    }
  }
  return (
    <button onClick={handleSignOut}
    className="hover:text-[#66BB00] transition-colors">
      ログアウト
    </button>
  );
}