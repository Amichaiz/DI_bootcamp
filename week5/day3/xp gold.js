/*
Use Promise.all to fetch in one request, all the characters from the array above.
Console.log the output and make sure it has a catch block as well.
*/

const urls = [
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/3',
    'https://swapi.dev/api/people/4'
  ]
  let requests = urls.map(e => fetch(e));
  console.log(requests);
  //Promise.all(requests)
  .then(data => {
    console.log(data);
    for(let response of data) {
        console.log(response);
    }
  })    // print data to console
  .catch(err => {
    console.log('Request Failed', err)
  });
  /*
    urls.map(e => {
    fetch(e)
  .then(response => {
    return response.json()
  })  // convert to json
  .then(data => {
    console.log(data)
  })    // print data to console
  .catch(err => {
    console.log('Request Failed', err)
  });
  });
  */
  
  
  
  /*
  Promise.all(requests)
  .then(responses => {
    // all responses are resolved successfully
    for(let response of responses) {
      alert(`${response.url}: ${response.status}`); // shows 200 for every url
    }

    return responses;
  })
  // map array of responses into an array of response.json() to read their content
  .then(responses => Promise.all(responses.map(r => r.json())))
  // all JSON answers are parsed: "users" is the array of them
  .then(users => users.forEach(user => alert(user.name)));*/
