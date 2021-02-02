
/*
/*
let arr = [0,1,1,2,3,5,8];
const filterArr = arr.filter( item => {
  return item > 3;
});
console.log(filterArr)‏

‏
let arr = [5,0,9,1,7,4,2,6,3,8];
arr.forEach((element,i,newarr)=>{
    let big = 0;
    for (let j = 0; j < arr.length; j++) {
        console.log(arr[j])
        if(arr[j]>big){
            big=arr[j]
        }     
    }
    arr.splice(arr.indexOf(big),1)
    newarr[i]=big
})
console.log(arr)

/* Exercise reverse
*  reverse each word in a given String
*  For example:
*  Given this 'word in a given String'
*  result 'drow ni a nevig gnirtS'
*  Do not use Array method

let str = 'word in a given String'
let arr = str.split(" ")
arr.forEach((element,i,redarr)=>{
    let newstr = ""
    for (let j = element.length; j > 0; j--) {
        newstr += element.charAt(j-1)   
    }
    redarr[i]=newstr
})
console.log(arr.join(" "))

let arr = [1,2,3,4]
const newarr = arr.map((item) => item*2)
console.log(newarr)

let arr = [0, 1, 1, 2, 3, 5, 8]
const big3 = ((arr) => {
    arr.forEach((element, i, arri) => {
        if (element > 3) {
            arri[i] = element
        }
    })
})
console.log(big3(arr))
*/
/*
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// get all names that start with Sa‏

function namestart (firstletters,dragons){
    const filterName = dragons.filter(item => {
        return item.includes('firstletters');
      });
      return(filterName);
}
console.log(namestart("Sh",dragons))
*/
/*
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const filterName = dragons.filter(item => {
    return item.includes('Sa');
});
console.log(filterName)‏
*/
/*
let arrsum = [2, 5, 10,100]
let sum = 0
arrsum.forEach(item => sum+= item)
console.log(sum)
*/

function adddigits(num) {
    num = num.toString()
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum += parseInt(num.charAt(i))
    }
    num = sum.toString()
    if(num>=10) {
        return adddigits(num)    
    }
    return parseInt(num)
}
console.log(adddigits(194))