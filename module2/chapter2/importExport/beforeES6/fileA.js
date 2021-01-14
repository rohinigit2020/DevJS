let myName = 'Rohini'
let age =35
let myFullName ='Rohini Sanga'

function sum(a,b){
    return a+b
}

module.exports = myFullName
//module.exports = age
module.exports = {myName,age, sum,myFullName}  // exporting as object
