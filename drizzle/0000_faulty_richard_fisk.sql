CREATE TABLE `borrowers` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`residence_type` text NOT NULL,
	`monthly_income` integer NOT NULL,
	`previous_loan` text NOT NULL,
	`marital_status` text NOT NULL,
	`number_of_dependencies` integer NOT NULL,
	`city` text NOT NULL,
	`state` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `borrowers_email_unique` ON `borrowers` (`email`);