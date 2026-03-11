import { redirect } from "next/navigation";
import { Container } from "@/components/Container";
import { getDemoSession } from "@/lib/auth";
import { prisma } from "@/lib/db";

export const metadata = { title: "Admin · Leads" };

export default async function AdminLeadsPage() {
  const session = await getDemoSession();
  if (!session || session.role !== "admin") redirect("/admin");

  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
    select: {
      id: true,
      createdAt: true,
      name: true,
      phone: true,
      email: true,
      message: true,
      source: true,
      stage: true,
    },
  });

  return (
    <div className="py-10">
      <Container className="space-y-4">
        <div className="text-2xl font-bold tracking-tight">Leads</div>
        <div className="overflow-hidden rounded-3xl border border-black/10 bg-white dark:border-white/15 dark:bg-black">
          <div className="grid grid-cols-12 gap-0 bg-zinc-50 px-5 py-3 text-xs font-semibold text-zinc-700 dark:bg-white/5 dark:text-zinc-200">
            <div className="col-span-3">Name</div>
            <div className="col-span-2">Phone</div>
            <div className="col-span-3">Email</div>
            <div className="col-span-2">Stage</div>
            <div className="col-span-2">Created</div>
          </div>
          <div className="divide-y divide-black/5 text-sm dark:divide-white/10">
            {leads.length === 0 ? (
              <div className="px-5 py-6 text-zinc-600 dark:text-zinc-300">
                No leads yet. Submit the contact form to create one.
              </div>
            ) : (
              leads.map((l) => (
                <div key={l.id} className="grid grid-cols-12 gap-3 px-5 py-4">
                  <div className="col-span-12 font-semibold md:col-span-3">
                    {l.name}
                    {l.source ? (
                      <div className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                        {l.source}
                      </div>
                    ) : null}
                  </div>
                  <div className="col-span-6 text-zinc-600 dark:text-zinc-300 md:col-span-2">
                    {l.phone}
                  </div>
                  <div className="col-span-6 text-zinc-600 dark:text-zinc-300 md:col-span-3">
                    {l.email || "—"}
                  </div>
                  <div className="col-span-6 text-zinc-600 dark:text-zinc-300 md:col-span-2">
                    {l.stage}
                  </div>
                  <div className="col-span-6 text-zinc-600 dark:text-zinc-300 md:col-span-2">
                    {l.createdAt.toLocaleString()}
                  </div>
                  {l.message ? (
                    <div className="col-span-12 mt-1 rounded-2xl bg-zinc-50 p-3 text-xs text-zinc-700 dark:bg-white/5 dark:text-zinc-200">
                      {l.message}
                    </div>
                  ) : null}
                </div>
              ))
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

