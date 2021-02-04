/*without creating a new array
function reverseArray(arr){return arr.reverse();}
*/

function reverseArray (arr){
    let arra = []
    for (let i = arr.length-1; i >= 0; i--) {
        arra.push(arr[i])      
    }
    return arra
}
console.log(reverseArray([1,2,3,4]))