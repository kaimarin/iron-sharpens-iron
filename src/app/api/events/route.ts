import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/client";
import { events } from "@/db/schema";
import { eq, gte, lt } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const { pathname } = new URL(req.url);
  const now = new Date().toISOString();

  let rows;
  if (pathname.endsWith("/past")) {
    rows = await db.select().from(events).where(lt(events.startsAt, now));
  } else {
    rows = await db.select().from(events).where(gte(events.startsAt, now));
  }

  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const id = `evt_${Math.random().toString(36).slice(2, 8)}`;
  const createdAt = new Date().toISOString();

  await db.insert(events).values({
    id,
    hostId: data.hostId,
    title: data.title,
    type: data.type,
    startsAt: data.startsAt,
    durationMins: data.durationMins,
    location: data.location,
    notes: data.notes,
    createdAt,
  });

  return NextResponse.json({ id }, { status: 201 });
}