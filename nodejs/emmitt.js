const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', () => {

    console.log ('ate today?')
})

customEmitter.on('response', (name) =>{
    console.log(`Hello ${name}`)
})

customEmitter.emit('response','Khadija')
