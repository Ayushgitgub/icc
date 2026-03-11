import { redirect } from "next/navigation";
import { Container } from "@/components/Container";
import { getDemoSession } from "@/lib/auth";

export const metadata = { title: "Admin · Blog" };

export default async function AdminBlogPage() {
  const session = await getDemoSession();
  if (!session || session.role !== "admin") redirect("/admin");

  return (
    <div className="py-10">
      <Container className="space-y-4">
        <div className="text-2xl font-bold tracking-tight">Blog</div>
        <div className="rounded-3xl border border-black/10 bg-white p-6 text-sm text-zinc-600 dark:border-white/15 dark:bg-black dark:text-zinc-300">
          Next step: add a blog editor with SEO fields and publish/unpublish workflow.
        </div>
      </Container>
    </div>
  );
}

