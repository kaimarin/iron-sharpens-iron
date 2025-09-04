import { sqliteTable, text, integer, index, uniqueIndex } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  displayName: text("display_name").notNull(),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at"),
});

export const events = sqliteTable("events", {
  id: text("id").primaryKey(),
  hostId: text("host_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  type: text("type", { enum: ["basketball", "calisthenics", "jump", "other"] }).notNull(),
  startsAt: text("starts_at").notNull(),
  durationMins: integer("duration_mins").notNull(),
  location: text("location").notNull(),
  notes: text("notes"),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at"),
}, (t) => [
  index("idx_events_starts_at").on(t.startsAt),
]);

export const rsvps = sqliteTable("rsvps", {
  id: text("id").primaryKey(),
  eventId: text("event_id").notNull().references(() => events.id, { onDelete: "cascade" }),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  status: text("status", { enum: ["going"] }).notNull(),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at"),
}, (t) => [
  uniqueIndex("u_rsvps_event_user").on(t.eventId, t.userId),
  index("idx_rsvps_event").on(t.eventId),
  index("idx_rsvps_user").on(t.userId),
]);

export const checkins = sqliteTable("checkins", {
  id: text("id").primaryKey(),
  eventId: text("event_id").notNull().references(() => events.id, { onDelete: "cascade" }),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  startedAt: text("started_at").notNull(),
  expiresAt: text("expires_at").notNull(),
  lastExtendedAt: text("last_extended_at"),
}, (t) => [
  index("idx_checkins_event").on(t.eventId),
  index("idx_checkins_user").on(t.userId),
]);
