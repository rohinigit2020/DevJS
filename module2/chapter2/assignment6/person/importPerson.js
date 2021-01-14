import per from './perClass.js'

let per1 = new per('Sreedhar','Sanga')

console.log(per1.fullName())
// we cant use older version of module.exports and require() as classes are completely ES6 new features
// so we must use babel or "type" : "module"
