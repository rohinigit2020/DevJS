// try catch syntax error
try{
    consol.log('hello')
}
catch (error){
    console.log(`error is ${error}`)
}
console.log("out of try catch")
// try catch runtime error
try{
    console.log(1-a)
}
catch (error){
    console.log(`error is ${error}`)
}
console.log("out of try catch")