
//exercise 1
const fs = require("fs");
fs.readFile('./xp.txt', (err,data) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
})
/*
//exercise 2

const data='writing to a file'
fs.writeFile('./exer2.txt', data, err => {
    if(err){
        console.log(err);
    }
})

//exercise3

let str = 'more bla bla bla ';
fs.appendFile('./exer2.txt', str, err => {
    if(err){
        console.log(err);
    }
})

fs.unlink('./exer2.txt', err => {
    if(err){
        console.log(err);
    }
})*/