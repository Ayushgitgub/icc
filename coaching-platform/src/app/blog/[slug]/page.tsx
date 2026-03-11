import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";

const posts: Record<
  string,
  { title: string; body: Array<{ heading: string; text: string }> }
> = {
  "neet-prep-strategy-90-days": {
    title: "NEET: 90-day preparation strategy (with weekly tests)",
    body: [
      {
        heading: "1) Build a weekly rhythm",
        text: "Plan 5 learning days, 1 test day, and 1 review day. Consistency beats intensity.",
      },
      {
        heading: "2) Use an error log",
        text: "Track mistakes by topic. Re-practice only what you get wrong until accuracy improves.",
      },
      {
        heading: "3) Full mocks every week",
        text: "Treat mocks as training. Analyze time spent, silly errors, and weak chapters.",
      },
    ],
  },
  "jee-maths-high-score": {
    title: "JEE Maths: How to improve score with structured practice",
    body: [
      {
        heading: "1) Topic buckets",
        text: "Split into high-yield topics and build daily sets. Keep questions mixed after basics.",
      },
      {
        heading: "2) Speed + accuracy",
        text: "Practice timed sets. Improve selection skills: attempt questions you can finish correctly.",
      },
    ],
  },
  "board-exam-time-management": {
    title: "Board exams: Time management and scoring patterns",
    body: [
      {
        heading: "1) Map chapters to marks",
        text: "Spend more time on higher-weightage chapters, but don’t skip basics.",
      },
      {
        heading: "2) Revise with papers",
        text: "Use past papers to spot patterns and build confidence for exam day.",
      },
    ],
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <PageShell title={post.title}>
      <div className="space-y-4">
        {post.body.map((s) => (
          <section
            key={s.heading}
            className="rounded-3xl border border-black/10 p-6 dark:border-white/15"
          >
            <h2 className="text-lg font-semibold">{s.heading}</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              {s.text}
            </p>
          </section>
        ))}
      </div>
    </PageShell>
  );
}

