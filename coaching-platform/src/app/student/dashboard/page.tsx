import Link from "next/link";
import { redirect } from "next/navigation";
import { Container } from "@/components/Container";
import { getDemoSession } from "@/lib/auth";

export const metadata = { title: "Student Dashboard" };

export default async function StudentDashboardPage() {
  const session = await getDemoSession();
  if (!session || session.role !== "student") redirect("/student");

  return (
    <div className="py-10">
      <Container className="space-y-6">
        <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/15 dark:bg-black">
          <div className="text-xl font-bold tracking-tight">
            Welcome, {session.name}
          </div>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
            Your enrolled courses, tests, and materials will appear here.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Lectures",
              desc: "Watch recorded lectures and continue where you left off.",
              href: "/student/lectures",
            },
            {
              title: "Tests",
              desc: "Attempt timed tests and view results instantly.",
              href: "/student/tests",
            },
            {
              title: "Materials",
              desc: "Download notes, PDFs, and practice sheets.",
              href: "/student/materials",
            },
          ].map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="rounded-3xl border border-black/10 bg-white p-6 transition-colors hover:bg-black/5 dark:border-white/15 dark:bg-black dark:hover:bg-white/10"
            >
              <div className="font-semibold">{c.title}</div>
              <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                {c.desc}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

