/*Exercise 1 : Analysing Map Method
Analyse this code, what will be the output ?

const check = [1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});
console.log(check)
//[2 ,4, 6]
/*
Exercise 2: Analysing Reduce Method
Analyse this code, what will be the output ?

const check = [[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
console.log(check)
//[1,2,0,1,2,3]

Exercise 3 : Analyze This Code
Using this code:

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})
/*
What is the value of i ?
hear undifined index

Exercise 4 : Nested Arrays
Using a method, take this array const array = [[1],[2],[3],[[[4]]],[[[5]]]] and modify it to look like this array: [1,2,3,[4],[5]].
Bonus if you can do it on one line
Using a method, take this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; and modify it to look like this array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
Turn the greeting array into a string: ‘Hello young grasshopper you are learning fast!’
Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]
*/
const array = [[1],[2],[3],[[[4]]],[[[5]]]] // [1,2,3,[4],[5]]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];// [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] // [3]
console.log(array.flat(2))
console.log(trapped.flat(50))
/*let str = greeting.reduce((arr, combine) => {
    return arr + " " + combine;
  });
  console.log(str)*/

