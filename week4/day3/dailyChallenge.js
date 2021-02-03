/*
Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

Using methods learned in class, turn the users object into an array:
Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
FYI : The number is their ID number
Modify the outcome of instruction 1, to multiply the user’s ID by 2
Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]*/

const users = { 
    user1: 18273,
    user2: 92833,
    user3: 90315
    }
const arr = Object.keys(users).map((key) => [String(key), users[key]*2]);
const arr1 = Object.entries(users);
console.log(arr1) 