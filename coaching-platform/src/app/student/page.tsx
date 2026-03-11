"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";

export default function StudentLoginPage() {
  const router = useRouter();
  const [name, setName] = useState("Student");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function login() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ role: "student", name }),
      });
      if (!res.ok) throw new Error("Login failed");
      router.push("/student/dashboard");
      router.refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="py-12">
      <Container className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-black/10 bg-white p-8 dark:border-white/15 dark:bg-black">
          <div className="text-2xl font-extrabold tracking-tight">
            Student login (demo)
          </div>
          <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            This is a starter authentication flow. Next we’ll connect real student
            accounts using the database.
          </p>

          <label className="mt-6 block text-sm font-semibold">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 h-11 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-black/10 dark:border-white/15 dark:bg-black dark:focus:ring-white/15"
            placeholder="Student name"
          />

          <button
            onClick={() => void login()}
            disabled={loading}
            className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-black px-5 text-sm font-semibold text-white hover:bg-zinc-800 disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

          {error ? (
            <div className="mt-3 rounded-2xl bg-red-50 p-3 text-sm text-red-900 dark:bg-red-500/10 dark:text-red-200">
              {error}
            </div>
          ) : null}
        </div>

        <div className="rounded-3xl border border-black/10 p-8 dark:border-white/15">
          <div className="text-lg font-semibold">What students get</div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
            <li>Recorded lectures (streaming)</li>
            <li>Notes & materials (downloads)</li>
            <li>Online tests (timer + solutions)</li>
            <li>Progress tracking</li>
          </ul>
          <div className="mt-6">
            <ButtonLink href="/courses" variant="secondary">
              Browse courses
            </ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  );
}

