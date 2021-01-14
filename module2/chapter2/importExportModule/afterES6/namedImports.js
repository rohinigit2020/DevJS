// to inport non default imports we must use curly braces
// we should use same name

//import ageOfPerson,{institute as name,greet,email} from "./namedExport"

import age , * as file from "./namedExport.js"

/* console.log(name)

console.log(greet())

console.log(email)

console.log(ageOfPerson) */
console.log(file.institute)

console.log(file.greet())

console.log(file.email)

console.log(age)

