const fs = require('fs');
const events = require('events');

const myEmitter1 = new events.EventEmitter();

myEmitter1.on('read', (filename)  => {
    console.log('File Reading Started !!');
    fs.readFile(filenamem, 'utf-8', (err, data) =>{
        console.log('Reading File Completed !!');
        myEmitter.emit('display', data);
    });
});

myEmitter1.on('display',(data) =>{
    console.log(`Display File Data : ${data}`);
    myEmitter.emit('finished');
});

myEmitter1.on('finished',() =>{
    console.log('File Finished');
});

myEmitter1.emit('filename.txt');