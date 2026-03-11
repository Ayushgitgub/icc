import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const courses = await prisma.course.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      slug: true,
      name: true,
      mode: true,
      duration: true,
      priceInr: true,
      description: true,
    },
  });

  return NextResponse.json({ ok: true, courses });
}

