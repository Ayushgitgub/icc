import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata = { title: "Blog" };

const posts = [
  {
    slug: "neet-prep-strategy-90-days",
    title: "NEET: 90-day preparation strategy (with weekly tests)",
    excerpt:
      "A practical revision plan that balances concepts, practice questions, and mocks.",
    date: "2026-03-11",
  },
  {
    slug: "jee-maths-high-score",
    title: "JEE Maths: How to improve score with structured practice",
    excerpt:
      "Topic-wise practice, error logs, and mock analysis — the system that works.",
    date: "2026-03-11",
  },
  {
    slug: "board-exam-time-management",
    title: "Board exams: Time management and scoring patterns",
    excerpt:
      "A simple framework to plan chapters, revision, and last-week strategy.",
    date: "2026-03-11",
  },
] as const;

export default function BlogPage() {
  return (
    <PageShell
      title="Blog"
      subtitle="Preparation strategies, study tips, and exam-focused guidance."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="rounded-3xl border border-black/10 p-6 transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
          >
            <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
              {new Date(p.date).toLocaleDateString()}
            </div>
            <div className="mt-2 text-lg font-semibold leading-7">{p.title}</div>
            <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              {p.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}

