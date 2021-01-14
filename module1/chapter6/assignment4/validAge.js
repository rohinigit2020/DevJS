var data = [
    {name:'Daniel',age: 45},
    {name:'John',age: 34},
    {name:'Robert',age: 39},
    {name:'Jen',age: undefined},
    {name:'Rob',age: undefined},
];
console.log(data)

let validAge = data.filter((a) => a.age != undefined)
console.log(validAge)