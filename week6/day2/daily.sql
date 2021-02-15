
Q1. What will be the OUTPUT of the following statement?
SELECT COUNT(*) 
FROM FirstTab a WHERE a.Id NOT IN ( SELECT Id FROM SecondTab WHERE Id IS NULL )
//0

Q2. What will be the OUTPUT of the following statement?
SELECT COUNT(*) 
FROM FirstTab a WHERE a.Id NOT IN ( SELECT Id FROM SecondTab WHERE Id = 5 )
//2

Q3. What will be the OUTPUT of the following statement?
SELECT COUNT(*) 
FROM FirstTab a WHERE a.Id NOT IN ( SELECT Id FROM SecondTab )
//0

Q4. What will be the OUTPUT of the following statement?
SELECT COUNT(*) 
FROM FirstTab a WHERE a.Id NOT IN ( SELECT Id FROM SecondTab WHERE Id IS NOT NULL )
//2