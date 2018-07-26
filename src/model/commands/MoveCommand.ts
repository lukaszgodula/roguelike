import { Command } from "../Command";

export interface MoveCommand extends Command {
    target: Coordinates;
}