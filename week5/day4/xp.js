/*
Exercise 1: Conversion
Convert the below promise into Async Await:

fetch("https://swapi.dev/api/starships/9/")
.then(response => response.json())
.then(console.log);*/

const func = async function(){
    const response = await fetch("https://swapi.dev/api/starships/9/")
    const data = await response.json()
    console.log(data)
}
func()

/*
Exercise 2: Analyse
Using this code:
Analyse it before running it. What will be the output ?
*/
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}
async function asyncCall() {
    console.log('calling');//1 calling
    let result = await resolveAfter2Seconds();
    console.log(result);//after 2 seconds resolved
}
asyncCall();//call the function


