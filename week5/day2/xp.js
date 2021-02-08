let xhr = new XMLHttpRequest();
xhr.open('GET', "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=dc6zaTOxFJmzC");
xhr.responseType = 'json'
xhr.send()

xhr.onload = function() {
  console.log(xhr.response)
};