import { signOut } from "@/auth"

export function SignOutBtn() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit">ログアウト</button>
    </form>
  );
}