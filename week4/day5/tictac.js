//igor
//https://ca.slack-edge.com/T7P4CAKAS-U01J9MJH1JN-4e0c6db4711a-512

//ziv
//https://ca.slack-edge.com/T7P4CAKAS-UP17FT59U-g660cee370b1-512
let player
let comp
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let divs = document.getElementsByClassName("box")
let igor = document.getElementById("igor")
igor.addEventListener("click", playerigor);
let ziv = document.getElementById("ziv")
ziv.addEventListener("click", playerziv);

function playerigor(){
    player = "igor"
    comp = "ziv"
    ziv.removeEventListener("click", playerziv)
    igor.removeEventListener("click", playerigor)
    listener()
}
function playerziv(){
    player = "ziv"
    comp = "igor"
    ziv.removeEventListener("click", playerziv)
    igor.removeEventListener("click", playerigor)
    listener()
}
function listener(){
 
for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click",game)  
}
}
function game(){
    this.removeEventListener("click",game)
    arr.splice(arr.indexOf(parseInt(this.id)), 1) 
    this.classList.add(player) 
    win(player)   
    computerturn()
}
function computerturn(){
    let guess = Math.floor(Math.random()*9)
    while(!arr.includes(guess)){
        guess = Math.floor(Math.random()*9)
        if(arr.length==0){
            break
        }
    }
    arr.splice(arr.indexOf(guess), 1)
    divs[guess].classList.add(comp)
    divs[guess].removeEventListener("click",game)
    win(comp) 
}
function win(winner){
    if(
    (divs[0].classList.contains(winner) && divs[1].classList.contains(winner) && divs[2].classList.contains(winner))||
    (divs[3].classList.contains(winner) && divs[4].classList.contains(winner) && divs[5].classList.contains(winner))||
    (divs[6].classList.contains(winner) && divs[7].classList.contains(winner) && divs[8].classList.contains(winner))||

    (divs[0].classList.contains(winner) && divs[3].classList.contains(winner) && divs[6].classList.contains(winner))||
    (divs[1].classList.contains(winner) && divs[4].classList.contains(winner) && divs[7].classList.contains(winner))||
    (divs[2].classList.contains(winner) && divs[5].classList.contains(winner) && divs[8].classList.contains(winner))||

    (divs[0].classList.contains(winner) && divs[4].classList.contains(winner) && divs[8].classList.contains(winner))||
    (divs[6].classList.contains(winner) && divs[4].classList.contains(winner) && divs[2].classList.contains(winner))){
    alert("The Winner is "+winner)
    for (let i = 0; i < divs.length; i++) {
        divs[i].removeEventListener("click",game)  
    }
    }
}
