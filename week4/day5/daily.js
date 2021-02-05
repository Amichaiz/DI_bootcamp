/*without creating a new array
function reverseArray(arr){return arr.reverse();}
*/
/*
function reverseArray (arr){
    let arra = []
    for (let i = arr.length-1; i >= 0; i--) {
        arra.push(arr[i])      
    }
    return arra
}*/

function reverseArray (arr){
    let orlength = arr.length 
    for (let i = orlength-1; i >= 0; i--) {
        arr.push(arr[i])      
    }
    return arr.slice(orlength)
}
console.log(reverseArray([1,2,3,4]))