import { PageShell } from "@/components/PageShell";

export const metadata = { title: "Results" };

const toppers = [
  { name: "Aarav Singh", exam: "JEE", rank: "AIR 412", score: "99.2 percentile" },
  { name: "Isha Patel", exam: "NEET", rank: "AIR 980", score: "665/720" },
  { name: "Vikram Rao", exam: "Boards", rank: "98.6%", score: "Class 10" },
  { name: "Meera Nair", exam: "NEET", rank: "AIR 1420", score: "652/720" },
] as const;

export default function ResultsPage() {
  return (
    <PageShell
      title="Results & Toppers"
      subtitle="Real outcomes built on daily practice, testing, and mentorship."
    >
      <div className="grid gap-4 md:grid-cols-4">
        {toppers.map((t) => (
          <div
            key={`${t.name}-${t.rank}`}
            className="rounded-3xl border border-black/10 p-6 dark:border-white/15"
          >
            <div className="text-sm font-semibold text-zinc-600 dark:text-zinc-300">
              {t.exam}
            </div>
            <div className="mt-1 text-lg font-bold tracking-tight">{t.rank}</div>
            <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              {t.name}
            </div>
            <div className="mt-4 rounded-2xl bg-zinc-50 p-3 text-xs text-zinc-700 dark:bg-white/5 dark:text-zinc-200">
              {t.score}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-black/10 p-6 dark:border-white/15">
        <div className="text-lg font-semibold">Success stories</div>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-300">
          We publish verified results, rank letters (where possible), and student
          feedback. Our focus is consistency: weekly tests, concept revision, and
          targeted practice on weak areas.
        </p>
      </div>
    </PageShell>
  );
}

