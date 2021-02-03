/* 1 : Print Full Name
Create a function called printFullName that accepts an object as a parameter.
For example : printFullName({first: 'Elie', last:'Schoppik'})
The function should return a string like the example below
printFullName({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik
Destructure this object DIRECTLY from the parameters
The output of the printFullName function should be the exact same as the displayStudentInfo function. (Exercise XP)

function displayStudentInfo(obj){
    const {first,last} = obj
    return('Your full name is '+first+" "+last)
    //obj.first   obj.last
}
let obj = {first: 'Elie', last:'Schoppik'}
console.log(displayStudentInfo(obj))

Exercise 2 : Counter Class
Analyse this code, what will be the output?*/
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);
//3