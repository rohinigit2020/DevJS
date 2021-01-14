let studentRecords = [
    {name:'John',id:123,marks:98},
    {name:'Baba',id:101,marks:23},
    {name:'yaga',id:200,marks:45},
    {name:'Wick',id:115,marks:75},
]

console.log(studentRecords)
// for loop
console.log(`using For loop:students whose marks are greater than 40 and id greater than 110 are`)
for(r=0;r<studentRecords.length;r++) {
    if((studentRecords[r].id > 110) && (studentRecords[r].marks > 40)){
        console.log(`${studentRecords[r]}`)
        console.log(studentRecords[r])

    }
}
//for of
console.log(`using For Of loop:students whose marks are greater than 40 and id greater than 110 are`)
for (r of studentRecords){
    if((r.id > 110) && (r.marks > 40)){
        //console.log(`${studentRecords[r]}`)
        console.log(r)

    }
}
// for Each
console.log(`using For Each:students whose marks are greater than 40 and id greater than 110 are`)
studentRecords.forEach(r => {
    if((r.id > 110) && (r.marks > 40)){
        //console.log(`${studentRecords[r]}`)
        console.log(r)
    }
})
// filter method
let stuFilter = studentRecords.filter(stu => stu.marks>40 && stu.id>110)
console.log(stuFilter)