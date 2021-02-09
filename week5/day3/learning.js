//daily exercise
/*
function rnd() {
    let rnd = Math.floor(Math.random() * 2)
    if (rnd == 0) {
        console.log("heads");
    }
    else console.log("tails");
}
rnd()*/
// EXERCISES were modified in robo

const testNum = (num) => {
    return big10 = new Promise(function (resolve, reject) {
        if (num > 10) {
            resolve("big then 10");
        }else {
            reject("smaller then 10");
        }
    })
}

testNum(4)
.then(result => console.log(result))
.catch(errr =>  console.log(errr))

testNum(15)
.then(result => console.log(result))
.catch(errr =>  console.log(errr))


