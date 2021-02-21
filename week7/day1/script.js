const axios = require('axios').default;

const robouser = async () =>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
        // handle success
        console.log(response);
      })
}
module.exports ={
    robouser 
}
