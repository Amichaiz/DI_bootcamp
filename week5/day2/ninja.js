
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://giphy.p.rapidapi.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=funny%20cat");
xhr.setRequestHeader("x-rapidapi-key", "3f4b6a1089msh03de9a7e44c4095p1bfbb9jsnc3f17936c7c9");
xhr.setRequestHeader("x-rapidapi-host", "giphy.p.rapidapi.com");

xhr.send(data);