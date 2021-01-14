arr1 = [1,2,3,4,5]
arr2 = ['a','b','c','d','e']
arr3 = [true,false]
console.log('arr1 = ',arr1)
console.log('arr2 = ',arr2)
console.log('arr3 = ',arr3)

let arrConcat =[]
arrConcat = arr1.concat(arr2,arr3) 
console.log('arrConcat = ',arrConcat)
let arrSpread = []
arrSpread = [...arr1,...arr2,...arr3]
console.log('arrSpread = ',arrSpread)

