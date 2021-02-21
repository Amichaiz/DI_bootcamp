const axios = require('axios').default;

const robouser = async () =>{
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        return(response.data);
      } catch (error) {
        console.error(error);
      }  
}
module.exports ={
    user: robouser 
}
