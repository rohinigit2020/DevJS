/* let video=(text)=>{
    setTimeout(()=> {console.log(text)
},Math.floor(Math.random()*3000))
}

video('start')
video('play')
video('stop')
video('rewinding') */
//lets make it synchronous using promises
console.log('After using promises')
let videoPromise=(text)=>{
    let promisefun = new Promise((resolve,reject) =>
    {
        setTimeout(()=> {
            console.log('Running',text)
            resolve('Success')
        },Math.floor(Math.random()*3000))
    } 
    )
    return promisefun
}
videoPromise('Start')
.then((text)=>videoPromise('Playing'))                
.then((text)=>videoPromise('Stop'))
.then((text)=>videoPromise('Rewind'))
