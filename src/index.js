"use strict";
exports.__esModule = true;
var readline = require("readline");
var Board = require("./Board");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});
rl.on('line', function (line) {
    switch (line.trim()) {
        default:
            Board.write();
            console.log("Your input was '" + line.trim() + "'");
            break;
    }
    rl.prompt();
}).on('close', function () {
    console.log('Have a great day!');
    process.exit(0);
});
Board.init();
Board.write();
rl.prompt();
