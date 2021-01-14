// super hero class

class Superhero{
    constructor(firstName,secondName){
        this.fName = firstName
        this.sName = secondName
    }
    getFullName(){
        return `${this.fName} ${this.sName}`
    }
}

let superhero = new Superhero('John','Doe')
console.log(superhero.getFullName())