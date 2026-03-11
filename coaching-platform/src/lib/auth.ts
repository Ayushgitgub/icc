import { cookies } from "next/headers";

export type DemoSession = {
  role: "student" | "admin";
  name: string;
};

export async function getDemoSession(): Promise<DemoSession | null> {
  const raw = (await cookies()).get("demo_session")?.value;
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as DemoSession;
    if (parsed?.role !== "student" && parsed?.role !== "admin") return null;
    if (!parsed?.name) return null;
    return parsed;
  } catch {
    return null;
  }
}

