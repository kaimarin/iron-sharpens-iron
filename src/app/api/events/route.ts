import { NextResponse } from "next/server"
import { Event } from "@/models/models"

const now = new Date()
const inHrs = (h: number) => new Date(now.getTime() + h * 3600_000).toISOString()

const data: Event[] = [
  { id: "e1", hostId: "u1", title: "Basketball Run", type: "basketball", startsAt: inHrs(2), durationMins: 90, location: "Jefferson Park", goingCount: 3, createdAt: now.toISOString() },
  { id: "e2", hostId: "u2", title: "Calisthenics", type: "calisthenics", startsAt: inHrs(14), durationMins: 60, location: "Playground Bars", goingCount: 1, createdAt: now.toISOString() },
  { id: "e3", hostId: "u3", title: "Jump Training", type: "jump", startsAt: inHrs(30), durationMins: 75, location: "Gym Hall", goingCount: 0, createdAt: now.toISOString() },
]

export async function GET() {
  return NextResponse.json(data)
}
