-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "realtor_data" (
    "distance_tj" int   NOT NULL,
    "distance_w" int   NOT NULL,
    "price" int   NOT NULL,
    "bed" int   NOT NULL,
    "bath" int   NOT NULL,
    "acre_lot" int   NOT NULL,
    "full_address" VARCHAR(MAX)   NOT NULL,
    "street" VARCHAR(250)   NOT NULL,
    "city" VARCHAR(100)   NOT NULL,
    "zip_code" VARCHAR(50)   NOT NULL,
    "house_size" int   NOT NULL
);

CREATE TABLE "tj-locations" (
    "name" VARCHAR(150)   NOT NULL,
    "latitude" int   NOT NULL,
    "longitutde" int   NOT NULL,
    "street" VARCHAR(250)   NOT NULL,
    "city" VARCHAR(100)   NOT NULL,
    "state" VARCHAR(5)   NOT NULL,
    "zip" CHAR(5)   NOT NULL
);

CREATE TABLE "walmart-locations" (
    "name" VARCHAR(150)   NOT NULL,
    "street_address" VARCHAR(250)   NOT NULL,
    "city" VARCHAR(100)   NOT NULL,
    "state" VARCHAR(5)   NOT NULL,
    "zip" CHAR(5)   NOT NULL,
    "latitude" int   NOT NULL,
    "longitutde" int   NOT NULL
);

