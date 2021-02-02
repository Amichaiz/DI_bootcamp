/*Exercise 1 : Array To Object
Using this array const letters = ['x', 'y', 'z', 'z'];
1. Use a for loop to get this output { x: 1, y: 1, z: 2 };
2. Use the reduce() method to get this output { x: 1, y: 1, z: 2 };
const letters = ['x', 'y', 'z', 'z'];
    letters.forEach((e,i) =>{
        let count=1
        for (let j = i+1; j < letters.length; j++) {
            if(e==letters[j]){
            count++ 
            letters.splice(j,1)
            }
        }  
        console.log(letters[i]+" "+count) 
    })

    let small = letters.reduce((arr, combine) => {
        return arr + " " + combine;
      });

/*
Exercise 2 : Let’s Play!
Using this array:

const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];/*
Create an array using map() that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
Filter the gameInfo array to only include users who are on the red team.
const users = gameInfo.map((value => value.username + "!"))
console.log(users)
const redteam = gameInfo.filter(element => element.team == "red");
console.log(redteam)
/*Exercise 3: Dog Competition
Using the following data
*/
const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];
/*
Hint: Dog Years -> the dog’s age is the age multiplied by 7.
*/

/*
Use a loop to find the sum of all the dog’s ages in dog years.
Using the map() method, find the sum of all the dog’s ages in dog years.
Using the filter() method, find the sum of all the dog’s ages in dog years.
Using the reduce method, find the sum of all the dog’s ages in dog years.


Exercise 4 : Email
Clean up this email to have no whitespaces. Do it in a single line (return a new string).

const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '
console.log(userEmail3.trim())
/*
Exercise 5: Employees #3
Using this array
/*/
let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
/*Change the structure of the users array. The user’s full name should be the key and the user’s role should be the value.
Example: { 'Bradley Bouley': 'Full Stack Resident' }
Hint: set an empty object as starting point*/
let obj = {}
let name1 = users.map((value => value.firstName + " " + value.lastName))
let role = users.map((value => value.role))
for (let i = 0; i < name1.length; i++) {
    obj[name1[i]] = role[i]
}
console.log(obj)
    

