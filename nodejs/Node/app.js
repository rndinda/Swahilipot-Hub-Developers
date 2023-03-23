// const salamu = (name) =>{
//     console.log(`Hey call ${name}`)
// }

// module.exports = salamu


const {readFile} =  require('fs')

const getText = (path) => {
    return new Promise((resolve,reject) => {
        readFile(path, 'utf8', (err, data) => {
            if(err) {
                reject(err)
            }else {
                resolve(data)
            }
        })
    })

}

const start =async () => {
    try{
        const kwanza = await getText('./Folder/subfolder/file.txt')
        console.log(kwanza)
    } catch (error) {
        console.log(error)
    }
}

start()