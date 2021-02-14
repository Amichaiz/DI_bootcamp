CREATE TABLE items (
	item_id serial PRIMARY KEY,
	itemname VARCHAR ( 50 ) UNIQUE NOT NULL,
	itemprice int
);
CREATE TABLE customers(
   name VARCHAR (255) NOT NULL,
	lname VARCHAR (255) NOT NULL
);
INSERT INTO items(itemname, itemprice)
VALUES ('Small Desk', 100);
INSERT INTO items(itemname, itemprice)
VALUES ('Large desk', 300);
INSERT INTO items(itemname, itemprice)
VALUES ('fan', 80);

INSERT INTO customers(name, lname)
VALUES ('Greg', 'Jones');
INSERT INTO customers(name, lname)
VALUES ('Sandra', 'Jones');
INSERT INTO customers(name, lname)
VALUES ('Scott', 'Scott');
INSERT INTO customers(name, lname)
VALUES ('Trevor', 'Green');
INSERT INTO customers(name, lname)
VALUES ('Melanie', 'Johnson');

select * from items;
select * from items where itemprice>80;
select * from items where itemprice<300;
select * from customers where lname='Smith';
select * from customers where lname='Jones';
select * from customers where name!='Scott';