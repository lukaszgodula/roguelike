import { Drawable } from "./Drawable";

export class Hero implements Drawable {
    position;
    readonly representation = '@';
    healthPoints: number;

    public constructor(init?:Partial<Hero>) {
        (<any>Object).assign(this, init);
    }
}