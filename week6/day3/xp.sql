Exercise 1: Dvd Rental
Get a list of all film languages
select name from language
Get a list of all films joined with their languages – select only the film title, description, and language name. Try your query with different joins:
Get all films, even if they don’t have languages
Get all languages, even if there are no films in those languages. Which languages are these?
SELECT
    title,
	description,
	name lan
FROM
   film
INNER JOIN language
    ON language.language_id = film.language_id;
  SELECT
    title,
	description,
	name lan
FROM
   film
right JOIN language
    ON language.language_id = film.language_id;
      "Italian             "
"French              "
"German              "
"Mandarin            "
"Japanese            "
Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film  (
	id serial ,
	name VARCHAR ( 50 ) NOT NULL
);
insert into new_film (name) values ('amazon'),('agents'),('avengers');
Create a new table called customer_review, to contain data about film reviews that customers will make.
Think about the DELETE constraint: if a film is deleted, it’s review should be automatically deleted
It should have the following columns:
review_id – a primary key, non null, auto-increment
film_id – references the new_film table. The film that is being reviewed.
language_id – references the language table. What language the review is in.
title – the title of the review
score – the rating of the review (1-10)
review_text – the text of the review. No limit on the length.
last_update – when the review was last updated.
create table customer_review(
	review_id serial primary key,
	film_id int,
	language_id int,
	title VARCHAR ( 50 ) NOT NULL,
	score int,
	review_text VARCHAR  NOT NULL,
	last_update DATE DEFAULT CURRENT_DATE
	);

Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

Delete a film that has a review from the new_film table, what happens to the customer_review table?
update film
set language_id =2
where film_id<10;


