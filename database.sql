
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (1000) NOT NULL,
    "phone" INT
);

CREATE TABLE "pet" ( 
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (80) UNIQUE NOT NULL,
	"species" VARCHAR (80) NOT NULL,
	"breed" VARCHAR (80),
	"weight" VARCHAR (60),
	"birthdate" DATE,
	"sex" VARCHAR (20),
	"image" VARCHAR (1000),
	"microchip" INT,
	"user_id" INT REFERENCES "user" NOT NULL
	);
	
    -- Test Values for user and pet tables respectively
INSERT INTO "user" ("username", "password" , "email" , "phone") 
VALUES ('JohnBearon' , 'Bearmatch1' , 'Bears@gmail.com' , '318-555-1050');

INSERT INTO "pet" ("name", "species" , "breed", "weight", "birthdate", "sex", "image", 
"microchip", "user_id") 
VALUES ('Beau', 'dog' , 'Great Pyrenees', '175lbs', '3/3/2014', 'male', 
'https://scontent.fmem1-2.fna.fbcdn.net/v/t31.0-8/20645088_1711365155541191_8241792617934011120_o.jpg?_nc_cat=110&ccb=2&_nc_sid=19026a&_nc_ohc=IH5MeRRktGMAX8NOw70&_nc_ht=scontent.fmem1-2.fna&oh=04ae1a38cdbc301f07cb2419eb78c561&oe=5FE21E81', 
'1000000000', 1);