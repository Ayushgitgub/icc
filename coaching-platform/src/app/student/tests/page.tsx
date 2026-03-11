import { redirect } from "next/navigation";
import { Container } from "@/components/Container";
import { getDemoSession } from "@/lib/auth";

export const metadata = { title: "Tests" };

export default async function TestsPage() {
  const session = await getDemoSession();
  if (!session || session.role !== "student") redirect("/student");

  return (
    <div className="py-10">
      <Container className="space-y-4">
        <div className="text-2xl font-bold tracking-tight">Online Tests</div>
        <div className="rounded-3xl border border-black/10 bg-white p-6 text-sm text-zinc-600 dark:border-white/15 dark:bg-black dark:text-zinc-300">
          Next step: build MCQ test engine (timer, attempts, scoring, solutions,
          analytics).
        </div>
      </Container>
    </div>
  );
}

