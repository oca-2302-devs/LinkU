"use client";
import { useSearchParams } from "next/navigation";

export function ErrorMsg() {
  const params = useSearchParams();
  const error = params.get("error");

  return (
    <>
      {error === "AccessDenied" && <p className="text-red-500">このメールアドレスではログインできません。</p>}
    </>
  );
}