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