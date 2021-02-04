/*
find the smallest distance between 2 numbers in array
 [2,5,3,7,2,3,6,8,6] => 2
 */
let arr = [2,5,3,7,2,2,3,6,8,6]
let sort = []
const num = arr.forEach((item,i) =>{
    let dist 
    for (let j = i+1; j < arr.length; j++) {
        if(arr[j]==item){
            dist = j-i
            continue
        }     
    }
    sort.push(dist) 
    sort.sort()
})
num
console.log(sort[0])