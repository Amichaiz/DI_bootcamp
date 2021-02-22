const exp = require('express');
const app = exp();

app.get('/', (req,res)=>{
    console.log(req.query);
    res.send('<h1>this is html baby</h1>')
})
app.listen(3000)