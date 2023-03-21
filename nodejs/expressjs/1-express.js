const http = require('http')

const server = http.createServer((req,res)=>{
    // res.end('Nani ako huko')  bila console.log
    console.log('nani ako hapo?')
    res.end('Who is there?')
})
server.listen(5001)