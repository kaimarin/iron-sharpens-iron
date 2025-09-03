import { NextResponse } from "next/server"
import { Checkin } from "@/models/models"

const now = new Date()
const iso = (d: Date) => d.toISOString()
const addMin = (m: number) => iso(new Date(now.getTime() + m * 60_000))

const data: Checkin[] = [
  { id: "c1", eventId: "e1", userId: "u1", startedAt: iso(now), expiresAt: addMin(180) },
  { id: "c2", eventId: "e1", userId: "u2", startedAt: iso(now), expiresAt: addMin(180) },
  { id: "c3", eventId: "e2", userId: "u1", startedAt: addMin(10), expiresAt: addMin(190) },
]

export async function GET() {
  return NextResponse.json(data)
}
