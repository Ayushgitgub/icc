import { redirect } from "next/navigation";
import { Container } from "@/components/Container";
import { getDemoSession } from "@/lib/auth";

export const metadata = { title: "Admin · Tests" };

export default async function AdminTestsPage() {
  const session = await getDemoSession();
  if (!session || session.role !== "admin") redirect("/admin");

  return (
    <div className="py-10">
      <Container className="space-y-4">
        <div className="text-2xl font-bold tracking-tight">Tests</div>
        <div className="rounded-3xl border border-black/10 bg-white p-6 text-sm text-zinc-600 dark:border-white/15 dark:bg-black dark:text-zinc-300">
          Next step: build question bank + test builder + attempts evaluation.
        </div>
      </Container>
    </div>
  );
}

