// readFile()
// const {readFile} = require('fs')
// console.log('Leo unafanya')

// readFile('./Folder/subfolder/new.txt', 'utf8', (err,result) =>{
//     if (err){
//         console.log(err)
//         return
//     }
//     console.log(result)
//     console.log("I have no idea")
// })
// console.log('hata sina habari')


// setTimeout()

// console.log('Leo ni siku gani')
// setTimeout(()=>{
//     console.log('Shinda vizuri')
// },0)
// console.log('Aje sasa')

// setInterval()

// console.log('what hPPENS ')
// setInterval(()=>{
//     console.log('Nini sasa')
// },1000)
// console.log('HEy you')
const http = require('http')

const server = http.createServer((req,res) =>{
    console.log('request event')
    res.end('Event looooooopp')
    

})
server.listen(5000, () =>{
    console.log('good afternoon')
})