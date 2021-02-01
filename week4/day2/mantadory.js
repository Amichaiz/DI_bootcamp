/*Exercise 1 : Function With Two Parameters
Create a one line function that receives two parameters and returns the sum.
const sum = (a,b) => a+b
console.log(sum(3,4))

/*Exercise 2 : Closure
What does the last line return?*/
const addTo = x => y => x + y;
var addToTen = addTo(10);
console.log(addToTen(3));//guess 13


/*Exercise 3 : Currying
What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
console.log(curriedSum(30)(1))//guess 31


/*Exercise 4 : Currying
What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
console.log(add5(12))//guess 17


/*Exercise 5 : Composing
What does the last line return?*/
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
console.log(compose(add1, add5)(10))//guess 16