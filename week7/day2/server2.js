/*
// exercise 1
const exp = require('express');

const app = exp();

app.route('/')
.get((req,res)=>{
    const user ={
        name:'Ami',
        last:'ber'
    }
    console.log(user);
    res.send(user)
})

app.listen(3000)*/

//exercise 2
const exp = require('express');

const app = exp();

//app.route('/')
app.get('',(req,res)=>{
    console.log(req.url);
    const user ={
        id:req.url
    }
    res.send(user)
  })
    

app.listen(3000)