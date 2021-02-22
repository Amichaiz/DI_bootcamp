const exp = require('express');

const app = exp();

app.use('/', exp.static(__dirname+'/public'));

app.get('/form', (req,res)=>{
    res.sendFile('C:/Users/amich/OneDrive/Desktop/nodeserver/daily/public/form.html');
})

app.get('/aboutMe/:hobby', (req,res)=>{
    res.send('one hobby is computer')
})

app.get('/pic/', (req,res)=>{
    res.sendFile('C:/Users/amich/OneDrive/Desktop/nodeserver/daily/public/pic.html'); 
})

app.listen(3000)
console.log("listning");