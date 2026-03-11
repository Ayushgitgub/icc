import Link from "next/link";
import { redirect } from "next/navigation";
import { Container } from "@/components/Container";
import { getDemoSession } from "@/lib/auth";

export const metadata = { title: "Admin Dashboard" };

export default async function AdminDashboardPage() {
  const session = await getDemoSession();
  if (!session || session.role !== "admin") redirect("/admin");

  return (
    <div className="py-10">
      <Container className="space-y-6">
        <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/15 dark:bg-black">
          <div className="text-xl font-bold tracking-tight">
            Welcome, {session.name}
          </div>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
            Manage courses, content, students, leads, and tests from here.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Courses",
              desc: "Create courses, batches, pricing, schedules.",
              href: "/admin/courses",
            },
            {
              title: "Content",
              desc: "Upload lectures, PDFs, announcements.",
              href: "/admin/content",
            },
            {
              title: "Tests",
              desc: "Question bank, timed tests, results.",
              href: "/admin/tests",
            },
            {
              title: "Students",
              desc: "Manage accounts and enrollments.",
              href: "/admin/students",
            },
            {
              title: "Leads",
              desc: "Track inquiries and demo registrations.",
              href: "/admin/leads",
            },
            {
              title: "Blog",
              desc: "Publish SEO posts and updates.",
              href: "/admin/blog",
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

