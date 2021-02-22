const http = require('http');

const server = http.createServer((req,resp) =>{
    resp.setHeader('Content-type', 'text/html')
    resp.end('<h1>hello</h1><h2>second resp</h2><p>third</p>')
})
server.listen(3000,()=>{
console.log("im listning")});