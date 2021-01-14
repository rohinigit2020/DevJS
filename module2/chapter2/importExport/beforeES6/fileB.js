
const name = require('./fileA')
console.log(name)
console.log(name.myName)
console.log(name.age)
console.log(name.sum(7,8))
console.log(name.myFullName)

// other way to inport
const {myName,age,sum} = require('./fileA') // but we should use same vaiable names if we are using {object}
console.log(myName)
console.log(age)
console.log(sum(4,5))