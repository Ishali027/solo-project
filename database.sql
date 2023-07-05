
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "customer_name" VARCHAR (1000) NOT NULL
);

CREATE TABLE "meat" (
	"id" SERIAL PRIMARY KEY,
	"type" VARCHAR (80) NOT NULL, 
	"price" NUMERIC (20, 2) NOT NULL,
	"description" TEXT NOT NULL,
	"image_url" VARCHAR (10000)
);

CREATE TABLE "orders" (
	"id" SERIAL PRIMARY KEY,
	"total" NUMERIC (20, 2) NOT NULL,
	"user_id" INT REFERENCES "user" NOT NULL,
	"completion_status" BOOLEAN DEFAULT FALSE,
	"date" TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE "line_items" (
	"id" SERIAL PRIMARY KEY,
	"order_id" INT REFERENCES "orders" ON DELETE CASCADE,
	"meat_id" INT REFERENCES "meat",
	"quantity" INT NOT NULL
);

INSERT INTO "meat" ("type", "price", "description", "image_url")
VALUES ('goat', 5.99, 'delicious halal goat meat, also known as hilib ari. Price is sold at a per pound basis', 'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00203065000002/0d941021c0d7a17997bd4a087bf3fc36_large.png&width=256&type=webp&quality=80'), ('phill-steak', 5.49, 'yummy beef steak cut up into thin slices that usually is served on top of a plate of rice' ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdTxd4Q_UVsQuz18z5SnhYVWXjBQmzy933YfZFOt7gP3UqJNIYlIRdRyGu09IS5uc56ks&usqp=CAU'), ('steak', 5.99, 'somali style steak where the steak is usually bigger but much thinner then western style steaks', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzfwcJdXu_dHU0yUaa1QNgJNlWVRY_HWh7DA&usqp=CAU'), ('suqaar', 5.49, 'pieces of beef cut into cubes that are perfect for stews and pasta sauses and all sorts of other meals', 'data:image/jpeg;base64,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'), ('shishiid', 5.49, 'known as ground beef in english mostly used to make the sauce for pastas', 'data:image/jpeg;base64,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bcMosKaA6UN2b15teTGMxuIZQa1FGAG5FuBwWvvffmaMqzWnSUolRQCSbN0vubee8llJxebXvs72iY6kYqwBITUx2P6rdeZLtUqouuqiMt7DQTcXturee42PlKvm1NVqpiLowYkPboeQSB0t1k3lFdSAi1mvc32Lg7iwAHA55kWJx2d+XcYw3ZxnrnF0cQjgnURYa1AH6eCduksS1gzlgCzXFiPhOw3IPHt0nLk+Q1dZcoiC/Kixax5+ct+Dy7gBb+g5mWWfPTl2bsMJxEKMsarY1nL2/LuFHpbqJO5fhFQeFQNgJMYPI2bnwj1G8lqOS0xzdvnb7ScdWdefs+Rz9oKjTnagPQfSTNLA013CD7/edAAm803+ue7FZxCOdtDfQziTA1SfCrD5bfvLnEn8E/qPyVXcJkdQ7u2n0G5/qTOHwFNOF+Z3M6Yl8deOPStztYtEzE0VIiICIiAiIgIiIFa7RdlUrk1afgqmxJ/K1vMdDxvKRUR6bmnUGllNiPsfb1n1ycObZXTxCFHUX6NYXU+YM59uiZe42w28eq+ao15sNBH2ZQfcXkhmGS1MOTfdL7N79D5Gcapc7TiuNl9umWX3EdW7M4Vjfu9J80Zl+xtPa9l6FgNVWw/9hP3ktTwzE6VBJ8gLn9pK4PIa55AUf6j/ABLY+d6W/PcftV6PZqmt7VKliCCpIIseeRPVPsrhx+QG3mLy8UuzX6qn0H9ySwuUUk303Pm2/wC3E1mnZe1MvlW/fKjYPsnTb4KQ+QAHzMnMD2TI+IqvsLmWy0TbHRj9sL8jOozDZHSXfdvfj6SRp0lXhQPYWnqJtMMZ1GVyt7ZiYiWVZmIiAiIgIiICIiAiIgIiICIiAiIgIiIHivRV1KsAVOxB6yJpdmcOragpt+kkkSZiVuMvcTLZ01UMOifCoHsLTbES3EgzMREIZgzEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/Z'), 
('t-bone', 7.15, 'beef piece of steak that we usually sell to restaurants, very delicious', 'data:image/jpeg;base64,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h0S7I8S2RI0iLL6tgeDUKP8A46TWnd0AuPdxufdb+VXikuOfKj4hxNDh7oEsdoSQGHXaSYWwzAVQIbRcd5cWgDpEldfCK3CGU+RPxDmKfCKzgQcrOs549LXW5h+AARne50bABv0v81eIpisKzltLDQw7WCGtDR0H3KzIpVmUzsREQEREBERAREQEREBERBynGMC4Uq0mQfMOzf8AUrnMFhXOa5zb5SJA17j0XecZH8pxP6XfMFcp4NdGfs0fVY3rG3p4M9oxzKkexxvaG3M9dY5q3pMAoA/0z7q94zw6n+DVcQ1pyO84AEGNVT8E4e+rRY0DK3KJceusDdZxX9N58qt6b9REqPwtVmo5xFmA5Z6m30X07BN8g6iT6qs4Z4ao0QIbJG53POFdtW1KzX24fL8iuW34gClSoWjjFKhEEooRAKKUQEREBERAREQEREBERAREQEREBERBTeIcVkouGUuJBAAEnTVc/wCG+HVaQdnb8UFsEGByOlxK6/FYZtRpa7QryaQFlnaJ26MeWK046/tocQwrq1F9IGC5sSdrj/Eq0oUQ1oaBAAAA7KadOFkVqxpla2+o9PSKEVlEqERAREQEREEooRBKKEQSihEEooRBKKEQSihEEooRBKKEQSihEBQQpRAhFKgoCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIiEqCpUFEiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIiEqCiIkREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/2Q==');

INSERT INTO "meat" ("type", "price", "description", "image_url")
VALUES ('chicken suqaar', 5.99, 'chicken cubes usually made to be eaten as side dish, best with rice or pasta', 'data:image/jpeg;base64,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'), ('chicken kutuleeti', 5.99, 'also known as chicken strips, usually breaded and battered and then fried', 'data:image/jpeg;base64,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');




