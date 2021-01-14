import {readFile} from 'fs'

readFile('newFille.txt','utf8',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
})

// there is readFileSync which makes it synchronous
