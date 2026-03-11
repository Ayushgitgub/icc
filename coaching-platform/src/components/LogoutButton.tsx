"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function LogoutButton({ to = "/" }: { to?: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function logout() {
    setLoading(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push(to);
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={() => void logout()}
      disabled={loading}
      className="rounded-full border border-black/15 px-4 py-2 text-sm font-semibold hover:bg-black/5 disabled:opacity-60 dark:border-white/15 dark:hover:bg-white/10"
    >
      {loading ? "Signing out..." : "Sign out"}
    </button>
  );
}

