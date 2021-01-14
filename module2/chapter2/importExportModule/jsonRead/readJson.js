import file from "./example.json"

console.log(file)

console.log(file.name)
console.log(file.age)
console.log(typeof file.email)
console.log(typeof file.car)
console.log(file.car)


for (let i = 0; i< file.car.length; i++){
    console.log(file.car[i])
} 

/* for (i of file.car){
    console.log(i)
} */