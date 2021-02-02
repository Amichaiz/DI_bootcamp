/*/*------1------*//*
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// ['bread', "carrot", "potato", 'chicken', "apple", "orange"];
/*-----2------*//*
const country = "USA";
console.log([...country]);
//["u","s","a"]

/*-----Bonus------*//*
let newArray = [...[,,]];
console.log(newArray);
//[[,,]]
*/
/*Exercise 2 : Employees
Using this array

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
{ firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
{ firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
{ firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
{ firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
{ firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
{ firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];

users.map((value) => console.log(value.firstName + " hello"))
const fullstack = users.filter(element => element.role == "Full Stack Resident")
fullstack.forEach((e) => console.log(e.firstName + " congrats"))

Exercise 3 : Star Wars
Using this array let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
1. Use the reduce() method to combine all of these into a single string.

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let str = epic.reduce((arr, combine) => {
    return arr + " " + combine;
  });
  
  console.log(str)

Exercise 4 : Employees #2
Using this object*/

let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
{name: "Liam", course: "Computer Science", isPassed: false}, 
{name: "Jenner", course: "Information Technology", isPassed: true}, 
{name: "Marco", course: "Robotics", isPassed: true}, 
{name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
{name: "Jamie", course: "Big Data", isPassed: false}];

let passed = student.filter((element) => element.isPassed == true)
passed.forEach((e) => console.log(e.name+" congrats"))
  
