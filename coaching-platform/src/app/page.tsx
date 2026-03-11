import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";

export default function Home() {
  return (
    <div>
      <section className="border-b border-black/5 bg-gradient-to-b from-zinc-50 to-white py-14 dark:border-white/10 dark:from-black dark:to-black">
        <Container className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-zinc-700 dark:border-white/15 dark:bg-black dark:text-zinc-300">
              Hybrid coaching + online test series
            </div>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
              Coaching that turns effort into results.
            </h1>
            <p className="text-pretty text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              Run your institute like a product: courses, batches, tests, lectures,
              materials, and student progress — all in one platform.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/courses" variant="primary">
                Explore Courses
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Book a Free Demo Class
              </ButtonLink>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-300">
              <div className="rounded-full border border-black/10 px-3 py-1 dark:border-white/15">
                Recorded lectures
              </div>
              <div className="rounded-full border border-black/10 px-3 py-1 dark:border-white/15">
                Notes & PDFs
              </div>
              <div className="rounded-full border border-black/10 px-3 py-1 dark:border-white/15">
                Timed mock tests
              </div>
              <div className="rounded-full border border-black/10 px-3 py-1 dark:border-white/15">
                Performance analytics
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { k: "10,000+", v: "Students taught" },
                { k: "250+", v: "Mock tests" },
                { k: "98%", v: "Positive reviews" },
                { k: "24×7", v: "Portal access" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="rounded-2xl border border-black/10 p-4 dark:border-white/15"
                >
                  <div className="text-2xl font-extrabold tracking-tight">
                    {s.k}
                  </div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-300">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-zinc-50 p-4 text-sm text-zinc-700 dark:bg-white/5 dark:text-zinc-200">
              “The test analysis helped me find weak topics fast — my score improved
              in 3 weeks.”
              <div className="mt-2 font-semibold">— Student (NEET)</div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">
              What you get from day one
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              A complete coaching website + learning portal designed for conversions
              and student retention.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Marketing website",
                desc: "High-converting pages, SEO-ready blog, WhatsApp + inquiry forms.",
              },
              {
                title: "Student portal",
                desc: "Login, lectures, materials, tests, results, and progress tracking.",
              },
              {
                title: "Admin panel",
                desc: "Manage courses, batches, content, students, leads, and payments.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-3xl border border-black/10 p-6 dark:border-white/15"
              >
                <div className="text-lg font-semibold">{f.title}</div>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-black/5 bg-zinc-50 py-14 dark:border-white/10 dark:bg-white/5">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-xl font-bold tracking-tight">
              Ready to launch your institute online?
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
              Create your course pages, start taking inquiries, and onboard students.
            </p>
          </div>
          <div className="flex gap-3">
            <ButtonLink href="/contact" variant="primary">
              Talk to Us
            </ButtonLink>
            <ButtonLink href="/student" variant="secondary">
              Student Portal
            </ButtonLink>
          </div>
        </Container>
      </section>
    </div>
  );
}
