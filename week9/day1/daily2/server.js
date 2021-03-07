const exp = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = exp(); 
//app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
/*using get
app.get('/getInput', (req,res) => {
        res.send(req.query)
})*/
app.post('/getInput', (req,res) => {
    res.send(req.body)
    console.log(req.body);
})

app.listen(3001)