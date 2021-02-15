SELECT
    a,
    fruit_a,
    b,
    fruit_b
FROM
    basket_a
INNER JOIN basket_b
    ON fruit_a = fruit_b;


SELECT
	c.customer_id,
	first_name,
	amount,
	payment_date
FROM
	customer c
INNER JOIN payment p 
    ON p.customer_id = c.customer_id
ORDER BY 
   payment_date DESC;

   SELECT
	customer_id,
	SUM (amount)
FROM
	payment
GROUP BY
	customer_id;

    SELECT
	column1,
	aggregate_function (column2)
FROM
	table_name
GROUP BY
	column1
HAVING
	condition;

    SELECT
	customer_id,
	SUM (amount)
FROM
	payment
GROUP BY
	customer_id
HAVING
	SUM (amount) > 200;