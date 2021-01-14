const { timeStamp } = require("console");

import {setWorldConstructor} from "@cucumber/cucumber"

class Increment{
    constructor(){
        this.val = 0;
    }
    inc(i){
        this.val += i
    }
    getVal(){
        return this.val   
    }

}

setWorldConstructor(Increment)