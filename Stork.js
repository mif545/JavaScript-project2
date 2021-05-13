import {Animal} from './Animal.js'

export class Stork extends Animal{
    constructor(name){
        super(name)
    }
    draw()
    {
      
        super.draw('./Stork.jpg');
    }
    choose(e){
        super.choose(e);
    }
}