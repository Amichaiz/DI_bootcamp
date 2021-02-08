//xp
let xhr = new XMLHttpRequest();
xhr.open('GET', "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=dc6zaTOxFJmzC");
xhr.responseType = 'json'
xhr.send()
xhr.onload = function() {
  makeGif(xhr.response)
};
//xp gold
function makeGif(e){
  let rnd = Math.floor(Math.random()*50)
  domgif(e.data[rnd].id)
  console.log(e);
}
function domgif(id){
let gif = document.createElement("img")
gif.setAttribute("src",`https://media2.giphy.com/media/${id}/giphy.gif`)
document.body.appendChild(gif);
}
