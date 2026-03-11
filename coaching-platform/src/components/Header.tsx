import Link from "next/link";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { siteConfig } from "@/lib/site";

const nav = [
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/faculty", label: "Faculty" },
  { href: "/results", label: "Results" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/60">
      <Container className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold tracking-tight">
            {siteConfig.name}
          </Link>
          <nav className="hidden items-center gap-4 text-sm text-zinc-600 dark:text-zinc-300 md:flex">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="rounded-full px-3 py-1.5 hover:bg-black/5 dark:hover:bg-white/10"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <ButtonLink href="/student" variant="ghost" className="hidden sm:inline-flex">
            Student Login
          </ButtonLink>
          <ButtonLink href="/contact" variant="primary">
            Enquire Now
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}

