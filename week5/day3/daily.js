const makeallcaps = (arr) => {
    return caps = new Promise(function (resolve, reject) {
        resolve(sortwords(arr.map(e => e.toUpperCase())))
        reject("Ooops something went wrong")
    })
}
const sortwords = (arr) => {
    return arr.sort()
}
makeallcaps(["zsd", "ergerg", "rger"])
    .then(result => console.log(result))
    .catch(errr => console.log(errr))


