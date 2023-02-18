// OPERATING SYSTEM MODULE

const os = require('os')

//const user = os.userInfo()
// console.log(user)

// returns home direectory
// const hue = os.homedir()
// console.log(hue)

//To know the systems uptime

//console.log(`This sysytem has been up for ${os.uptime()} seconds`)

// My operating system info

// const myOs = {
//     name:os.type(),
//     release:os.release(),
//     Totalmem:os.totalmem(),
//     freeMem: os.freemem(),
//     HER:os.arch(),
//     him :os.cpus(),
//     host:os.hostname(),

// }

//const  him = os.cpus()
// console.log(myOs)
//console.log(him)



// PATH MODULE

const path = require('path')

//console.log(path.sep)
// const filePath = path.join('./Folder','subfolder','file.txt')
// console.log(filePath)

//base of a file path
// const base = path.basename(filePath)
// console.log(base)

//path.resolve()- for absolute path

// const abs = path.resolve(__dirname, 'Folder','subfolder','file.txt' )
// console.log(abs)




// The FILE SYSTEM
 
// Synchronous approach

const {readFileSync, writeFileSync} = require('fs')

// const first = readFileSync("./Folder/first.txt", 'utf8')
// const second = readFileSync('./Folder/subfolder/file.txt','utf-8')

// console.log(first)
// console.log(second)


// writeFileSync('./Folder/subfolder/new.txt', 'Hey Mister')

// writeFileSync('./Folder/subfolder/two.txt', `${first},${second}`)
// writeFileSync('./Folder/subfolder/third.txt', `${first},${second}`, {flag:'a'})
// console.log(third)


// Asynchronous approach

 const {readFile,writeFile} = require('fs')

//  readFile('./Folder/subfolder/file.txt', 'utf8', (err, result)=>{

//  if (err){
//     console.log(err)
//     return
//  }
//  console.log(result)  //for file.txt
//  readFile('./Folder/subfolder/new.txt', 'utf8', (err, result) => {
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result) //for new.txt
//  })

//  // writefile
//  writeFile('./Folder/subfolder/forth.txt', 'Conistency baby', (err, result) =>{
//    if(err){
//       console.log(err)
//       return
//    }
//    console.log(result)
//  })
// })
 

// HTTP

const http = require('http');

const server = http.createServer((req,res)=>{
   if(req.url ==='/'){
      res.end('This is the home page ')
   }
   if(req.url ==='/about'){
      res.end('This is what we do')
   }
   res.end(`
   <h1>OOoops</h1>
   <p> Are you lost </p>
   <a href="/"> back home</a>
   `)
   
})

server.listen(5000)