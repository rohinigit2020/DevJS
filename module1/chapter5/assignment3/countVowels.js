// function to count vowels in a given string

function countVowel(str){
    let count = 0;
    for (i = 0; i < str.length ; i++){
        char = str.charAt(i);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ){
            count += 1
        }
    }
    return count
}
let string1 = 'quick brown fox'
let string2 = 'jumps over the lazy dog'
console.log("number of vowels in the string is",countVowel(string1))
console.log("number of vowels in the string is",countVowel(string2))


let vowels = 'aeiou'
function vowelCount(str){
    let count = 0;
    for (let i = 0; i< str.length; i++){
        if(vowels.includes(str[i])){
        count+=1
        }
    }
    return count
}
console.log(vowelCount(string1))
console.log(vowelCount(string2))