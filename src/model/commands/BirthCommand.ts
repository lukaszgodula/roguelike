import { Command } from "./Command";
import { MyPosition } from "../Coordinates";

export interface BirthCommand extends Command {
    start: MyPosition;
}