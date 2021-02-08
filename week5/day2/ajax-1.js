/*let xhr = new XMLHttpRequest();

//Example
xhr.open('GET', 'https://zivuch.github.io/data.json');
xhr.responseType = 'json'
xhr.send()

xhr.onload = function() {
  console.log(xhr.response);
};

xhr.onerror = function() { // only triggers if the request couldn't be made at all
  alert(`Network Error`);
};


if (xhr.status === 200) {
    // Perfect!
} else {

    // There was a problem with the request.
    // For example, the response may have a 404 (Not Found)
    // or 500 (Internal Server Error) response code.
}

/*
// 1. Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();‏
// xhr.open(method,url,[true,user,pass]);
xhr.open('GET', 'https://zivuch.github.io/load');‏
// 3. Send the request over the network
xhr.send();‏
// 4. This will be called after the response is received
xhr.onload = function() {
  if (xhr.status != 200) {
    // analyze HTTP status of the response
    // e.g. 404: Not Found
    console.log(`Error ${xhr.status}: ${xhr.statusText}`);
  } else { // show the result
    // response is the server response
    console.log(`Done, got ${xhr.response.length} bytes`);
    // console.log(xhr.response);
  }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    console.log(`Receive‏
xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    console.log(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    console.log(`Received ${event.loaded} bytes`); // no Content-Length
  }
};
‏
xhr.onerror = function() {
  console.log("Request failed");
};‏
*/
/*

const data = "q=lets%20try%20this&source=en&target=he";

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("POST", "https://google-translate1.p.rapidapi.com/language/translate/v2");
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("accept-encoding", "application/gzip");
xhr.setRequestHeader("x-rapidapi-key", "3f4b6a1089msh03de9a7e44c4095p1bfbb9jsnc3f17936c7c9");
xhr.setRequestHeader("x-rapidapi-host", "google-translate1.p.rapidapi.com");

xhr.send(data);*/

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://instagram47.p.rapidapi.com/user_followers?userid=1035580585");
xhr.open("GET", "https://instagram47.p.rapidapi.com/user_following?userid=1718924098");
xhr.setRequestHeader("x-rapidapi-key", "3f4b6a1089msh03de9a7e44c4095p1bfbb9jsnc3f17936c7c9");
xhr.setRequestHeader("x-rapidapi-host", "instagram47.p.rapidapi.com");




xhr.send(data);