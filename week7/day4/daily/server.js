/*
CREATE TABLE users (
	id serial,
	fname VARCHAR ( 50 ) NOT NULL,
	lname VARCHAR ( 50 ) NOT NULL,
	email  VARCHAR ( 50 ) NOT NULL,
	username VARCHAR ( 50 ) UNIQUE NOT NULL PRIMARY KEY,
	password VARCHAR ( 50 )  NOT NULL
);
*/
const exp = require('express');
const bp = require('body-parser');
const DB = require('./modules/db.js')
const bcrypt = require('bcrypt');
/*const knex = require('knex');

const db = knex({
  client:'pg',
  connection:{
    host: '127.0.0.1',
    user: 'postgres',
    password: '12345',
    database: 'main'
  }
})*/

const app = exp();

app.use(bp.urlencoded({extended:false}));
app.use(bp.json());

app.use('/',exp.static(__dirname+'/public'));

app.post('/user',(req,res)=>{
  console.log("server",req.body);
  DB.createUser(req.body)
  .then(data => {
    res.send({message:'OK'})
  })
  .catch(err => {
    res.send({message:err.detail})
  })
})



app.listen(3000)
