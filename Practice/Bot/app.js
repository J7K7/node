const readline = require('readline');

const bot = require('./bot');

var r1 = readline.createInterface(process.stdin, process.stdout);

r1.setPrompt("You =>");

r1.prompt();

r1.on('line', (msg) => {
    console.log("Bot => " + bot.reply(msg));
    r1.prompt();
}).on('close', () => {
    process.exit();
});