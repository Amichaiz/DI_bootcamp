Write a query to find the number of jobs available in the employees table.
wtf
Write a query to get the number of employees working in each post.
select job_id, count(job_id) from employees
group by job_id
Write a query to get the difference between the highest and lowest salaries.
select max(salary)-min(salary) from employees
Write a query to find the manager ID and the salary of the lowest-paid employee under that manager.
select min(salary),manager_id from employees
group by manager_id
Write a query to get the average salary for each post excluding programmer.
select avg(salary),manager_id from employees
where department_id!=6
group by manager_id;
Write a query to get the job ID and maximum salary of each post for maximum salary is at or above $4000.
select max(salary),manager_id from employees
where salary>4000
group by manager_id;
Write a query to get the average salary for all departments that employ more than 10 employees.
select avg(salary),manager_id from employees
group by manager_id
having count(manager_id)>10;