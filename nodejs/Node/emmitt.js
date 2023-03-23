// const EventEmitter = require('events');

// const customEmitter = new EventEmitter()

// customEmitter.on('response', () => {

//     console.log ('ate today?')
// })

// customEmitter.on('response', (name) =>{
//     console.log(`Hello ${name}`)
// })

// customEmitter.emit('response','Khadija')

// const http = require('http')
// // const fs = require('fs')
// const {readFileSync} = require('fs')

// http.createServer(function(req,res){
//     const text = readFileSync('./Folder/subfolder/bigger.txt')
//     res.end(text)
// })
// .listen(5000)



const http = require('http')
const fs = require('fs')

http.createServer(function (req,res) {
    // const txt = fs.readFileSync('./Folder/subfolder/bigger.txt', 'utf8')
    // res.end(txt)

    // Intead of sending the file in one instance, we send it in chunks
    const fileStream = fs.createReadStream('./Folder/subfolder/bigger.txt');
    fileStream.on('open', ()=>{
        fileStream.pipe(res)

// pipe(), transfers data from a readable stream to writeable
    

    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
}).listen(5000)