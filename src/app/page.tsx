"use client"

import { useEffect, useState } from "react"
import TitleCard from "../components/TitleCard"
import EventList from "../components/EventList"
import CreateEventCard from "../components/CreateEventCard"
import { Event } from "../models/models"
import { getEvents } from "../lib/api"

export default function Page() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getEvents()
      .then((data) => setEvents(data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main className="mx-auto max-w-2xl p-4 space-y-4">
      <TitleCard />
      <EventList
        events={events}
        isLoading={loading}
        onView={(id) => console.log("view", id)}
        onRsvp={(id) =>
          setEvents((prev) =>
            prev.map((e) => (e.id === id ? { ...e, goingCount: e.goingCount + 1 } : e))
          )
        }
      />
      <CreateEventCard
        onCreate={(e) => {
          console.log("TODO - create event", e);
        }}
      />
    </main>
  )
}
