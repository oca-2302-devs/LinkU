import { signIn } from "@/auth"

export function SignInBtn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/dashboard" });
      }}
    >
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:cursor-pointer">
        Googleでログイン
      </button>
    </form>
  );
}