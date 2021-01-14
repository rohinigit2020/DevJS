// program to print a number triangle

let str = ''
for (i = 1; i < 8; i++) {
    str += i
    if(i == 3){
        continue
    }
    console.log(str)
}