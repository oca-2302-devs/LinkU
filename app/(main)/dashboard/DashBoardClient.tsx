"use client"

import { useState } from "react"
import { SearchBar } from "./SearchBar"
import { ProfileCards } from "./ProfileCards"
import { PublicUser } from "@/app/types/user"

export function DashboardClient({ allUsers }: { allUsers: PublicUser[] }) {
  const [query, setQuery] = useState("");

  const filteredUsers = allUsers.filter((user) => {
    if (!query) return true;

    const searchTarget = `
      ${user.name}
      ${user.mbti}
      ${user.hobby}
      ${user.boom}
      ${user.game}
      ${user.course}
      ${user.from}
      ${user.club}
    `.toLowerCase();

    return searchTarget.includes(query.toLowerCase());
  });

  return (
    <div className="space-y-8">
      <SearchBar value={query} onChange={setQuery} />
      <ProfileCards users={filteredUsers} />
    </div>
  );
}