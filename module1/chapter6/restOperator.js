let printNums = (x) => console.log(x)

printNums(2)
printNums(2,4)
//to use unknown number of parameters for a function we have to use rest operator
let printMoreNums = (...x) => console.log(...x) // the x has become an array now

printMoreNums(2)
printMoreNums(2,4)
printMoreNums(2,4,7)
printMoreNums(2,6,7,8)
printMoreNums(2,6,4,5,6,8,'gh')
// in case of multiple operator rest operator must be the last operator

//printNameNumbers = (x,...y) => console.log(x,...y) // will throw an error
printNameNumbers = (x,...y) => console.log(x,...y)

printNameNumbers('rohini',5)