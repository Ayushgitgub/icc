import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:focus-visible:ring-white/20";
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      : variant === "secondary"
        ? "border border-black/15 bg-white text-black hover:bg-zinc-50 dark:border-white/15 dark:bg-black dark:text-white dark:hover:bg-white/5"
        : "text-black hover:bg-black/5 dark:text-white dark:hover:bg-white/10";

  return (
    <Link href={href} className={cn(base, styles, className)}>
      {children}
    </Link>
  );
}

