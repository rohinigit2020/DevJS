/* import {readFile} from 'fs'

readFile('fox.txt',{encoding: "utf8"},(err,data) => {
    if(err){
        console.log("ERROR MESSAGE IS ",ERR)
    }
    console.log(data)
}
)
 */
// this is old version and works without "type": "module"

const {readFile, readFileSync} = require('fs')

/* readFile('fox.txt','utf8',(err,data)=>{
     if(err){
         console.log(err)
     }
     console.log(data)
 })
 */
const dataFile = readFileSync('fox.txt','utf8')

//console.log(dataFile)
//both file write and read
const {writeFile} = require('fs')

writeFile('newFile.txt', dataFile ,err => {
    if(err){
        console.log(err)
    }
    console.log('file written')
})

// to make these two synchronous we can use writeFileSync()
