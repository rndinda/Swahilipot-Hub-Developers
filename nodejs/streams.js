// const {writeFileSync} = require('fs')


// for ( let i=0; i<100000; i++){

//     writeFileSync('./Folder/subfolder/big.txt', `Hey  lady ${i}\n`,{flag: 'a'})
// }


const {createReadStream} = require('fs')

const stream = createReadStream('./Folder/subfolder/big.txt')

stream.on('data', (results)=>{
    console.log(results)
})