import { NextResponse } from "next/server"
import { User } from "@/models/models"

const data: User[] = [
  { id: "u1", displayName: "Jordan", createdAt: new Date().toISOString() },
  { id: "u2", displayName: "Taylor", createdAt: new Date().toISOString() },
  { id: "u3", displayName: "Sam", createdAt: new Date().toISOString() },
]

export async function GET() {
  return NextResponse.json(data)
}
