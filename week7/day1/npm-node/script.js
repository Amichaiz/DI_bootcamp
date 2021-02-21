let prompt = require('prompt');
const s2 = require('./date.js')
prompt.start();
let d = new Date("02/06/1996");
console.log(s2.date(d))
prompt.get(['bdate'], function (err,rresult){
    let work = new Date (rresult.bdate)
    console.log(s2.date(work))
});