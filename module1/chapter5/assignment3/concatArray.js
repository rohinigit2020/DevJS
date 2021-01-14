// program to join array elements wit seperator '='
let array = ['Apple', 'Orange', 'Mango']
//console.log(array.join('='))
str = ''
for (i=0; i< array.length; i++){
    str += array[i]   
    if (i <array.length-1){
        str += '='
    }
}
console.log(str)
