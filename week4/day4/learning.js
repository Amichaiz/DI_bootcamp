/*let b = 3, d = b, u = b;
const tree = ++d * d*b * b++ +
 + --d+ + +b-- +
 + +d*b+ +
 u

 console.log(tree)

 let ar = [2, 4, 4, 1]
 function numCandels(ar) {
    let max = Math.max(...ar)
    const big = ar.filter(e => e==max)
    return(big.length)  
 }
 console.log(numCandels(ar))

 function intersection(arr) {
    arr0 = arr[0].split(",")
    arr1 = arr[1].split(",")
    return arr0.filter(e => arr1.includes(e))     
 }
 let arr =  ["1,2,5,6,7", "2,5,7,8,15"]
 console.log(intersection(arr))*/
/*
 const users = {
    user1: {
      age: 44,
      name: 'picard',
    },
    user2: {
      age: 12,
      name: 'sisko',
    },
    user3: {
      age: 109,
      name: 'janeway',
    },
  }
  /*
function older30(obj) {
    var arr = Object.keys(obj).map((key) => [String(key), obj[key]]);
    return arr.filter(e => e[1].age>30)
}
console.log(older30(users))

function older3(obj) {
    return Object.entries(obj).filter(e => e[1].age>30)
}
console.log(older3(users))

const usersKeys = Object.keys(users);
const adults = usersKeys
  .filter(key => users[key].age > 30)
  .map(id => ({ id, ...users[id] }));
console.log(adults)*/


