
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
CREATE TABLE "meat" (
	"id" SERIAL PRIMARY KEY,
	"type" VARCHAR (80) NOT NULL, 
	"price" NUMERIC (20, 2) NOT NULL,
	"description" TEXT NOT NULL,
	"image_url" VARCHAR (3000)
);
CREATE TABLE "orders" (
	"id" SERIAL PRIMARY KEY,
	"customer_name" VARCHAR (1000) NOT NULL,
	"sum_total" NUMERIC (20, 2) NOT NULL,
	"user_id" INT REFERENCES "user" NOT NULL,
	"completion_status" BOOLEAN DEFAULT FALSE,
	"date" TIMESTAMP DEFAULT NOW() NOT NULL
);