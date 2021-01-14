function sum(a,b){
    console.log(a+b);
}
function sum1(a,b){
    let tot = a+b;
    return tot
}
let addition = sum(3,4);
console.log(addition) // undefined because sum is not ruturning any value
let addition1 = sum1(5,6);
console.log(addition1)