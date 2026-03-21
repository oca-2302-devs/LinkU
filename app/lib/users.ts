import { PrivateUser } from "@/app/types/user"

export async function getAllUsers(currentUserEmail?: string) {
  const api = `${process.env.SHEETS_API}?key=${process.env.SHEETS_SECRET}`;
  try {
    const res = await fetch(api, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error("GAS取得失敗");

    const users = await res.json();

    // emailを除外
    const safeUsers = users.map((u: PrivateUser) => {
      const { email, ...rest } = u
      return rest
    })

    // ログインユーザーを除外
    return safeUsers;
  } catch (e) {
    console.error(e);
    return [];
  }
}
