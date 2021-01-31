/*Exercise 1
Using an array method and ternary operator, check if at least one element in the array above is a dessert.
Using an array method, check if all the elements in the array above are starters.
Using an array method, check if there is at least one element in the array above that is a main course. If not, then add a main course of your choice to the array.
Using this array : let vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]

Using an array method, add a key “vegetarian” (a boolean) to the menu array. The value of the key should be true if the name of the course contains at least one element from the vegetarian array.

let menu = [
    {
      type : "starter",
      name : "Houmous with Pita"
    },
    {
      type : "starter",
      name : "Vegetable Soup with Houmous peas"
    },
    {
      type : "dessert",
      name : "Chocolate Cake"
    }
  ]
  for (let i = 0; i < menu.length; i++) { 
    if(menu[i].type.includes("dessert")){
    console.log("includes")
    }
   }
/*
Exercise 2
Write a JavaScript function that takes 2 parameters: a string and a number.
The function should chop the string into chunks of your chosen length (the second parameter), and the outcome should be represented in an array.
console.log(string_chop('w3resource',2)); 
["w3", "re", "so", "ur", "ce"] 
newarr = []
function breaking(str, num){
    for (let i = 0; i < str.length; i+=num) {
        newarr.push(str.substring(i,i+num))       
    } 
    return newarr
}
console.log(breaking('w3resource',2))


/*Exercise 3
Write a JavaScript function to find a word within a string.
console.log(search_word('The quick brown fox', 'fox')); 
"'fox' was found 1 times." */
console.log(search_word('The quick brown fox', 'fox'))
function search_word(str,find){
    let count = 0
    arr = str.split(" ")
    arr.forEach(element => {
        if(element == find){
            count++;
        }
    });
    return (`"${find}" was found ${count}`)
}