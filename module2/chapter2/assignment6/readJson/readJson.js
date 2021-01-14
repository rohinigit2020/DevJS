/* import qPaper from "./Example1.json"

console.log(qPaper.Question)
console.log(qPaper.Options)
console.log(qPaper.Answer)
 */
// this old version executes without "type" = "module" and no need to use --experimental-json-modules aswell
const questionPaper = require("./Example1.json")
console.log(questionPaper)