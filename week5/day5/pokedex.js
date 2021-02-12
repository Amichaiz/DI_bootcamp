const func = async function () {
    spin.style.display = "block"
    try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${rnd}`)
    const data = await response.json()
    spin.style.display = 'none'
    html(data)  
    }catch{
        document.getElementById("name").innerHTML = "problem with pokeman"
        spin.style.display = 'none'
    }
}
function html(data) {
    document.getElementById("img").setAttribute("src",data.sprites.front_default)
    document.getElementById("name").innerHTML = `${data.name}`
    document.getElementById("number").innerHTML = `Pokemon n° ${data.id}`
    document.getElementById("height").innerHTML = `Height: ${data.height}cm`
    document.getElementById("weight").innerHTML = `Weight: ${data.weight}gr`
    document.getElementById("type").innerHTML = `Type: ${data.types[0].type.name}`        
}
const random = async function () {
    rnd = Math.floor(Math.random() * 897+1)
    func()
}
const rndu = async function () {
    rnd++
    func()
}
const rndd = async function () {
    rnd--
    func()
}
let rnd = 0
let spin = document.getElementById('spinner')
let but = document.getElementById("but")
but.addEventListener("click", random)

let boxr = document.getElementById("boxr")
boxr.addEventListener("click", rndu)

let boxl = document.getElementById("boxl")
boxl.addEventListener("click", rndd)
