var faker = require('faker');
let prompt = require('prompt');
var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact 
let add = faker.address.city();

let arr = [{ "lname":faker.fake("{{name.lastName}}"),
"fname":faker.fake("{{name.firstName}}"),
"city":faker.fake("{{address.city}}"),
"lan":faker.locale}]

const returnNumbers = (str =>{
    var num = str.replace(/\D/g,'')
    return num})
//console.log(returnNumbers('k5k3q2g5z6x9bn') )

prompt.get(['full_name'], function lets (err,rresult){
    while(!(/^[A-Z][a-z]/.test(rresult.full_name))){
        prompt.get(['full_name'],lets())
    }
    console.log(rresult)
});