"use strict";
exports.__esModule = true;
var Hero_1 = require("./model/drawables/Hero");
var Floor_1 = require("./model/drawables/Floor");
var Engine_1 = require("./engine/Engine");
var boardWidth = 28;
var boardHeight = 14;
exports.board = [];
exports.engine = new Engine_1.Engine();
function init(command) {
    for (var i = 0; i < boardHeight; i++) {
        exports.board[i] = [];
        for (var j = 0; j < boardWidth; j++) {
            var objectToDraw = void 0;
            if (command.start.x === i && command.start.y === j) {
                objectToDraw = new Hero_1.Hero({
                    position: {
                        x: i,
                        y: j
                    }
                });
                exports.engine.hero = objectToDraw;
            }
            else {
                objectToDraw = new Floor_1.Floor({
                    position: {
                        x: i,
                        y: j
                    }
                });
            }
            exports.board[i][j] = objectToDraw;
        }
    }
}
exports.init = init;
function write(command) {
    if (command != null) {
        var moveCommand = command;
        if (moveCommand.target.x >= 0 && moveCommand.target.x < boardHeight
            && moveCommand.target.y >= 0 && moveCommand.target.y < boardWidth) {
            exports.board[exports.engine.hero.position.x][exports.engine.hero.position.y] = new Floor_1.Floor();
            exports.engine.hero.position.x = moveCommand.target.x;
            exports.engine.hero.position.y = moveCommand.target.y;
            exports.board[moveCommand.target.x][moveCommand.target.y] = exports.engine.hero;
        }
    }
    for (var i = 0; i < boardHeight; i++) {
        console.log(exports.board[i].map(function (d) { return d.representation; }).join(''));
    }
}
exports.write = write;
