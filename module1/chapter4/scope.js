//global

let firstName = 'Rohini'

function greet(){
    console.log('inside function greet',firstName)
    firstName = 'Reddy'
}

greet()
console.log('hello',firstName)