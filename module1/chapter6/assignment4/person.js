function Person(){
    this.name = 'John',
    this.age = 23
}
let person1 = new Person()
let person2 = new Person()
console.log(person1)
console.log(person2)
person1.gender ='Male'
person1.greet = function(){ 
    console.log(`hello ${person1.name}`)
}
console.log(person1)
console.log(person2)
person1.greet()
person2.greet()