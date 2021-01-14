let maths = require('./fileA1')
console.log(maths.a)
console.log(maths.b)
console.log(maths.add(maths.a,maths.b))
console.log(maths.mul(maths.a,maths.b))

//other form of import

let {a,b,add,mul} = require('./fileA1')
console.log(a)
console.log(b)
console.log(add(a,b))
console.log(mul(a,b))
