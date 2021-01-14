//Default export
/* let name = 'Rohini'
export default name */

//export default 'Rohini';

// only one default export
// we dont have to use same name in the imports
//while importing default we should not use curly braces

/* let greet = ()=> "hello all"

export default greet */

function greet(){
    return "Hello all"
}
export default greet
