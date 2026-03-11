import { PageShell } from "@/components/PageShell";

export const metadata = { title: "Faculty" };

const faculty = [
  {
    name: "Dr. Ananya Sharma",
    subject: "Biology",
    exp: "8+ years",
    qual: "M.Sc, PhD",
    achievements: ["Top NEET mentorship track record", "High student satisfaction"],
  },
  {
    name: "Rahul Mehta",
    subject: "Physics",
    exp: "10+ years",
    qual: "B.Tech, IIT",
    achievements: ["Known for problem-solving approach", "Weekly concept clinics"],
  },
  {
    name: "Neha Verma",
    subject: "Mathematics",
    exp: "7+ years",
    qual: "M.Sc Mathematics",
    achievements: ["Board + JEE focused pedagogy", "Strong doubt support"],
  },
] as const;

export default function FacultyPage() {
  return (
    <PageShell
      title="Faculty"
      subtitle="Experienced teachers with a structured, exam-oriented teaching philosophy."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {faculty.map((f) => (
          <div
            key={f.name}
            className="rounded-3xl border border-black/10 p-6 dark:border-white/15"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-zinc-50 text-sm font-bold dark:bg-white/5">
                {f.name
                  .split(" ")
                  .slice(0, 2)
                  .map((x) => x[0])
                  .join("")}
              </div>
              <div>
                <div className="font-semibold">{f.name}</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-300">
                  {f.subject} • {f.exp}
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm">
              <div className="font-semibold">Qualifications</div>
              <div className="mt-1 text-zinc-600 dark:text-zinc-300">{f.qual}</div>
            </div>

            <div className="mt-4 text-sm">
              <div className="font-semibold">Highlights</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-zinc-600 dark:text-zinc-300">
                {f.achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

