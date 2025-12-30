CREATE TABLE `mentorRequests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`learnerId` int NOT NULL,
	`pathway` varchar(50) NOT NULL,
	`message` text,
	`status` enum('pending','accepted','declined') NOT NULL DEFAULT 'pending',
	`mentorId` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `mentorRequests_id` PRIMARY KEY(`id`)
);
