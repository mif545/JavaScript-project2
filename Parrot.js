import {Animal} from './Animal.js'

export class Parrot extends Animal{
    constructor(name){
        super(name)
    }
    draw()
    {
        super.draw('./Parrot.jpg');
    }
    choose(e){
        super.choose(e);
    }
}