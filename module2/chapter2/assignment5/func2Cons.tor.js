function PersonF(pName,pAge) {
    this.name = pName
    this.age = pAge
    this.greet=()=> console.log('Hello',this.name)
}

let p1 = new PersonF('Rohini',35)
console.log(p1)
p1.greet()

// equivalent class
class PersonC{
    constructor(pName,pAge){
        this.name = pName
        this.age = pAge
    }
    /* function greet(){                // we should not use function keyword to declare a method in classes
        console.log('function')
    } */
    greet=()=> console.log('Hello',this.name) // arrow function can be used

    greet(){
        console.log('Hello',this.name) // usual syntax for methods 
    }
}
let per1 = new PersonC('Sree',40)
console.log(per1)
per1.greet()