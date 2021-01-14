import {appendFile} from 'fs'


//Append file can create a file if it does not exist already

let content = "I am learning javasript from Axone every Saturday and Sunday\nWe have assignment evening on Thursday"

appendFile('newFile.txt', content,(err)=>{
    if(err){
        console.log('Error occured '+err)
    }
    console.log('File saved successfully')
})
