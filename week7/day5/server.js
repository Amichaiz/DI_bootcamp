//get user id
const axios = require("axios").default;
const exp = require('express');
const app = exp();

app.use('/', exp.static(__dirname + '/public'));

//app.get('/action/:id', function (req, res) {
// console.log(req.params); 
app.get('/action',async function (req, res) {
    let id=1035580585;//fix this
    /*
    console.log(req.query);
    let name = req.query.name
    let userid = {
        method: 'GET',
        url: 'https://instagram47.p.rapidapi.com/get_user_id',
        params: { username: name },
        headers: {
            'x-rapidapi-key': '3f4b6a1089msh03de9a7e44c4095p1bfbb9jsnc3f17936c7c9',
            'x-rapidapi-host': 'instagram47.p.rapidapi.com'
        }
    };
    await axios.request(userid).then(function (response) {
        console.log(response.data);
        id = JSON.parse(response.data.user_id);
        console.log(id +"this is the iiiiiiiiiiiiiiiiiiiiiiidddddddddddddddddddddddddddddd");
    }).catch(function (error) {
        console.error(error);
    })
    */
    //get followers
    
    let followers = {
        method: 'GET',
        url: 'https://instagram47.p.rapidapi.com/user_followers',
        params: { userid: id },
        headers: {
            'x-rapidapi-key': '3f4b6a1089msh03de9a7e44c4095p1bfbb9jsnc3f17936c7c9',
            'x-rapidapi-host': 'instagram47.p.rapidapi.com'
        }
    };

    await axios.request(followers).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

    res.send({
        a: 'amichai'
    })

})
    /*
    
    // get following
      let following = {
        method: 'GET',
        url: 'https://instagram47.p.rapidapi.com/user_following',
        params: {userid: id},
        headers: {
          'x-rapidapi-key': '3f4b6a1089msh03de9a7e44c4095p1bfbb9jsnc3f17936c7c9',
          'x-rapidapi-host': 'instagram47.p.rapidapi.com'
        }
      };
      
      axios.request(following).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
     
      */
    app.listen(3000)
