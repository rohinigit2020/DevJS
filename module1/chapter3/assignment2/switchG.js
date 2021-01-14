// switch case

let grade = 'C';
let result = 1;

switch (grade){
    case 'A' :
        result += 10;
        break;
    case 'B' :
        result += 9;
        break;
    case 'C' :
        result += 8;
        break;
    default :
        result += 0;
}

console.log('Result  is ', result);