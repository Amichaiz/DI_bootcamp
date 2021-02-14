CREATE TABLE students (
	id serial PRIMARY KEY,
	lname VARCHAR ( 50 ) NOT NULL,
	fname VARCHAR ( 50 ) NOT NULL,
	birth_date date
);
insert into students (fname, lname, birth_date) values ('Marc', 'Benichou','02/11/1998'),
('Yoan', 'Cohen','03/12/2010'),
('Lea', 'Benichou','27/07/1987'),
('Amelia', 'Dux','07/04/1996'),
('David', 'Grez','14/06/2003'),
('Omer', 'Simpson','03/10/1980');
select * from students;
select fname, lname from students;
select fname, lname from students where id=2;
select fname, lname from students where fname='Marc' and lname ='Benichou';
select fname, lname from students where fname='Marc' or lname ='Benichou';
select fname, lname from students where fname like '%a%';
select fname, lname from students where fname like '%a';
select fname, lname from students where fname like 'a%';
select fname, lname from students where fname like '%a_';
select fname, lname from students where id =3 or id = 1;
select fname, lname, birth_date from students where birth_date>'1/01/2000';
