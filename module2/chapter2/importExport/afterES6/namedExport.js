//multiple exports have no default key word
//we need to have same name
// we must use curly braces

let institute = "Axone"

let greet =()=> "hello good morning from Axone"

export {institute,greet}

// we can use one default exports along with multiple exports

let age = 35

export default age;

// aliased for named exports

let mylongEmail = "abc@abc.com"
export {mylongEmail as email}

// wild cards

