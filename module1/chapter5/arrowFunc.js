

let greet = () =>{
    console.log('hello every one')
    let myName = () =>{
        console.log('Rohini')
    }
    myName()
}
greet()

let square = (a) =>{
    return a*a;
}

console.log(square(3))
// single line arrow functions we can remove curly braces
let greetings = ()=> console.log('hello I am a single line arrow function')

greetings()
// single line arrow function will return the single line without a return statement
 let mul = (a,b) => a*b 

 console.log(mul(8,9))

 // if we need return statement we need to include curly braces
 let div = (a,b) => {return a/b}

 console.log(div(5,2))

 // if we have single parameter we can remove the parameter also
  let print = name => console.log('may name is',name) 

  print('rohini')