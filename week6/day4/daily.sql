create table items (
item_id serial PRIMARY KEY,
name VARCHAR ( 255 ) UNIQUE NOT NULL,
price integer NOT NULL
);
create table orders (
	item_id serial,
	amount integer NOT NULL,
    customer_id integer NOT NULL,
	FOREIGN KEY (item_id)
	REFERENCES items (item_id)
);
insert into items (name,price) values ('book',70),('bike',150),('light',13),('car',2500),('ballon',16);
insert into orders (item_id,amount,customer_id) values (1,16,1),(2,12,1),(3,2,1),(4,60,1),(5,3,2),(2,2,2),(3,7,3),(4,4,3),(5,2,3);

SELECT
   name, amount * price as total
FROM
    items
INNER JOIN orders
    ON orders.item_id = items.item_id;