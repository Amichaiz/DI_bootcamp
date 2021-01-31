/*// part1
let colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]
colors.forEach((element,i) => {
    console.log(`#${i+1} choice is ${element}`)
});*/

/*//part2
let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let ordinal = ["th","st","nd","rd"]

color.forEach((element,i) => {
    let identefy = (i == 0 ? ordinal[i+1]: i == 1 ? ordinal[i+1]: i == 2 ? ordinal[i+1]: ordinal[0])
    console.log(`${i+1}${identefy} ${element}`)
});*/

//part3
let bankAmount = 0
const vat = 0.17
let details = ["+200", "-100", "+146", "+167", "-2900"]
details.forEach(element => {
    bankAmount+=parseInt(element)*(vat+1)
});
console.log(bankAmount)
