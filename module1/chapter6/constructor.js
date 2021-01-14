// constructor functions are used to instantiate new objects of a object class

function Person(pName,pAge){ // pascal case first letter capital
    this.name = pName   // we cannot use arrow functions for constructor functions
    this.age = pAge
}
let person1 = new Person('Rohini',35)
let person2 = new Person('Sree',40)
let person3 = new Person('Abhi',10)
let person4 = new Person('Nandu',7)
person1.gender = 'Female'
person2.greet = function(){
    console.log(`hello ${this.name}`)
}
console.log(Person)
console.log(person1)
console.log(person1.name)
console.log(person2)
console.log(person2.name)
person2.greet()
console.log(person3)
console.log(person3.name)
console.log(person4)
console.log(person4.name)