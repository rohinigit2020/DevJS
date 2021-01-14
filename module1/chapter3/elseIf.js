let day = 'thur';
// if , else and else if can have a single line of code without curly braces{}
// if there is more than one line of code we should use curly braces{}
if (day === 'mon'){
    console.log(day, 'is weekday')
}else if (day === 'tue'){
    console.log(day, 'is weekday')
}else if (day === 'wed'){
    console.log(day, 'is weekday')
}else if (day === 'thur'){
    console.log(day, 'is weekday')
}else if (day === 'fri'){
    console.log(day, 'is weekday')
}else if (day === 'sat'){
    console.log(day, 'is weekend')
}else if (day === 'sun'){
    console.log(day, 'is weekend')
} else{
    console.log(day , " is not a valid day")
}

//simplified code

if (day === 'mon' || 'tue' || 'wed' || 'thur' || 'fri'){
    console.log( day, " is a weekday")
} else if (day === 'sat' || 'sun'){
    console.log(day, " is a weekend")
}else{
    console.log(day , " is not a valid day")
}