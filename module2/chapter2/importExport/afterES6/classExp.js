class Person{
    greet(){
        console.log("Hello ... All from Person class")
    }
}

//export default Person

// we can export an object instead of whole class

 //export default new Person()

 export {Person}
