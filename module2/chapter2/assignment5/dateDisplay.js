// displaying date every minute
/* the least timeout will be printed first
setTimeout(()=> console.log('Third'),2800)
setTimeout(()=> console.log('Second'),1200)
setTimeout(()=> console.log('First'),5000)
 */

// using setTimeOut
/* 
setTimeout(()=>{
    console.log('First',new Date())
    setTimeout(()=>{
        console.log('Second',new Date())
        setTimeout(()=>{
            console.log('Third',new Date())
        },60000)    
    },60000)
},60000) 
*/
// using while loop
/*let d = new Date()
let min = d.getSeconds()
console.log(min)

 while(min){
     newD = new Date()
    if(newD.getSeconds() == (min+4)){
        console.log('inside if ',newD.toLocaleTimeString())
    } 
} */

// sridhars answer recurssive function
function printDate(){
    let date = new Date()
    console.log(date.toLocaleTimeString())
    setTimeout(printDate,3000)

}
printDate() 
