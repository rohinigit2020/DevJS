class Person{
    constructor(fName,lName){
        this.firstName = fName
        this.lastName = lName
    }
    fullName(){
        return(`${this.firstName} ${this.lastName}`)
    }
}

export default Person
