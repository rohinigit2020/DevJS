let day = 'sat';
// switch case compares === both value and data type
// case: can include any number of lines without curly brases
switch(day) {
    case 'mon':
        console.log(day, "is a weekday")
        break
    case 'tue':
        console.log(day, "is a weekday")
        break
    case 'wed':
        console.log(day, "is a weekday")
        break
    case 'thur':
        console.log(day, "is a weekday")
        break
    case 'fri':
        console.log(day, "is a weekday")
        break
    case 'sat':
        console.log(day, "is a weekend")
        break
    case 'sun':
        console.log(day, "is a weekend")
        break
    default :
        console.log(day, "is a weekday")
        break
}

// simplified
switch(day) {
    case 'mon':
    case 'tue':
    case 'wed':
    case 'thur':
    case 'fri':
        console.log(day, "is a weekday")
        break
    case 'sat':
    case 'sun':
        console.log(day, "is a weekend")
        break
    default :
        console.log(day, "is a weekday")
        break
}

