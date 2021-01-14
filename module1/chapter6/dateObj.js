// date is a default class in java script
// we can instantiate date with new keyword

let todayDate = new Date()
console.log(todayDate) // yyyy-mm-dd
// date object of a perticular date
let pastDate = new Date('1985-10-28')
console.log(pastDate)

// skip day
let noDayDate = new Date('1985-10') // first day
console.log(noDayDate)
let noMonthDate = new Date('1985') // first day
console.log(noMonthDate)
let noYearDate = new Date() // first day
console.log(noYearDate)

// short format mm/dd//yyyy
let shortDate = new Date('10/02/1980')
console.log(shortDate)

// new Date(y,m,d,h,m)
let newDate = new Date(2020,0,26,9,30,35,766) // 0 is january
console.log(newDate)

// getYear() getMonth() getDay()

let date = new Date()
console.log(date)
console.log(date.getFullYear())
console.log(date.getMonth()) // 11 for december
console.log(date.getDay()) // day of week sunday = 0
console.log(date.getDate())
console.log(date.getTime()) // time in milliseconds
console.log(date.getHours())