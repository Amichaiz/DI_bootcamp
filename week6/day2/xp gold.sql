SELECT count(rating) as noumber,rating from film
group by rating;
SELECT title, rating from film
where rating='PG' or rating='G';
SELECT title, rating,length,rental_rate from film
where (rating='PG' or rating='G') and length<120 and rental_rate<4 ;
update customer
set first_name='Amichai',
 last_name='Berger'
where customer_id=524;