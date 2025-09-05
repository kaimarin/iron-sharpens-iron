
export async function rsvpToEvent(eventId: string, userId: string) {
  const res = await fetch("/api/rsvps", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ eventId, userId }),
  });
  if (!res.ok) throw new Error("Failed to RSVP");
  return res.json();
}
import { Event } from "../models/models"

export async function getEvents(): Promise<Event[]> {
  const res = await fetch("http://localhost:3000/api/events", {
    cache: "no-store",
  })
  if (!res.ok) throw new Error("Failed to fetch events")
  return res.json()
}
