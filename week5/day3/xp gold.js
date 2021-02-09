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
  let requests = urls.map(url => fetch(url));
  Promise.all(requests)
  .then(data => {
    console.log(data)
  })    // print data to console
  .catch(err => {
    console.log('Request Failed', err)
  });
  