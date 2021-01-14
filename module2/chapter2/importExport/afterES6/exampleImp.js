// default imports
//import CarClass from "./exampleExp.js"
//let car1 = new CarClass()

//named imports
import {Car} from "./exampleExp.js"

let car1 = new Car()

console.log(car1.getModel())
console.log(car1.getMake())
console.log(car1.getColour())
console.log(car1.getNumber())