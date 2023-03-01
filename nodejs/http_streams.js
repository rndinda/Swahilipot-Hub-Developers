const http = require('http')
const fs = require('fs')

http.createServer(function (req,res) {
    const txt = fs.readFileSync('./Folder/subfolder/bigger.txt', 'utf8')
    res.end(txt)
}).listen(5000)