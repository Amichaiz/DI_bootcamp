/*Exercise 1 : Location
Using this code:

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

Exercise 2: Display Student Info
Create a function called displayStudentInfo that accepts an object as a parameter.
For example displayStudentInfo({first: 'Elie', last:'Schoppik'})
The function should return a string like the example below
displayStudentInfo({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik'
Destructure this object inside of the function.

function displayStudentInfo(obj){
    const {first,last} = obj
    return('Your full name is '+first+" "+last)
}
let obj = {first: 'Elie', last:'Schoppik'}
console.log(displayStudentInfo(obj))

Exercise 3 : Person Class
What’s the output?

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
//object

answer to 4 is 3

  // 3
  class Labrador extends Dog {
    constructor(size) {
      super(name);
      this.size = size;
    }
  };*/