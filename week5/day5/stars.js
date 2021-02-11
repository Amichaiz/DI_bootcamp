
const func = async function () {
    
    let rnd = Math.floor(Math.random() * 80+1)
    const response = await fetch(`https://swapi.dev/api/people/${rnd}`)
    const data = await response.json()
    html(data)
    
       
}
function html(data) {
    console.log(data)
    document.getElementById("name").innerHTML = data.name
    document.getElementById("height").innerHTML = data.height
    document.getElementById("gender").innerHTML = data.gender
    document.getElementById("byear").innerHTML = data.birth_year
    fetch(`${data.homeworld}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            document.getElementById("hworld").innerHTML = data.name
        })
}
let but = document.getElementById("but")
but.addEventListener("click", func)
