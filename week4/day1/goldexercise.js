/*Exercise 1
Write a JavaScript program to find the sum of all elements in an array.
Don’t use the sum method !
let arr = [2,3,4,5,6,7,8]
let sum =0
arr.forEach(element =>{
    sum += element
})
console.log(sum)
/*Exercise 2
Write a JavaScript program to remove duplicate items from an array.
let arr = [2,3,4,5,6,6,2,7,8]
arr.forEach((element,j) =>{
    for (let i = j+1; i < arr.length; i++) {
        if(element == arr[i])
        arr.splice(i,1)
    }       
    })
console.log(arr)

/*Exercise 3
Write a JavaScript function to remove. ‘null’, ‘0’, ‘“”’, ‘false’, ‘undefined’ and ‘NaN’ values from an array.
let array = [NaN, 0, 15, false, -22, '',undefined, 47, null]
array.forEach((element,i) =>{
    /*array = array.filter(function( element ) {
        return element !== undefined;
     })
    if(!Number.isInteger(element))
    array = array.splice(i,1)
    
})
console.log(array)*/


/*Exercise 4
Write a JavaScript function to concatenate a given string n times (default is 1).
Create the repeat function yourself:
console.log(repeat('Ha!',3));
"Ha!Ha!Ha!"
function repeat(str, num ){
    for (let i = 0; i < num; i++) {
        console.log(str)      
    }   
}
repeat('Ha!',3)*/