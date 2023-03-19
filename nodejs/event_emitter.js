// const EventEmitter = require('events');
// // extend the class if you want to create something custom you EXTEND THE CLASS
// //1 create a class instance ,to emit an event as well as listen to it 
// const customEmitter = new EventEmitter()
// // 2 use the on(listen for an event) and emit method(emit an event)
// // "response" - name of event

// customEmitter.on('response', (name)=>{
//     console.log(`How was work today ${name} `)
// })

// customEmitter.on('response', ()=>{
//     console.log('Oyaa rada')
// })
// customEmitter.emit('response','Ndinda')
// // node file name


const EventEmitter = require('events');

const yEmit = new EventEmitter()
yEmit.on('response',(name,age) => {
    console.log(`Good morning folks, my name is ${name} am ${age} years old`)
})

yEmit.on('response', () => {
    console.log('Hey baby')
})

yEmit.on('response',()=>{
    console.log(`Headed to work today`)
})

yEmit.on('response',(profile,logno)=>{
    console.log(`Give user:${profile} logNo:${logno} in the logins please`)
})

yEmit.on('response',()=>{
    console.log(`what is the difference in using the different  quotation marks` )
})
yEmit.emit('response','Mwesh',39,'Rita',345)