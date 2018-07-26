'use strict';

const floor = '.';

const boardWidth = 28;
const boardHeight = 14;

export let board = [];

export function init() {
  for (let i = 0; i < boardHeight; i++) {
    board[i] = [];
    for (let j = 0; j < boardWidth; j++) {
      board[i][j] = floor;
    }
  }
}

export function write() {
  for (let i = 0; i < boardHeight; i++) {
    console.log(board[i].join(''));
  }
}