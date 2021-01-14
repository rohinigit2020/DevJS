import {appendFileSync} from 'fs'


for(let i =0;i<= 10;i++){
    appendFileSync('newFileCopy.txt',i.toString()+'\n')

}
