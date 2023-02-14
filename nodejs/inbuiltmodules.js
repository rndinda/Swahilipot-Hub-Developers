// OPERATING SYSTEM MODULE

//const os = require('os')

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
 
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync("./Folder/first.txt", 'utf8')
const second = readFileSync('./Folder/subfolder/file.txt','utf-8')

console.log(first)
console.log(second)

// writeFileSync(file, data[, options])

const third = writeFileSync('./Folder/new.txt', 'Hello Mister')
console.log(third)
