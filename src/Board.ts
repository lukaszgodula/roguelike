import { BirthCommand } from "./model/commands/BirthCommand";
import { Drawable } from "./model/drawables/Drawable";
import { Hero } from "./model/drawables/Hero";
import { Floor } from "./model/drawables/Floor";
import { MyPosition } from "./model/Coordinates";
import { Command } from "./model/commands/Command";
import { Engine } from "./engine/Engine";
import { MoveCommand } from "./model/commands/MoveCommand";

const boardWidth = 28;
const boardHeight = 14;

export let board: Drawable[][] = [];
export let engine: Engine = new Engine();

export function init(command: BirthCommand) {
  for (let i = 0; i < boardHeight; i++) {
    board[i] = [];
    for (let j = 0; j < boardWidth; j++) {
      let objectToDraw: Drawable;
      if (command.start.x === i && command.start.y === j) {
        objectToDraw = new Hero({
          position: <MyPosition>{
            x: i,
            y: j
          }
        });
        engine.hero = <Hero>objectToDraw;
      } else {
        objectToDraw = new Floor({
          position: <MyPosition>{
            x: i,
            y: j
          }
        });
      }
      board[i][j] = objectToDraw;
    }
  }
}

export function write(command?: Command) {
  if (command != null) {
    const moveCommand = <MoveCommand>command;
    if (moveCommand.target.x >= 0 && moveCommand.target.x < boardHeight
      && moveCommand.target.y >= 0 && moveCommand.target.y < boardWidth) {
      board[engine.hero.position.x][engine.hero.position.y] = new Floor();
      engine.hero.position.x = moveCommand.target.x;
      engine.hero.position.y = moveCommand.target.y;
      board[moveCommand.target.x][moveCommand.target.y] = engine.hero;
    }
  }
  for (let i = 0; i < boardHeight; i++) {
    console.log(board[i].map(d => d.representation).join(''));
  }
}