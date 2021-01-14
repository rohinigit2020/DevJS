//Promise is a built in Object, resolve is a function to be performed ,reject is a failure 
let calc = new Promise((resolve,reject) =>{
    let a = 10
    let b = 12
    if (a+b === 21){
        resolve('Success')
    }else{
        reject('Failure')
    }

})
// then first catch later
calc.then((text)=> console.log(`Resolve promise message ${text}`)).catch((text)=> console.log(`Rejected promise ${text}`))
