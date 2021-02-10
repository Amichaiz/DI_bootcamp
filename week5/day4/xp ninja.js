/*
Exercise 1: Async Await & Try/Catch
Add a try catch block to the solution of the “Exercise XP Gold” in order to catch any errors.
In order to catch an error, modify one of the urls. When you catch the error, console.log ‘ooooooops’

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
];
const getData = async function () {
    try {
    const [users, posts, albums] = await Promise.all(
        urls.map(async url => {
            const response = await fetch(url)
            const data = await response.json()
            return (data)
        }
        ));
    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);
    }
    catch (err){
        console.log("oooooooooops");
    }
}
getData()

Exercise 2 : Analyse #4
Using this code:

let resolveAfter2Seconds = function () {
    console.log("starting slow promise");//2
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");//6
            console.log("slow promise is done");//5
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");//3
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");//7
            console.log("fast promise is done");//4
        }, 1000);
    });
};

//The Promise.all() method returns a single Promise that fulfills when all of the promises passed as an iterable have been fulfilled.

let concurrentPromise = function () {
    console.log('==CONCURRENT START with Promise.all==');//1
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
        console.log(messages[0]);
        console.log(messages[1]);
    });
}

setTimeout(concurrentPromise, 1000)

Exercise 3 : Analyse #5
Using this code:

let resolveAfter2Seconds = function () {
    console.log("starting slow promise")//2
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");//7
            console.log("slow promise is done");//6
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");//3
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");//5
            console.log("fast promise is done");//4
        }, 1000);
    });
};

let parallel = async function () {
    console.log('==PARALLEL with await Promise.all==');//1
    // Start 2 "jobs" in parallel and wait for both of them to complete
    await Promise.all([
        (async () => console.log(await resolveAfter2Seconds()))(),
        (async () => console.log(await resolveAfter1Second()))()
    ]);
}

setTimeout(parallel, 5000)

Exercise 4 : Analyse #6
Using this code
*/
let resolveAfter2Seconds = function () {
    console.log("starting slow promise");//2
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");//7
            console.log("slow promise is done");//6
        }, 2000);
    });
};
let resolveAfter1Second = function () {
    console.log("starting fast promise");//3
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");//5
            console.log("fast promise is done");//4
        }, 1000);
    });
};
// This function does not handle errors. See warning below!
let parallelPromise = function () {
    console.log('==PARALLEL with Promise.then==');//1
    resolveAfter2Seconds().then((message) => console.log(message));
    resolveAfter1Second().then((message) => console.log(message));
}

setTimeout(parallelPromise, 1000)