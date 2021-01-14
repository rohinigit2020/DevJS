//import People from "./classExp.js"

//people can be any name because it is a default export 
// to use object exported
// without cratind an object we can use directly 
// people.greet()
// non default

import {Person} from "./classExp.js"
let per1 = new Person

console.log(per1)
per1.greet()