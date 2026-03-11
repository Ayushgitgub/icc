import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { prisma } from "@/lib/db";

export const metadata = { title: "Courses" };

function formatInr(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default async function CoursesPage() {
  const courses = await prisma.course.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      slug: true,
      name: true,
      duration: true,
      mode: true,
      priceInr: true,
    },
  });

  return (
    <PageShell
      title="Courses"
      subtitle="Clear pricing, strong syllabus coverage, and a test-first approach."
    >
      <div className="overflow-hidden rounded-3xl border border-black/10 dark:border-white/15">
        <div className="grid grid-cols-12 gap-0 bg-zinc-50 px-5 py-3 text-xs font-semibold text-zinc-700 dark:bg-white/5 dark:text-zinc-200">
          <div className="col-span-5">Course</div>
          <div className="col-span-2">Duration</div>
          <div className="col-span-2">Price</div>
          <div className="col-span-2">Mode</div>
          <div className="col-span-1 text-right">Action</div>
        </div>
        <div className="divide-y divide-black/5 dark:divide-white/10">
          {courses.map((c) => (
            <div
              key={c.slug}
              className="grid grid-cols-12 items-center px-5 py-4 text-sm"
            >
              <div className="col-span-12 font-semibold md:col-span-5">
                {c.name}
              </div>
              <div className="col-span-4 text-zinc-600 dark:text-zinc-300 md:col-span-2">
                {c.duration}
              </div>
              <div className="col-span-4 text-zinc-600 dark:text-zinc-300 md:col-span-2">
                {formatInr(c.priceInr)}
              </div>
              <div className="col-span-4 text-zinc-600 dark:text-zinc-300 md:col-span-2">
                {c.mode}
              </div>
              <div className="col-span-12 mt-3 flex justify-end md:col-span-1 md:mt-0">
                <ButtonLink href={`/courses/${c.slug}`} variant="secondary">
                  View
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Syllabus + schedule",
            desc: "Well-structured plan with weekly targets and revision.",
          },
          {
            title: "Practice & tests",
            desc: "Topic tests, full mocks, analysis, and rank list.",
          },
          {
            title: "Doubt support",
            desc: "Fast doubt resolution during practice and revision cycles.",
          },
        ].map((x) => (
          <div
            key={x.title}
            className="rounded-3xl border border-black/10 p-6 dark:border-white/15"
          >
            <div className="font-semibold">{x.title}</div>
            <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              {x.desc}
            </p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

