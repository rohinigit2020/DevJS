// program to repeat the text to numer of times given

function repeat(s,n){
    let str = ''
    for (i=0; i< n; i++){
        str += s
    }
    return str
}
let string = "SriRam";
console.log('repeating 5 times');
console.log(repeat(string,5))
console.log('repeating 10 times');
console.log(repeat(string,10))
