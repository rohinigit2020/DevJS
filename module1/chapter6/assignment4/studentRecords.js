let studentRecords = [
    {name:'John',id:123,marks:98},
    {name:'Baba',id:101,marks:23},
    {name:'yaga',id:200,marks:45},
    {name:'Wick',id:115,marks:75},
]

console.log(studentRecords)
// for loop
console.log(`using For loop:students whose names are capitalised`)
for(i=0;i<studentRecords.length; i++){
    console.log( studentRecords[i].name.toUpperCase())
    
}

// for of loop
console.log(`using For Of loop:students whose names are capitalised`)
for(r of studentRecords){
    console.log(r.name.toUpperCase())
}

// for each loop
console.log(`using For Each loop:students whose names are capitalised`)
studentRecords.forEach(r => {
    console.log(r.name.toUpperCase())

});

// using map
console.log(`using Map:students whose names are capitalised`)
studentCapital = studentRecords.map(r => r.name.toUpperCase())
console.log(studentCapital)


