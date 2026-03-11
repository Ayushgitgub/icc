import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as
    | {
        name?: string;
        phone?: string;
        email?: string;
        message?: string;
        source?: string;
      }
    | null;

  const name = body?.name?.trim() || "";
  const phone = body?.phone?.trim() || "";
  const email = body?.email?.trim() || null;
  const message = body?.message?.trim() || null;
  const source = body?.source?.trim() || null;

  if (!name || !phone) {
    return NextResponse.json(
      { error: "Name and phone are required." },
      { status: 400 }
    );
  }

  const lead = await prisma.lead.create({
    data: { name, phone, email, message, source },
    select: { id: true, createdAt: true },
  });

  return NextResponse.json({ ok: true, lead });
}

export async function GET() {
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

  return NextResponse.json({ ok: true, leads });
}

