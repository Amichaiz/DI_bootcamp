select * from items
ORDER BY
    itemprice asc ;

select * from items
where itemprice>80
ORDER BY
    itemprice desc;

select name, lname from customers
ORDER BY
    name asc
fetch first 3 row only;

select lname from customers
ORDER BY
    lname desc;

ALTER TABLE customers
ADD COLUMN id serial PRIMARY KEY;

ALTER TABLE items
add PRIMARY KEY(item_id);

create table purchases(
	customer_id integer,
	item_id integer,
	foreign key (customer_id) REFERENCES customers(id),
	foreign key (item_id) references items(item_id)
);

insert into purchases (customer_id) values (2);
it works but the other on becomes null

insert into purchases (customer_id, item_id) values (2,2),(1, 2),(2, 1),(5, 3),(4, 1);
select * from purchases

SELECT
    name,id,customer_id,item_id,lname
FROM
    purchases
INNER JOIN customers
    ON customer_id = id;

SELECT
    name,id,customer_id,item_id,lname
FROM
    purchases
INNER JOIN customers
    ON customer_id = id
    where id = 4;

SELECT
    name,id,customer_id,item_id,lname
FROM
    purchases
INNER JOIN customers
    ON customer_id = id
    where item_id != 3;
insert into purchases (customer_id, item_id) values (3,3)

SELECT
    name,lname,itemname
FROM
    purchases
INNER JOIN customers
    ON customer_id = id
	INNER JOIN items
    ON purchases.item_id = items.item_id

    ////////////////////////////////////////////////////////////////

    select * from customer
    select first_name ||' '|| last_name as full_name from customer
    select create_date  from customer group by create_date
    select * from customer
ORDER BY
    first_name desc 
    select film_id, title, description, release_year, rental_rate from film
ORDER BY
rental_rate;
select address, district, phone from address
where district='Texas'
select * from film
where film_id='15' or film_id='150';
select * from film
where title='Avenger';
select * from film
where title like 'Ai%';
select * from film
order by 
rental_rate
FETCH FIRST 10 ROW ONLY;
select * from film
order by 
rental_rate
FETCH FIRST 10 ROW ONLY;
select * from film
order by 
rental_rate
 limit 10 offset 10;
 select * from film
order by 
rental_rate
FETCH FIRST 10 ROW ONLY offset 10;
SELECT
    customer.customer_id, amount, payment_date
FROM
    customer
INNER JOIN payment
    ON customer.customer_id = payment.customer_id
    SELECT 
    country,city
FROM
    city
INNER JOIN country
    ON country.country_id = city.country_id
