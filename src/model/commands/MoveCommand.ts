import { Command } from "./Command";
import { MyPosition } from "../Coordinates";

export interface MoveCommand extends Command {
    target: MyPosition;
}