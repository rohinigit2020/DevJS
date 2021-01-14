//promise with error

const prom = new Promise((resolve,reject)=>{
    reject(new Error('This is an Error'))
})
prom.catch((error)=>console.log("error message is ",error)) // this gives an error cant print object error
prom.catch((error)=>console.log("error message is "+error)) // error here is an object so we have to convert to string using + or .message
prom.catch((error)=>console.log("error message is ",error.message))