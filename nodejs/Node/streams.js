
//create the big txt file
// const {writeFileSync} = require('fs')


// for ( let i=0; i<100000; i++){

//     writeFileSync('./Folder/subfolder/big.txt', `Hey  lady ${i}\n`,{flag: 'a'})
// }

// use stream to read the file data in chunk
const {createReadStream} = require('fs')

const stream = createReadStream('./Folder/subfolder/big.txt','utf8')

stream.on('data', (results)=>{
    console.log(results)
})
// // highWaterMark-- controls the size of the buffer
// // check for error in the terminal.

// stream.on('error', (err)=>{
//     console.log(err)
// })

// bigger txt file

// const {writeFileSync} = require('fs')

// for(i = 0; i < 1000000; i++){
//         writeFileSync('./Folder/subfolder/bigger.txt', `Habari yako Ndinda ${i}\n`, {flag: 'a'})
// }