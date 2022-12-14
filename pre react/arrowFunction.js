// const add = (x,y) => x+y
// function add2(x,y){
//     return x+y
// }

// console.log(add(1,2))
// console.log(add2(1,2))

//arrow function is represented by =>
//left ma k liney, right ma k diney vanera sochne

//changing functions from functions.js

// const abc = () => 'abcdefgh'
// console.log(abc())

// const identity = (x) => x

// console.log(identity(5))

// const add = (x,y) => (x+y)

const process = (x,y) => ({sum:x+y, product:x*y, remainder:x%y, quotient:x/y, diff:x-y,})
console.log(process(4,5))


//note for arrow function for return remember ({}) while returning object
//{} represents grouping of statements, and assumes object keys like sum,products,remainder to be statements
// or you can return like: (x,y) => {return{sum:x+y, product:x*y }}


((x, y) => ({
    sum: x + y,
    product: x * y,
    remainder: x % y,
    quotient: x / y,
    diff: x - y,
  }))(2,3)
  //what we did above was declared the function and called it in same one.
  