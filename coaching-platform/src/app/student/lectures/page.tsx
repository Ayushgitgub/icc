import { redirect } from "next/navigation";
import { Container } from "@/components/Container";
import { getDemoSession } from "@/lib/auth";

export const metadata = { title: "Lectures" };

export default async function LecturesPage() {
  const session = await getDemoSession();
  if (!session || session.role !== "student") redirect("/student");

  return (
    <div className="py-10">
      <Container className="space-y-4">
        <div className="text-2xl font-bold tracking-tight">Lectures</div>
        <div className="rounded-3xl border border-black/10 bg-white p-6 text-sm text-zinc-600 dark:border-white/15 dark:bg-black dark:text-zinc-300">
          Next step: connect lectures to the database and stream videos via signed
          URLs.
        </div>
      </Container>
    </div>
  );
}

