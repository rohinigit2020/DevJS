/* this is an asynchronous function
let print = (text) => {
    setTimeout(()=> console.log(text),Math.floor(Math.random()*3000))
}

print('hello')
print('Rohini')
print('Good morning')*/

//lets make it into synchronous using call backs

let printS = (text, callback) => {
    setTimeout(()=> {console.log(text)
        callback()},Math.floor(Math.random()*6000))
}

printS('hello',()=>{
    printS('Rohini',() =>{
        printS('Good Morning',()=>{})
    })})

