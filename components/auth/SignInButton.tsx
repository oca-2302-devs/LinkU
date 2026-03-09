import { signIn } from "@/auth"

export function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/login" });
      }}
    >
      <button type="submit">Googleでログイン</button>
    </form>
  );
}