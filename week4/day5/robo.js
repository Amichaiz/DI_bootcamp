/*const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];*/
function createRobots(robots) {
  const container = document.getElementById("container")
  robots.map(e => {
    let newdiv = document.createElement("div")
    newdiv.classList.add("box");
    let image = document.createElement('img')
    image.classList.add("circle");
    image.src = `https://robohash.org/${e.id}?200x200`
    newdiv.append(image)
    let newh4 = document.createElement("h4")
    newh4.innerHTML = e.name
    newdiv.append(newh4)
    let newh6 = document.createElement("h6")
    newh6.innerHTML = e.email
    newdiv.appendChild(newh6)
    let btn = document.createElement("button")
    btn.innerHTML = "posts"
    newdiv.appendChild(btn)
    btn.addEventListener("click", function () {
      let xhr2 = new XMLHttpRequest();
      xhr2.open('GET', `https://jsonplaceholder.typicode.com/posts?userId=${e.id}`);
      xhr2.responseType = 'json'
      xhr2.send()

      xhr2.onload = function () {
        console.log(xhr2.response)
      }
    })
    //adds city if you change back to the array comment out this 3 lines
    let newh62 = document.createElement("h6")
    newh62.innerHTML = e.address.city
    newdiv.append(newh62)
    container.appendChild(newdiv)
  })

}
//retrieving data from oudside link also adds city from new info
/*let xhr = new XMLHttpRequest();
xhr.open('GET', "https://jsonplaceholder.typicode.com/users");
xhr.responseType = 'json'
xhr.send()

xhr.onload = function() {
  createRobots(xhr.response);
  console.log(xhr.response)
};*/
fetch(`https://jsonplaceholder.typicode.com/users`)
  .then(response => {
    return response.json()
  })  // convert to json
  .then(data => {
    createRobots(data)
  })    // print data to console
  .catch(err => {
    console.log('Request Failed', err)
  });

//createRobots(robots)
let filterrobo = document.getElementById("search")
filterrobo.addEventListener("keyup", (event) => {
  let input = event.target.value
  let allrobo = document.getElementById("container").querySelectorAll("div")
  robots.map(e => {
    if (!e.name.toUpperCase().includes(input.toUpperCase())) {
      allrobo[e.id - 1].style.display = "none"
    }
    else allrobo[e.id - 1].style.display = "block"
  })
  /*let newarr = robots.filter(e => !e.name.toUpperCase().includes(input.toUpperCase()))
  document.getElementById("container").removeChild
  createRobots(newarr)*/
})


