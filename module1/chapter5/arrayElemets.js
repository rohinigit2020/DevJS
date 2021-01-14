let fruits = ['Apple', 'Mango', 'Orange','Grapes']

// traditional for
console.log(fruits.length)
for (let i =0; i < fruits.length ;i++){
    console.log(fruits[i])
} 

//inbuilt foreach
let iterate = function(element,index){
    console.log(element,index)
}
console.log('using foreach with iterate function')
fruits.forEach(iterate)

console.log('using foreach directly using function in foreach')
fruits.forEach(function(element,index,num){
    console.log(element,index,num)
})

//for of only for arrays
console.log('using for of')
for(element of fruits){
    console.log(element)
}