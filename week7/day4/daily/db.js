const knex = require('knex');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const db = knex({
  client:'pg',
  connection:{
    host: '127.0.0.1',
    user: 'postgres',
    password: '12345',
    database: 'main'
  }
})

function createUser({user,pass,finame,laname,eemail,}){
  const salt = bcrypt.genSaltSync(saltRounds);
console.log("db",user,pass,fname,lname,email,);
  return db('users').insert(
    {
      fname:finame,
      lname:laname,
      email:eemail,
      username:user,
      password:bcrypt.hashSync(pass, salt)
    }
  )
  .returning('*')
}

module.exports = {
  createUser
}
