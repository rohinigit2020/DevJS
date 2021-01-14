// parent class
class Person{
    constructor(Pname,Paddress){
        this.name = Pname
        this.address = Paddress
    }
    greet(){
        console.log(`hello ${this.name} this is a class greet`)
    }
// getter and setter
    get generateEmail(){                          // these are properties but not methods as normal functions
        return `${this.name}@abc.com`
    }

    set newName(newName){                          // this is also a methodnpm
        this.name = newName
    }
}

// child class which inherits all the properties from parent class

class Child extends Person{
    constructor(name,address,school){
        super(name,address)
        this.school = school
    }
}

let child1 = new Child('Yodha',"spruce Road","ST Mary's")
console.log(child1)
console.log(child1.emailFromPerson)
child1.greet()
console.log(child1.generateEmail)
child1.newName = 'Yodha Abhiram'
console.log(child1.name)
