/*
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://giphy.p.rapidapi.com/v1/gifs/search?api_key=4pLGPCW1xDUAsCABCsBrVjFp5CzwlG83&q=funny%20cat");
xhr.setRequestHeader("x-rapidapi-key", "3f4b6a1089msh03de9a7e44c4095p1bfbb9jsnc3f17936c7c9");
xhr.setRequestHeader("x-rapidapi-host", "giphy.p.rapidapi.com");

xhr.send(data);*/


var api = 'https://api.giphy.com/v1/gifs/search?';
var apiKey = '&api_key=dc6zaTOxFJmzC';
var query = '&q=rainbow';

function setup() {
  noCanvas();
  var url = api + apiKey + query;
  loadJSON(url, gotData);
}

function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++) {
    createImg(giphy.data[i].images.original.url);
  }
}
