CREATE TABLE `prayer_requests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` text NOT NULL,
	`is_answered` int NOT NULL DEFAULT 0,
	`is_anonymous` int NOT NULL DEFAULT 0,
	`prayer_count` int NOT NULL DEFAULT 0,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `prayer_requests_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `prayer_responses` (
	`id` int AUTO_INCREMENT NOT NULL,
	`prayer_request_id` int NOT NULL,
	`user_id` int NOT NULL,
	`prayer` text NOT NULL,
	`is_anonymous` int NOT NULL DEFAULT 0,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `prayer_responses_id` PRIMARY KEY(`id`)
);
