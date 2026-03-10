import { auth } from "@/auth";
import { SignInBtn } from "@/components/auth/SignInBtn";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await auth();
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
<div className="flex min-h-screen flex-col items-center justify-center font-sans text-black px-4 sm:px-6 md:px-8 gap-6">
  <img src="../logo.png" alt="LinkU Logo" className="w-48 h-48" />
  <h1 className="text-xl sm:text-2xl md:text-3xl text-center">新入生のみなさん、ようこそOCAへ！</h1>
    <SignInBtn />
</div>
  );
}