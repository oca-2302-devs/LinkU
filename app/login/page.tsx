import { auth } from "@/auth";
import { SignInBtn } from "@/components/auth/SignInBtn";
import { SignOutBtn } from "@/components/auth/SignOutBtn";
import { ErrorMsg } from "@/components/auth/ErrorMsg"

export default async function Login() {
  const session = await auth();

  return (
    <>
      <ErrorMsg />
      {session?.user ? (
        <>
          <p>{session.user.name} さんとしてログイン中</p>
          <SignOutBtn />
        </>
      ) : (
        <>
          <SignInBtn />
        </>
      )}
    </>
  );
}