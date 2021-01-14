let studentRecords = [
    {name:'John',id:123,marks:98},
    {name:'Baba',id:101,marks:23},
    {name:'yaga',id:200,marks:45},
    {name:'Wick',id:115,marks:75},
]
//for loop
let stu50 =[]
for(s=0; s<studentRecords.length; s++){
    if (studentRecords[s].marks > 50){
        stu50.push(studentRecords[s].name)
    } 
}
console.log('using for loop',stu50)
//for of
stu50ForOf = []
for(s of studentRecords){
    if (s.marks > 50){
        stu50ForOf.push(s.name)
    }
}
console.log('using for of',stu50ForOf)
//for Each
stu50ForEach =[]
studentRecords.forEach(s => {
    if (s.marks > 50){
        stu50ForEach.push(s.name)
    }   
})
console.log('using for each',stu50ForEach)
/*let stuMarks50 = studentRecords.filter(s=> s.marks >50)
let stu50Names = stuMarks50.map(stu => stu.name)
console.log(stuMarks50)
console.log(stu50Names)*/
let stuMarks50 = studentRecords.filter(s=> s.marks >50).map(stu => stu.name)
console.log('using filter and map',stuMarks50)
