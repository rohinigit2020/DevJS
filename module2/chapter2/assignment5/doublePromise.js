function  double(x) {
    return new Promise( resolve =>{
        setTimeout(()=>{
            console.log('doubling',x)
            resolve(x*2)
        },2000)
    })    
}
/* async function asyncDouble() {
    let result = await double(2)
    console.log(result)
}
asyncDouble() */
//let result = double(2) // outputs Promise { <pending> }
//console.log(result)

let result = double(2)
result.then(text => console.log(text))