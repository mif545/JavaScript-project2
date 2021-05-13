import {Animal} from './Animal.js'

export class Dog extends Animal{
    constructor(name){
        super(name)
    }
    draw()
    {
        super.draw('./Dog.jpg');
    }
    choose(e){
        super.choose(e);
    }
}