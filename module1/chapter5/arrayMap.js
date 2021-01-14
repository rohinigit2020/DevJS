// let array = [1,2,3,4,5,6,7,8,9]

//let square = (num) => num * num
// map applies the call back function on all the elements of the array
//squArr = array.map(square)

//console.log(squArr)
// person objects
let per1 ={
    name : 'Rohini',
    gender : "Female",
    age : '35'
}
let per2 ={
    name : 'Abhi',
    gender : "male",
    age : '10'
}
let per3 ={
    name : 'Nandu',
    gender : "male",
    age : '7'
}
 
// let's write traditional for loop to convert object array into string array
/* 
let perArr = [per1,per2,per3]
let newPerArr = []
for (e of perArr){
   newPerArr.push(`${e.name} ${e.gender} ${e.age}`)
}
console.log(newPerArr) */

// map for the array
// first write call back function

let perArr = [per1,per2,per3]
//let perFun = (a)=> `${a.name} ${a.gender} ${a.age}`
//let newPArr =perArr.map(perFun)
// single line function
let newPArr = perArr.map((a)=> `${a.name} ${a.gender} ${a.age}`)
console.log(newPArr)

 