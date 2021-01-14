// async await function

let promise = new Promise( function (resolve,reject){
    setTimeout(function(){
        if(2==3){
            resolve('Promise Resolved')
        
        } else {
            reject('Promise Rejected')
        }
    },4000)
    //return 'I am returned'
})
async function asyncFunc(){
    try{
    let result = await promise
    console.log(result)
    }catch(error){
        console.log(error)
    }
    
    console.log('Hello')
}

asyncFunc()