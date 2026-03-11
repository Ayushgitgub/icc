import { Container } from "@/components/Container";

export function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-12">
      <Container>
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight">{title}</h1>
          {subtitle ? (
            <p className="max-w-2xl text-zinc-600 dark:text-zinc-300">
              {subtitle}
            </p>
          ) : null}
        </div>
        <div className="mt-8">{children}</div>
      </Container>
    </div>
  );
}

