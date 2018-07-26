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
    var command;
    switch (line.trim()) {
        case 'up':
            command = {
                target: {
                    x: Board.engine.hero.position.x - 1,
                    y: Board.engine.hero.position.y
                }
            };
            break;
        case 'down':
            command = {
                target: {
                    x: Board.engine.hero.position.x + 1,
                    y: Board.engine.hero.position.y
                }
            };
            break;
        case 'left':
            command = {
                target: {
                    x: Board.engine.hero.position.x,
                    y: Board.engine.hero.position.y - 1
                }
            };
            break;
        case 'right':
            command = {
                target: {
                    x: Board.engine.hero.position.x,
                    y: Board.engine.hero.position.y + 1
                }
            };
            break;
        default:
            console.log("Your input was '" + line.trim() + "'");
            break;
    }
    Board.write(command);
    rl.prompt();
}).on('close', function () {
    console.log('Have a great day!');
    process.exit(0);
});
Board.init({
    start: { x: 0, y: 0 }
});
Board.write();
rl.prompt();
