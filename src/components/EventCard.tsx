import { Event } from "../models/models"

type EventCardProps = {
  event: Event;
  onRsvp: (id: string) => void;
  onView: (id: string) => void;
  className?: string
}

export default function EventCard({ event, className = "", onRsvp, onView}: EventCardProps) {
  const dt = new Date(event.startsAt)
  const when = dt.toLocaleString(undefined, { weekday: "short", hour: "numeric", minute: "2-digit" })
  const emoji = event.type === "basketball" ? "🏀" : event.type === "calisthenics" ? "💪" : event.type === "jump" ? "🏋️" : "🗓️"

  return (
    <div className={`rounded-xl border p-4 bg-white shadow-sm ${className}`}>
      <div className="text-lg font-semibold flex items-center gap-2">
        <span>{emoji}</span>
        <span>{event.title}</span>
      </div>
      <div className="text-sm text-gray-700 mt-1">
        Host: {event.hostId} | {when} – {event.location}
      </div>
      <div className="mt-3 flex gap-2">
        <button onClick={() => onView(event.id)} className="px-3 py-1.5 rounded-md border hover:bg-gray-50">View</button>
        <button onClick={() => onRsvp(event.id)} className="px-3 py-1.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">I’m Going</button>
      </div>
    </div>
  )
}
