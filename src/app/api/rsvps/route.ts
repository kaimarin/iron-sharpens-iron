// src/app/api/rsvps/route.ts
import { NextResponse } from "next/server"
import { Rsvp } from "@/models/models"

const now = new Date().toISOString()
const data: Rsvp[] = [
  { id: "r1", eventId: "e1", userId: "u2", status: "going", createdAt: now },
  { id: "r2", eventId: "e1", userId: "u3", status: "maybe", createdAt: now },
  { id: "r3", eventId: "e2", userId: "u1", status: "going", createdAt: now },
]

export async function GET() {
  return NextResponse.json(data)
}
