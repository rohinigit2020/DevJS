/* let print = () => console.log('third')
console.log('first')
console.log('second')
setTimeout(print,5000) // 5 seconds // this does not wait to do third to finish but continues to fourth and fifth
console.log('fourth')
console.log('fifth') */

/* another asynchronus  start playing and stop are randomly asynchronous
video = (text)=>{
    setTimeout(()=>console.log(text),Math.floor(Math.random() * 10000))
}
video('start')
video('playing')
video('stop')*/

// making asynchronous video to synchronous by using callback functions
video = (text, callback)=>{
    setTimeout(()=>{
        console.log(text)
        callback()
    },Math.floor(Math.random() * 10000))
}
video('start',()=> video('playing',()=>video('stop',()=>{}))) //()=>{} is a dummy function call as an argument

