import Link from "next/link";
import { Container } from "@/components/Container";
import { LogoutButton } from "@/components/LogoutButton";
import { getDemoSession } from "@/lib/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getDemoSession();

  return (
    <div className="bg-zinc-50 dark:bg-black">
      <div className="border-b border-black/5 bg-white dark:border-white/10 dark:bg-black">
        <Container className="flex h-14 items-center justify-between">
          <Link href="/admin/dashboard" className="font-semibold">
            Admin Panel
          </Link>
          <div className="flex items-center gap-3">
            <div className="text-sm text-zinc-600 dark:text-zinc-300">
              {session ? `Signed in as ${session.name}` : "Not signed in"}
            </div>
            {session ? <LogoutButton to="/" /> : null}
          </div>
        </Container>
      </div>
      {children}
    </div>
  );
}

