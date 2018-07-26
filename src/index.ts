import * as readline from 'readline';
import * as Board from './Board';
import { BirthCommand } from './model/commands/BirthCommand';
import { MyPosition } from './model/Coordinates';
import { Command } from './model/commands/Command';
import { MoveCommand } from './model/commands/MoveCommand';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

rl.on('line', (line) => {
  let command: Command;
  switch (line.trim()) {
    case 'up':
      command = <MoveCommand>{
        target: <MyPosition>{
          x: Board.engine.hero.position.x - 1,
          y: Board.engine.hero.position.y
        }
      };
      break;
    case 'down':
      command = <MoveCommand>{
        target: <MyPosition>{
          x: Board.engine.hero.position.x + 1,
          y: Board.engine.hero.position.y
        }
      };
      break;
    case 'left':
      command = <MoveCommand>{
        target: <MyPosition>{
          x: Board.engine.hero.position.x,
          y: Board.engine.hero.position.y - 1
        }
      };
      break;
    case 'right':
      command = <MoveCommand>{
        target: <MyPosition>{
          x: Board.engine.hero.position.x,
          y: Board.engine.hero.position.y + 1
        }
      };
      break;
    default:
      console.log(`Your input was '${line.trim()}'`);
      break;
  }
  Board.write(command);
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});

Board.init(<BirthCommand>{
  start: <MyPosition>{ x: 0, y: 0}
});
Board.write();
rl.prompt();
