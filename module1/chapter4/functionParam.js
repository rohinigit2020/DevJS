// let parameters upto  5 parameters as a good practice
// javascript defaults all the values as undefined

function greet(name){
    console.log('hello',name)
}

function greetMore(firstName,lastName){
    console.log('hello',firstName,lastName)
}

greet('Rohini')
greet(10)
greet('everyone!!')
greet('Good Morning')
greetMore('Rohini','Reddy')
greetMore('Rohini')
greetMore()// prints hello undefined undefined