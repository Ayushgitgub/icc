import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { prisma } from "@/lib/db";

function formatInr(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = await prisma.course.findUnique({
    where: { slug },
    select: {
      name: true,
      duration: true,
      mode: true,
      priceInr: true,
      description: true,
    },
  });
  if (!course) notFound();

  return (
    <PageShell
      title={course.name}
      subtitle={`${course.duration} · ${course.mode} · ${formatInr(course.priceInr)}`}
    >
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-black/10 p-6 dark:border-white/15 md:col-span-2">
          <div className="text-lg font-semibold">Course overview</div>
          <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            {course.description}
          </p>

          <div className="mt-6">
            <div className="font-semibold">Includes</div>
            <div className="mt-2 flex flex-wrap gap-2 text-sm">
              {[
                "Lectures",
                "PDF Notes",
                "Practice sheets",
                "Topic tests",
                "Full mocks",
              ].map((x) => (
                <div
                  key={x}
                  className="rounded-full border border-black/10 px-3 py-1 text-zinc-600 dark:border-white/15 dark:text-zinc-300"
                >
                  {x}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-zinc-50 p-4 text-sm dark:bg-white/5">
              <div className="font-semibold">Eligibility</div>
              <div className="mt-1 text-zinc-600 dark:text-zinc-300">
                Contact us to confirm eligibility for your batch and target exam.
              </div>
            </div>
            <div className="rounded-2xl bg-zinc-50 p-4 text-sm dark:bg-white/5">
              <div className="font-semibold">Schedule</div>
              <div className="mt-1 text-zinc-600 dark:text-zinc-300">
                Flexible batches available. We’ll share the latest timetable on inquiry.
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-black/10 p-6 dark:border-white/15">
          <div className="text-lg font-semibold">Enroll</div>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            Talk to our counselor, confirm your batch, and start learning today.
          </p>
          <div className="mt-5 space-y-2">
            <ButtonLink href="/contact" variant="primary" className="w-full">
              Enquire / Enroll
            </ButtonLink>
            <ButtonLink href="/student" variant="secondary" className="w-full">
              Student Portal
            </ButtonLink>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

