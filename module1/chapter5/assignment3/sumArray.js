let array =  [897, 125, 347, 1256, 12172, 44353]

let sum = function(arr){
    let tot = 0;
    for (i=0; i< arr.length; i++){
        tot += arr[i];
    }
    return tot;
}
console.log(`Sum of all the elements of the array [${array}] is ${sum(array)}`)

let sumForEach = function(arr){
    let tot = 0;
    arr.forEach(function(a) {
        tot += a
    });
    return tot
}
console.log(`Sum of all the elements of the array [${array}] is ${sumForEach(array)}`)

let sumForOf = function(arr){
    let tot = 0;
    for(a of arr){
        tot += a;
    }
    return tot
}
console.log(`Sum of all the elements of the array [${array}] is ${sumForOf(array)}`)
