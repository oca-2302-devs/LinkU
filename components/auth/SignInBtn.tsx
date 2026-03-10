import { signIn } from "@/auth"

export function SignInBtn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/dashboard" });
      }}
    >
      <button type="submit" className="flex items-center justify-center bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-md shadow-sm  hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500">
  <svg
    className="w-5 h-5 mr-2"
    viewBox="0 0 533.5 544.3"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M533.5 278.4c0-17.6-1.6-34.6-4.7-51H272v96.6h147.2c-6.3 34.1-25 63.1-53.4 82.5v68h86.2c50.3-46.4 81.5-114.7 81.5-196.1z"
      fill="#4285F4"
    />
    <path
      d="M272 544.3c72.8 0 134-24.1 178.6-65.5l-86.2-68c-23.8 16-54.2 25.4-92.4 25.4-71 0-131-47.8-152.5-112.1H31.5v70.6C76 483.8 167.3 544.3 272 544.3z"
      fill="#34A853"
    />
    <path
      d="M119.5 324.7c-5.5-16.3-8.6-33.8-8.6-51.7s3.1-35.4 8.6-51.7v-70.6H31.5C11.1 194 0 232.2 0 272s11.1 78 31.5 107.6l88-70.9z"
      fill="#FBBC05"
    />
    <path
      d="M272 107.7c38.9 0 73.5 13.4 101 39.5l75.6-75.6C405.9 24.8 344.7 0 272 0 167.3 0 76 60.5 31.5 153.5l88 70.6C141 155.5 201 107.7 272 107.7z"
      fill="#EA4335"
    />
  </svg>
  Sign in with Google
</button>
    </form>
  );
}