/*
let person = {
    name = 'John',
    age = 20,
    email = 'abc@abc.com' }
*/

function Person(pName,pAge,pEmail){
    this.name = pName,
    this.age = pAge,
    this.email = pEmail
}

let person = new Person('John',20,'abc@abc.com')
console.log(person)