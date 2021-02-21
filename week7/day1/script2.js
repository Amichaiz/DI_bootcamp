const s2 = require('./script.js')
s2.user()
.then(data => console.log(data))
.catch(e=>console.log(e));