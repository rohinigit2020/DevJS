// call back function

function greet(name,callback ){
    console.log('hi'+' '+ name)
    callback()
}
function callMe(){
    console.log("I am callback function")
}

greet('Axone',callMe)// when ever we are passing a function as an argument we should not give paranthesis