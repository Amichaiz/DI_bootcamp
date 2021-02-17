Write a query to display the names (first_name, last_name) using an alias name “First Name”, “Last Name” from employee table.
select first_name as "First Name", last_name as "Last Name" from  employees
Write a query to get a unique department ID from employee table.
select department_id from  employees
group by department_id;
Write a query to get the details of all employees from the employee table in descending order by their first name.
select * from  employees
order by first_name desc;
Write a query to get the names (first_name, last_name), salary and 15% of salary as PF (ie. alias) for all the employees.
select first_name, last_name, salary,salary*0.15 as pf from  employees
Write a query to get the employee ID, names (first_name, last_name) and salary in ascending order according to their salary.
select employee_id, first_name, last_name, salary from  employees
order by salary
Write a query to get the total salaries paid to the employees.
select sum(salary) from  employees
Write a query to get the maximum and minimum salary paid to the employees.
select max(salary),min(salary) from  employees
Write a query to get the average salary paid to the employees.
select avg(salary) from  employees
Write a query to get the number of employees working in the company.
select count(salary) from  employees
Write a query to get all the first name from the employees table in upper case.
select UPPER(first_name) from  employees
Write a query to get the first three characters of the first name for all the employees in the employees table.
select left(first_name,3) from  employees
Write a query to get the full name of all the employees from employees table. You have to include the first name and last name
select first_name ||' '|| last_name as "full name" from  employees
Write a query to get the first name, last name and the length of the full name of all the employees from employees table.
select first_name ||' '|| last_name as "full name",length(first_name ||''|| last_name) from  employees
Write a query to check whether the first_name column of the employees table containing any number.
thats a type thing... when you create the table tried to serch got an error that string isnt a number
Write a query to select first ten records from a table.
select first_name from  employees
fetch first 10 row only;


////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
Restricting And Sorting


Write a query to display the name, including first_name and last_name and salary for all employees whose salary is between $10,000 and $15,000.
select first_name||' '||last_name, salary from  employees
where salary>10000 and salary>15000;
Write a query to display the name, including first_name and last_name and hire date for all employees who were hired in 1987.
select first_name||' '||last_name, hire_date from  employees
where EXTRACT(YEAR FROM hire_date)= 1987;
Write a query to get the first name of the employees who holds the letter ‘c’ and ‘e’ in the first name.
select first_name||' '||last_name from  employees
where first_name LIKE '%' || 'e' || '%' and first_name LIKE '%' || 'a' || '%';
Write a query to display the last name, job, and salary for all the employees who don’t work as a Programmer or a Shipping Clerk, and not drawing the salary $4,500, $10,000, or $15,000.
select last_name,job_id,salary from  employees
where (job_id !=5 and job_id !=6)and(salary!=4500 or salary!=10000 or salary!=15000);
Write a query to display the last names of employees whose last name contain exactly six characters.
select last_name from  employees
where length(last_name)=6;
Write a query to display the last name of employees having ‘e’ as the third character.
select last_name from  employees
where last_name like '__e%';
Write a query to display the jobs/designations available in the employees table.
dont understand
Write a query to select all information of employees whose last name is either ‘JONES’ or ‘BLAKE’ or ‘SCOTT’ or ‘KING’ or ‘FORD’.
select last_name from  employees
where last_name='Jones' or last_name='Blake' or last_name='Scott' or last_name='King' or last_name='Ford';


/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
Update Statement


Write a SQL statement to change the email and commission_pct column of the employees table with ‘not available’ and 0.10 for all employees for those employees whose department_id is 110.
there is no commission_pct... and department_id ranges up to 10...
update employees 
set email ='not available'  
where department_id=110;
Write a SQL statement to change the email column of the employees table with ‘available’ for those employees who belongs to the ‘Accounting’ department.
update employees 
set email ='available'  
where department_id=11;
Write a SQL statement to change the salary of an employee to 8000 whose ID is 105, if the existing salary is less than 5000.
update employees 
set salary =8000  
where employee_id=105 and salary<5000;
Write a SQL statement to increase the salary of employees under the department 40, 90 and 110 according to the company rules that, the salary will be increased by 25% of the department 40, 15% for department 90 and 10% of the department 110 and the rest of the department will remain same.
no such department as 40 90 110 kinda lost hear