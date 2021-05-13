import {Animal} from './Animal.js'

export class Bird extends Animal{
    constructor(name){
        super(name)
    }
    draw()
    {
        super.draw('./Bird.jpg');
    }
    choose(e){
        super.choose(e);
    }
}