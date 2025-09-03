# Problem
Workouts, pickup basketball, pickup frisbee, or any other sports are some of the best ways to build community. Coordinating these activities in group chats is messy, RSVPing is unclear, and finding reliable games or activities nearby can be frustrating or just not even cross a person's mind, often leaving people showing up to an empty park or just not doing the activity.

# Product Description
Iron Sharpens Iron provides a simple way to coordinate activities with friends or the wider community. Users can create public events to welcome anyone or private events for their own group, with clear RSVPs that make it obvious who is attending. By making coordination easier and more transparent, the app helps people build community, stay active, and push each other through sports and workouts.

# API Endpoints

## Auth
- POST /auth/signup
- POST /auth/login
- POST /auth/logout

## Users
- GET /users/:id (profile + stats)
- PATCH /users/:id (update display name, avatar)

## Events
- POST /events (create event)
- GET /events (list upcoming/live events, feed)
- GET /events/:id (event details)
- PATCH /events/:id (edit event — host only)
- DELETE /events/:id (delete event — host only)

## RSVPs
- POST /events/:id/rsvp (I’m going / maybe)
- DELETE /events/:id/rsvp (leave event)

## Check-ins (live presence)
- POST /events/:id/checkin (I’m here)
- PATCH /events/:id/checkin (extend/still here)
- DELETE /events/:id/checkin (manual check-out)

## Utilities
- GET /events/:id/ics (download .ics for calendar)

# Home Page
```
--------------------------------------------------
 Iron Sharpens Iron 🗡️🏀
--------------------------------------------------
Upcoming & Live Events
--------------------------------------------------
[🏀] Basketball Run
Host: Jordan | Today 6:30 PM – Jefferson Park
👥 4 going • LIVE (2 here now)
[ View ]   [ I’m Going ]

[💪] Calisthenics
Host: Taylor | Tomorrow 7:00 AM – Playground Bars
👥 2 going
[ View ]   [ I’m Going ]

[🏋️] Jump Training
Host: Sam | Fri 5:00 PM – Gym Hall
👥 3 going
[ View ]   [ I’m Going ]
--------------------------------------------------

+ Create Event
--------------------------------------------------
```

# Side Menu
```
+----------------------------------+
| Iron Sharpens Iron               |
+----------------------------------+
| > Feed                           |
|   Create Event  [+]              |
|   My Events                      |
|   Past Events                    |
|   Friends                        |
|   Profile                        |
|   Settings                       |
+----------------------------------+
| Logged in as: <you>              |
| [ Sign Out ]  [ Switch Account ] |
+----------------------------------+
```
 