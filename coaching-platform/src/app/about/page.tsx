import { PageShell } from "@/components/PageShell";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PageShell
      title="About Us"
      subtitle="A coaching institute built on clarity, consistency, and measurable improvement."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-black/10 p-6 dark:border-white/15 md:col-span-2">
          <div className="text-lg font-semibold">Our story</div>
          <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            We started with one belief: students succeed when fundamentals are
            strong and practice is structured. Our teaching focuses on concept
            clarity, daily discipline, and exam-oriented strategy.
          </p>
          <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            The platform supports offline institutes transitioning to a hybrid
            model — recorded lectures, notes, tests, and progress tracking.
          </p>
        </div>

        <div className="rounded-3xl border border-black/10 p-6 dark:border-white/15">
          <div className="text-lg font-semibold">What we stand for</div>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
            <li>Concept-first teaching</li>
            <li>Daily practice & testing</li>
            <li>Transparent progress</li>
            <li>Student mentorship</li>
          </ul>
        </div>
      </div>
    </PageShell>
  );
}

