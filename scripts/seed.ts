import "dotenv/config";
import { client, db } from "../src/db/client";
import { users, events, rsvps, checkins } from "../src/db/schema";

async function main() {
  await db.insert(users).values([
    { id: "usr_001", displayName: "Jordan", createdAt: "2025-09-03T09:00:00Z" },
    { id: "usr_002", displayName: "Taylor", createdAt: "2025-09-03T09:05:00Z" },
    { id: "usr_003", displayName: "Sam",    createdAt: "2025-09-03T09:10:00Z" },
  ]);

  await db.insert(events).values([
    { id: "evt_001", hostId: "usr_001", title: "Basketball Run", type: "basketball", startsAt: "2025-09-03T18:30:00Z", durationMins: 90, location: "Jefferson Park", notes: "Full court if 8+", createdAt: "2025-09-03T10:00:00Z" },
    { id: "evt_002", hostId: "usr_002", title: "Calisthenics",   type: "calisthenics", startsAt: "2025-09-04T07:00:00Z", durationMins: 60, location: "Playground Bars", createdAt: "2025-09-03T10:05:00Z" },
    { id: "evt_003", hostId: "usr_003", title: "Jump Training",  type: "jump", startsAt: "2025-09-05T17:00:00Z", durationMins: 60, location: "Gym Hall", notes: "Bring jump rope", createdAt: "2025-09-03T10:10:00Z" },
  ]);

  await db.insert(rsvps).values([
    { id: "rsvp_001", eventId: "evt_001", userId: "usr_001", status: "going", createdAt: "2025-09-03T11:00:00Z" },
    { id: "rsvp_002", eventId: "evt_001", userId: "usr_002", status: "going", createdAt: "2025-09-03T11:05:00Z" },
    { id: "rsvp_003", eventId: "evt_003", userId: "usr_003", status: "going", createdAt: "2025-09-03T11:10:00Z" },
  ]);

  await db.insert(checkins).values([
    { id: "chk_001", eventId: "evt_001", userId: "usr_001", startedAt: "2025-09-03T18:35:00Z", expiresAt: "2025-09-03T21:35:00Z" },
    { id: "chk_002", eventId: "evt_001", userId: "usr_002", startedAt: "2025-09-03T18:40:00Z", expiresAt: "2025-09-03T21:40:00Z" },
    { id: "chk_003", eventId: "evt_002", userId: "usr_002", startedAt: "2025-09-04T07:02:00Z", expiresAt: "2025-09-04T10:02:00Z" },
  ]);

  await client.close();
  console.log("Seeded");
}
main().catch(async (e) => {
  console.error(e);
  await client.close();
  process.exit(1);
});
