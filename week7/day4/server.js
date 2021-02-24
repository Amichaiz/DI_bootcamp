const exp = require('express');
const bp = require('body-parser');
const knex = require('knex');

const app = exp();
/*
CREATE TABLE users (
	id serial PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL
);*/
app.use(bp.urlencoded({extended:false}));
app.use(bp.json());

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '12345',
    database : 'main'
  }
});

app.use('/',exp.static(__dirname+'/public'));

app.post('/user',(req,res)=>{
  console.log(req.body);
  db('users').insert(
    {
      username: req.body.user
    }
  )
  .returning('*')
  .then(data => {
    res.send({message:'OK'})
  })
  .catch(err =>{
    res.send({message:err.detail})
  })
})
/*
function createuser({user}){
  db('users').insert(
    {
      username: user
    }
  )
  .returning('*')
}*/

app.get('/show', (req,res)=>{
 db('users').select('username')
 .then(data =>{
   res.send(data)
 })
 .catch(err =>{
  res.send({message:err.detail})
})
})




app.listen(3000)
