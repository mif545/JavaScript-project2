import {Animal} from './Animal.js'

export class Rabbit extends Animal{
    constructor(name){
        super(name)
    }
    draw()
    {
        super.draw('./Rabbit.jpg');
    }
    choose(e){
        super.choose(e);
    }
}