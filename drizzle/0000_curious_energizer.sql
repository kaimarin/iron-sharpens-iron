CREATE TABLE `checkins` (
	`id` text PRIMARY KEY NOT NULL,
	`event_id` text NOT NULL,
	`user_id` text NOT NULL,
	`started_at` text NOT NULL,
	`expires_at` text NOT NULL,
	`last_extended_at` text,
	FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `idx_checkins_event` ON `checkins` (`event_id`);--> statement-breakpoint
CREATE INDEX `idx_checkins_user` ON `checkins` (`user_id`);--> statement-breakpoint
CREATE TABLE `events` (
	`id` text PRIMARY KEY NOT NULL,
	`host_id` text NOT NULL,
	`title` text NOT NULL,
	`type` text NOT NULL,
	`starts_at` text NOT NULL,
	`duration_mins` integer NOT NULL,
	`location` text NOT NULL,
	`notes` text,
	`created_at` text NOT NULL,
	`updated_at` text,
	FOREIGN KEY (`host_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `idx_events_starts_at` ON `events` (`starts_at`);--> statement-breakpoint
CREATE TABLE `rsvps` (
	`id` text PRIMARY KEY NOT NULL,
	`event_id` text NOT NULL,
	`user_id` text NOT NULL,
	`status` text NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text,
	FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `u_rsvps_event_user` ON `rsvps` (`event_id`,`user_id`);--> statement-breakpoint
CREATE INDEX `idx_rsvps_event` ON `rsvps` (`event_id`);--> statement-breakpoint
CREATE INDEX `idx_rsvps_user` ON `rsvps` (`user_id`);--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`display_name` text NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text
);
