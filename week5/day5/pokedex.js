const func = async function () {
    try{
    let rnd = Math.floor(Math.random() * 897+1)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${rnd}`)
    const data = await response.json()
    console.log(data)
    html(data)  
    }catch{
        document.getElementById("name").innerHTML = "problem with pokeman"
    }
}
function html(data) {
    document.getElementById("name").innerHTML = `${data.name}`
    document.getElementById("number").innerHTML = `Pokemon n° ${data.id}`
    document.getElementById("height").innerHTML = `Height: ${data.height}cm`
    document.getElementById("weight").innerHTML = `Weight: ${data.weight}gr`
    document.getElementById("type").innerHTML = `Type ${data.types[0].type.name}`        
}
func()/*
let but = document.getElementById("but")
but.addEventListener("click", func)*/
