import {writeFile } from 'fs'

let content = "I am learning javasript from Axone every Saturday and Sunday"

writeFile('file.txt', content,(err)=>{
    if(err){
        console.log('Error occured '+err)
    }
    console.log('File saved successfully')
})
// there is writeFileSync which makes it synchronous
