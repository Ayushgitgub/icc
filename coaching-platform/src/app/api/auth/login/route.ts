import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as
    | { role?: "student" | "admin"; name?: string }
    | null;

  const role = body?.role === "admin" ? "admin" : "student";
  const name = (body?.name || (role === "admin" ? "Admin" : "Student")).trim();

  const res = NextResponse.json({ ok: true });
  res.cookies.set("demo_session", JSON.stringify({ role, name }), {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}

