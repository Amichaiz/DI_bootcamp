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
  Promise.all(urls.map(url =>
    fetch(url).then(people => people.json())
  ))
  .then(array => {
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
  })
  .catch(err => console.log('ughhhh fix it!', err));
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
