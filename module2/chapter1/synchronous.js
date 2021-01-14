// making asynchronous video to synchronous by using callback functions
video = (text, callback)=>{
    setTimeout(()=>{
        console.log(text)
        callback()
    },Math.floor(Math.random() * 10000))
}
video('start',()=> video('playing',()=>video('stop',()=>{}))) //()=>{} is a dummy function call as an argument

