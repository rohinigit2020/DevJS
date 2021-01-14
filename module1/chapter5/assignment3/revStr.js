// program to reverse all the charecters of a string

let str = 'ABCD'
arr = str.split('');
revArr = arr.reverse()
strRev = revArr.join('')
console.log(`The string ${str} is reversed as ${strRev}`)

//or
let revStr = str.split('').reverse().join('')
console.log("new string is",revStr)

let finalword = ''
for (i= str.length-1; i>=0; i--){
    finalword += str[i]
}
console.log(finalword)