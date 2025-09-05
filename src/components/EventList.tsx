"use client"

import EventCard from "./EventCard"
import { Event } from "../models/models"

type EventListProps = {
  events: Event[]
  isLoading?: boolean
  onView: (id: string) => void
  onRsvp: (id: string) => void
  className?: string
}

export default function EventList({ events, isLoading = false, onView, onRsvp, className = "" }: EventListProps) {
  if (isLoading) {
    return (
      <div className={`grid gap-3 ${className}`}>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="rounded-xl border p-4 animate-pulse">
            <div className="h-5 w-40 bg-gray-200 rounded" />
            <div className="h-4 w-72 bg-gray-100 rounded mt-2" />
            <div className="h-4 w-24 bg-gray-100 rounded mt-3" />
            <div className="flex gap-2 mt-3">
              <div className="h-8 w-20 bg-gray-200 rounded" />
              <div className="h-8 w-24 bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (!events?.length) {
    return (
      <div className={`text-center text-sm text-gray-600 ${className}`}>
        No upcoming events yet. Create one to get your crew moving.
      </div>
    )
  }

  const sorted = [...events].sort(
    (a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime()
  )

  return (
    <div className={`grid gap-3 ${className}`}>
      {sorted.map((e) => (
        <EventCard key={e.id} event={e} onView={onView} onRsvp={onRsvp} />
      ))}
    </div>
  )
}
