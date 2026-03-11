import { redirect } from "next/navigation";
import { Container } from "@/components/Container";
import { getDemoSession } from "@/lib/auth";

export const metadata = { title: "Materials" };

export default async function MaterialsPage() {
  const session = await getDemoSession();
  if (!session || session.role !== "student") redirect("/student");

  return (
    <div className="py-10">
      <Container className="space-y-4">
        <div className="text-2xl font-bold tracking-tight">Study Materials</div>
        <div className="rounded-3xl border border-black/10 bg-white p-6 text-sm text-zinc-600 dark:border-white/15 dark:bg-black dark:text-zinc-300">
          Next step: upload PDFs/notes in admin and allow students to download
          securely.
        </div>
      </Container>
    </div>
  );
}

