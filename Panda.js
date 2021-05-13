import {Animal} from './Animal.js'

export class Panda extends Animal{
    constructor(name){
        super(name)
    }
    draw()
    {
        super.draw('./Panda.jpg');
    }
    choose(e){
        super.choose(e);
    }
}