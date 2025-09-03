"use client"

import { useState } from "react"

type CreateEventCardProps = {
  onCreate: (e: { emoji: string; title: string; host: string; startsAt: Date; location: string }) => void
  className?: string
}

export default function CreateEventCard({ onCreate, className = "" }: CreateEventCardProps) {
  const [title, setTitle] = useState("")
  const [emoji, setEmoji] = useState("🏀")
  const [host, setHost] = useState("You")
  const [date, setDate] = useState<string>("")
  const [time, setTime] = useState<string>("")
  const [location, setLocation] = useState("")

  const submit = () => {
    if (!title || !date || !time) return
    const startsAt = new Date(`${date}T${time}`)
    onCreate({ emoji, title, host, startsAt, location })
    setTitle(""); setLocation("")
  }

  return (
    <div className={`rounded-xl border p-4 bg-white shadow-sm ${className}`}>
      <div className="font-semibold mb-2">+ Create Event</div>
      <div className="grid gap-2">
        <input className="border rounded px-3 py-2" placeholder="Title (e.g., Basketball Run)" value={title} onChange={e=>setTitle(e.target.value)} />
        <div className="flex gap-2">
          <input className="border rounded px-3 py-2 w-24" value={emoji} onChange={e=>setEmoji(e.target.value)} />
          <input className="border rounded px-3 py-2 flex-1" placeholder="Location" value={location} onChange={e=>setLocation(e.target.value)} />
        </div>
        <div className="flex gap-2">
          <input className="border rounded px-3 py-2" type="date" value={date} onChange={e=>setDate(e.target.value)} />
          <input className="border rounded px-3 py-2" type="time" value={time} onChange={e=>setTime(e.target.value)} />
        </div>
        <button onClick={submit} className="mt-2 px-3 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700">Create</button>
      </div>
    </div>
  )
}
