const EventEmitter = require('events');

//1 create a class instance , 
const customEmitter = new EventEmitter()
// 2 use the on and emit method
// "response" - name of event
customEmitter.on('response', (name)=>{
    console.log(`How was work today ${name} `)
})

customEmitter.on('response', ()=>{
    console.log('Oyaa rada')
})
customEmitter.emit('response','Ndinda')
// node file name