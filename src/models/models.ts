export type ID = string;

export type User = {
  id: ID;
  displayName: string;
  // avatarUrl?: string;
  createdAt: string;
  updatedAt?: string;
};

export type EventType = "basketball" | "calisthenics" | "jump" | "other";

export type Event = {
  id: ID;
  hostId: ID;
  title: string;
  type: EventType;
  startsAt: string;
  durationMins: number;
  location: string;
  notes?: string;
  createdAt: string;
  updatedAt?: string;
  goingCount?: number;
  liveCount?: number;
};

export type RsvpStatus = "going";

export type Rsvp = {
  id: ID;
  eventId: ID;
  userId: ID;
  status: RsvpStatus;
  createdAt: string;
  updatedAt?: string;
};

export type Checkin = {
  id: ID;
  eventId: ID;
  userId: ID;
  startedAt: string;
  expiresAt: string;
  lastExtendedAt?: string;
};
