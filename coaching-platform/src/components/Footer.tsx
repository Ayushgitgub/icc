import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-black/5 py-10 dark:border-white/10">
      <Container className="grid gap-8 md:grid-cols-3">
        <div className="space-y-2">
          <div className="font-bold">{siteConfig.name}</div>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            {siteConfig.tagline}
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <div className="font-semibold">Quick links</div>
          <div className="flex flex-col gap-1 text-zinc-600 dark:text-zinc-300">
            <Link href="/courses" className="hover:underline">
              Courses
            </Link>
            <Link href="/results" className="hover:underline">
              Results
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <div className="font-semibold">Contact</div>
          <div className="text-zinc-600 dark:text-zinc-300">
            <div>{siteConfig.address}</div>
            <div>{siteConfig.phone}</div>
            <div>{siteConfig.email}</div>
          </div>
        </div>
      </Container>

      <Container className="mt-8 flex flex-col gap-2 text-xs text-zinc-500 dark:text-zinc-400 md:flex-row md:items-center md:justify-between">
        <div>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
        <div className="flex gap-3">
          <Link href="/admin" className="hover:underline">
            Admin
          </Link>
          <Link href="/student" className="hover:underline">
            Student Portal
          </Link>
        </div>
      </Container>
    </footer>
  );
}

