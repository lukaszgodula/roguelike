import { Drawable } from "./Drawable";

export class Floor implements Drawable {
    position;
    readonly representation = '.';

    public constructor(init?:Partial<Floor>) {
        (<any>Object).assign(this, init);
    }
}