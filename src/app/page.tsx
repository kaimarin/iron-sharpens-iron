"use client"

import { useEffect, useState } from "react"
import TitleCard from "../components/TitleCard"
import EventList from "../components/EventList"
import CreateEventCard from "../components/CreateEventCard"
import { Event } from "../models/models"
import { getEvents } from "../lib/api"
import { rsvpToEvent } from "../lib/api"

export default function Page() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getEvents()
      .then((data) => {
        console.log("data");
        console.log(data);
        setEvents(data)
      })
      .finally(() => setLoading(false))
  }, []);

  const handleView = (id: string) => {
    console.log("View event", id);
  };

  const handleRsvp = async (id: string) => {
    try {
      const userId = "EXAMPLE_USER_ID_FOR_RSVP";
      await rsvpToEvent(id, userId);
      setEvents((prev) =>
        prev.map((e) =>
          e.id === id
            ? { ...e, goingCount: (e.goingCount ?? 0) + 1 }
            : e
        )
      );
    } catch (err) {
      alert("Failed to RSVP. Please try again.");
    }
  };

  return (
    <main className="mx-auto max-w-2xl p-4 space-y-4">
      <TitleCard />
      <EventList
        events={events}
        isLoading={loading}
        onView={(id) => handleView(id)}
        onRsvp={(id) => handleRsvp(id)
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
