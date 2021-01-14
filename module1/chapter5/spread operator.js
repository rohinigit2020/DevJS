let arr1 = [1,2,3]
let arr2 = []
//arr2 = arr1 // both arr1 and arr2 are pointing to the same array here, no new array is created 
arr2 = [...arr1] // it will create a new array and takes the valeus of array1 into it
console.log('arr1=',arr1)
console.log('arr2=',arr2)

arr1.push(4) // one push into array 1 changes all the arrays

console.log(arr1)
console.log(arr2)

let arr3 = []
// array concatination using spread operator
arr3 = arr3.concat(arr1)
let arjoin= arr3.join('=')
//arr3  = [...arr1,...arr2]
console.log('arr3=',arr3)
console.log('arjoin=',arjoin)

// array expansion using spread operator
 let arr4 = []
 arr4 = [56,78,89,...arr1,23,45,67] // the spread operator can be used any where 
 console.log(arr4)

 // spread operator for objects
 let obj1 = {
     item1 : 23,
     item2 : 34,
     item3 : 45
 }

let obj2 = {}
obj2 = {...obj1} // cloned object
console.log(obj2)

// min and max functions of arrays
let m = Math.min(19,4,6,8) 
console.log(m)
console.log(arr4)
// min of array Math.min(...arr4)
console.log(Math.min(...arr4))
console.log(Math.max(...arr4))