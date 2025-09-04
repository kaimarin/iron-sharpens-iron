# Problem
Workouts, pickup basketball, pickup frisbee, or any other sports are some of the best ways to build community. Coordinating these activities in group chats is messy, RSVPing is unclear, and finding reliable games or activities nearby can be frustrating or just not even cross a person's mind, often leaving people showing up to an empty park or just not doing the activity.

# MVP Description
Iron Sharpens Iron provides a simple way to coordinate activities with friends or the wider community. Users can create events, with clear RSVPs that make it clear who is attending. By making coordination easier and more transparent, the app helps people build community, stay active, and push each other through sports and workouts.

# MVP Functional Requirements
* Create event: title, type, date and time, duration, location, notes optional
* Event feed: show upcoming and live events from you and others. Live = someone has checked in
* Event details: host, when, where, notes, attendee count, join and leave actions
* RSVP: users can mark themselves as “going” or cancel their RSVP; the attendee count updates optimistically in the UI (backend API is hit)
* Check in: I am here starts live status with auto check out after three hours
* Share: copy invite link to let others view and join
* Add to calendar: download an ics file for the event
* Auth: email magic link sign in and sign out
* Profile: view and edit display name

# Future Features
* Tournament coordination - ability to coordinate tournaments (basketball, frisbee, etc.). Can be recurring.
* Recurring Events - Can be public (e.g. Motivational Mondays)

# API Endpoints

## Auth
- POST /auth/signup
- POST /auth/login
- POST /auth/logout

## Users
- GET /users/:id (profile + events attended)
- PATCH /users/:id (update display name)

## Events
- POST /events (create event)
- GET /events (list upcoming/live events, feed)
- GET /events/:id (event details)
- GET /events/past (list past events)
- PATCH /events/:id (edit event — host only)
- DELETE /events/:id (delete event — host only)

## RSVPs
- POST /events/:id/rsvp (I’m going)
- DELETE /events/:id/rsvp (leave event)

## Check-ins (live presence)
- POST /events/:id/checkin (I’m here)
<!-- - PATCH /events/:id/checkin (extend/still here) -->
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
|   Profile                        |
+----------------------------------+
| Logged in as: <you>              |
| [ Sign Out ]                     |
+----------------------------------+
```
 