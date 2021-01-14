
//lets make it synchronous using asyncawits
console.log('After using promises')
let video = (text) =>{
    let promisefun = new Promise((resolve,reject) =>{ // first arugument is always considered as resolve
        setTimeout(()=> {
            console.log(text)
            resolve()                   // if we pass some argument through resolve it will we returned to promisefun
        },Math.floor(Math.random()*3000))
    } )
    return promisefun
}

let videoMode = async function(){
    await video('start')
    await video('playing')
    await video('stop')
    await video('rewind')
}
videoMode()