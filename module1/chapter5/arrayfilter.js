/* let arr = [1,2,3,4,5,6,7,8,9]

let evenArr = []
// usual way of filtering
for(a of arr){
    if(a%2 == 0){
        evenArr.push(a)
    }
}
console.log(evenArr) */

//create a function to return true if the given nunber is even or else false
 
// no need of paranthesis (single parameter) no need of flower braces(single statement) no need of return keyword
//let isEven = n =>n%2 == 0 

//console.log(isEven(10))

let arr = [1,2,3,4,5,6,7,8,9]

//let evenArr = arr.filter(isEven)
// filter applies the call back function boolean conditon on all the array elements and returns only true elements to the new array
let evenArr = arr.filter(n => n%2 == 0) // single line
console.log(evenArr)

// filter the array to get all the numbers greater than 200
let array = [422,123,4534,343,11,12,35,685,1414]
let more200 = array.filter(num => num > 200)
console.log(more200)