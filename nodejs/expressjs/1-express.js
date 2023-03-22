const http = require('http')

// const server = http.createServer((req,res)=>{
//     // res.end('Nani ako huko')  bila console.log
//     console.log('nani ako hapo?')
//     res.end('Who is there?')
// })
// server.listen(5001)

// Provide more info on date being send back (RESPONSE)

// const server = http.createServer((req,res)=>{
//     res.writeHead(200, {'content-type':'text/html'})// Header
//     res.write('<h1>My home page</h1>')
//     res.end()
// })
// .listen(5001)


// REQUEST.

const server = http.createServer((req,res)=>{
    // console.log(req.method)
    // console.log(req.url)

    const url = req.url;

    // home page
    if (url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1> Heey , na hii home page')
        res.end()
 }

   
    else if( url ==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1> Huku ni about tu </h1>')
        res.end()

    }

    else{
        res.writeHead(400,{'content-type':'text/html'})
        res.write('<h1>Umepotea msee</h1>')
        res.end()
    }


    // res.writeHead(200,{'contnent-type':'txt/html'})
    // res.write('<h1>Good morning People,</h1>')
    //  res.end()
}).listen(5001)
