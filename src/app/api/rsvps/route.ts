import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/client";
import { rsvps } from "@/db/schema";

export async function POST(req: NextRequest) {
  const { eventId, userId } = await req.json();
  const id = `rsvp_${Math.random().toString(36).slice(2, 8)}`;
  const createdAt = new Date().toISOString();

  await db.insert(rsvps).values({
    id,
    eventId,
    userId,
    status: "going",
    createdAt,
  });

  return NextResponse.json({ id }, { status: 201 });
}
