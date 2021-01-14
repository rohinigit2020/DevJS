function Person(pName,pAge){ 
    this.name = pName   
    this.age = pAge
    this.greet = ()=>{console.log(`Hello ${this.name} This is a constructor greet`)}
}
let person1 = new Person('Rohini',35)
let person2 = new Person('Sree',40)
person1.greet()


console.log(person1)
console.log(person2)
person2.greet()


class PersonClass{
    constructor(PCname,PCage){
        this.name = PCname
        this.age = PCage
    }
    greet(){
        console.log(`hello ${this.name} this is a class greet`)
    }

    get generateEmail(){                          // getter and setter
        return `${this.name}.${this.age}@abc.com`
    }

    set perNewName(newName){
        this.name = newName
    }
}
let person3 = new PersonClass('Abhi',10)
let person4 = new PersonClass('Nandu',7)
console.log(person3)
console.log(person4)
person4.greet()
console.log(person3.generateEmail)
person3.perNewName = 'Yodha'
console.log(person3.name)


 // adding new property we can add a property to individual instant
 // to add a new property to whole class we have to declare in class declaration

let person5 = new PersonClass('Nana',60)
console.log(person5) 
person5.email = 'nanna.60@abc.com'
console.log(person5) 



