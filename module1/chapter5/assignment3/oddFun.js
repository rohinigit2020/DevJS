// function to check if the number is Odd or not

function isOdd(number){
    if(number % 2 != 0){
        return true
    }else {
        return false
    }
}

let num1 = 12;
let num2 = 13;
let num3 = 27;
let num4 = 0;
console.log(`${num1} is ${isOdd(num1)}`);
console.log(`${num2} is ${isOdd(num2)}`);
console.log(`${num3} is ${isOdd(num3)}`);
console.log(`${num4} is ${isOdd(num4)}`);
