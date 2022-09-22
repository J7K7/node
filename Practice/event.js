const events = require('events');

const myEmitter = new events.EventEmitter();

myEmitter.on('Add Listener', (event,listener) => {
    console.log("Listener Added");
    if(event == 'event1'){
        console.log('Listener Added !!');
    }
});

myEmitter.on('event1',() => {
    console.log('Event1');
})


myEmitter.on('event1',() => {
    console.log('Event1 * 2');
})

myEmitter.on('event2',() =>{
    console.log('Event2');
})

myEmitter.emit('event1');
myEmitter.emit('event2');