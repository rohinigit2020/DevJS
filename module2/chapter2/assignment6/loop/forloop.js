import {writeFile} from 'fs'

let num = '';
for(let i =0;i<= 10;i++){
    num += i +'\n'
}
writeFile('newFile.txt',num,(err)=>{
    if(err){
        console.log(err)
    }
    console.log('done')
})
