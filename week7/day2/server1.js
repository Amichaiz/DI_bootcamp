const http = require('http');

const server = http.createServer((req,resp) =>{
    resp.setHeader('Content-type', 'text/html')
    const user ={
        name:'jhon',
        last:'doe'
    }
    resp.end(JSON.stringify(user))
})
server.listen(8080)