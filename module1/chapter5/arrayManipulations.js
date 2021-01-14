let fruits = ['Apple','Orange','Mango','Banana']
//fruits[2] = 'Mango'; // Add an element

////fruits[1] = 'Banana'; // Update an element

//console.log(fruits)

//console.log(fruits.concat(['Apricot', 'Grapes'], ['Guava']));
//console.log(fruits.reverse())
//console.log(fruits.indexOf('Orange'))
fruits.push('Pear');
fruits.push('Grapes')
console.log(fruits)
fruits.unshift('Guava')
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.shift()
console.log(fruits)

let numbers = [2, 3, 4, 5, 8, 3, 2, 12, 123, 1, 34]
console.log(fruits.sort())

console.log(fruits.join(','))

console.log(fruits.slice(1, 4))

//Sorting
numbers.sort(function(a, b){
    return a-b;
}) 
//numbers.sort()
console.log(numbers)

