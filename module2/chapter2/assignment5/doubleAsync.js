function  double(x) {
    return new Promise( resolve =>{
        setTimeout(()=>{
            console.log('doubling',x)
            resolve(x*2)
        },2000)
    })    
}
async function asyncDouble() {

    let sum = 0
    sum += await double(2)
    console.log(sum)
    sum += await double(4)
    console.log(sum)
    sum += await double(7)
    console.log(sum)
    sum += await double(10)  
    
    console.log(sum)

}
asyncDouble()