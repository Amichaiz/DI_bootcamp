/*
Exercise 1: Analyse #2
Using this code:

let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};
let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};
let sequentialStart = async function () {
    console.log('==SEQUENTIAL START==');
    const slow = await resolveAfter2Seconds();
    console.log(slow);
    const fast = await resolveAfter1Second();
    console.log(fast);
}

sequentialStart()
/*
==SEQUENTIAL START==
starting slow promise
slow promise is done
slow
starting fast promis
fast promise is done
fast

Exercise 2: Analyse #3
Using this code:

let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};
let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};
let concurrentStart = async function () {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds();
    const fast = resolveAfter1Second();
    console.log(await slow);
    console.log(await fast);
}

setTimeout(concurrentStart, 4000)
/*
==CONCURRENT START with await==
starting slow promise
starting fast promis
fast promise is done
slow promise is done
slow
fast

Exercise 3 : Modify Fetch With Async/Await
Using this code:
*/
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
];
const getData = async function () {
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
getData()
