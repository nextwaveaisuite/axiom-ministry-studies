CREATE TABLE `prayer_partnerships` (
	`id` int AUTO_INCREMENT NOT NULL,
	`requester_id` int NOT NULL,
	`partner_id` int NOT NULL,
	`status` enum('pending','accepted','declined','ended') NOT NULL DEFAULT 'pending',
	`message` text,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `prayer_partnerships_id` PRIMARY KEY(`id`)
);
