type TitleCardProps = { title?: string; width?: number; className?: string }

export default function TitleCard({ title = "Iron Sharpens Iron", width = 34, className = "" }: TitleCardProps) {
  const inner = Math.max(width, title.length)
  const padTotal = inner - title.length
  const left = Math.floor(padTotal / 2)
  const right = padTotal - left
  const top = `+${"-".repeat(inner)}+`
  const mid = `|${" ".repeat(left)}${title}${" ".repeat(right)}|`
  const bot = `+${"-".repeat(inner)}+`
  return <pre className={`font-mono ${className}`}>{`${top}\n${mid}\n${bot}`}</pre>
}
