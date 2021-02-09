/*
Exercise 1 : Comparison
Write a function compareToTen that takes a number as an argument.
The function should return a Promise that tests if the value of the argument is less than or greater than 10.
*/
const testNum = (num) => {
    return big10 = new Promise(function (resolve, reject) {
        if (num > 10) {
            resolve("big then 10");
        }else if (num < 10) {
            resolve("smaller then 10");
        }else {
            reject("somthing went wrong");
        }
    })
}

testNum(4)
.then(result => console.log(result))
.catch(errr =>  console.log(errr))

testNum(15)
.then(result => console.log(result))
.catch(errr =>  console.log(errr))

testNum("tr")
.then(result => console.log(result))
.catch(errr =>  console.log(errr))

/*
Exercise 2 : Promises
Create a promise that resolves in 4 seconds and returns a “success” string.
Run the above promise and make it console.log “success”.
Read about Promise.resolve() and Promise.reject(). How can you make the above promise shorter with Promise.resolve() and console.log “success” ?
Catch the error and console.log ‘Ooops something went wrong’
*/
//setTimeout(() => {
const sec4 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("success")
      }, 4000);  
      reject ("Ooops something went wrong")
    //  resolve("success")
})
.then(result => console.log(result))
.catch(errr =>  console.log(errr))//a little bit confused about the instructiouns but if we erase the reject it will take 4 seconds
//},4000)

/*
Exercise 3 : Resolve & Reject
Use Promise.resolve(value) to create a promise that will resolve with the value 3.
Use Promise.reject(error) to create a promise that will reject with the string “Boo!”
*/
const alwaystrue = new Promise(function (resolve, reject) {
    resolve(3)
    reject("boo")
})
.then(result => console.log(result))
.catch(errr =>  console.log(errr))
