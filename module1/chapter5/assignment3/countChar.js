// function to count charecter in a given string

function countChar(str,letter){
    let count = 0;
    for (i = 0; i < str.length ; i++){
        char = str.charAt(i);
        if (char == letter ){
            count += 1
        }
    }
    return count
}

function charCount(str,letter){
    let count =0;
    for(i=0;i<str.length; i++){
        if(str[i] == letter){
            count +=1
        }
    }
    return count
}
let string1 = 'quick brown fox'
let string2 = 'jumps over the lazy dog'
console.log("number of vowels in the string is",countChar(string1,'o'))
console.log("number of vowels in the string is",countChar(string2,'o'))
console.log("number of vowels in the string is",charCount(string1,'o'))
console.log("number of vowels in the string is",charCount(string2,'o'))

