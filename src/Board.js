'use strict';
exports.__esModule = true;
var floor = '.';
var boardWidth = 28;
var boardHeight = 14;
exports.board = [];
function init() {
    for (var i = 0; i < boardHeight; i++) {
        exports.board[i] = [];
        for (var j = 0; j < boardWidth; j++) {
            exports.board[i][j] = floor;
        }
    }
}
exports.init = init;
function write() {
    for (var i = 0; i < boardHeight; i++) {
        console.log(exports.board[i].join(''));
    }
}
exports.write = write;
