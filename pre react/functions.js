
// function abc(){
//     return'abcdefgh'
// }
// console.log(abc())





// function identity(x){
//     return x;
// }

// console.log(identity(),identity(23),identity(4,5,56,7))

//function returning sum of string and numeric value.

// function add(x,y){
//     return x+y
// }

// console.log(add(5,6))
// console.log(add(5,'G'))


//returning object

// function process(x,y){
//     return{
//         sum :x+y,
//         product: x*y,
//         remainder: x%y,
//         quotient:x/y,
//         diff: x-y,
//     }
// }
// console.log(process(10,5))

//returning array
// function process(x,y){
//     return[x+y,x*y,x%y,x/y]
// }
// console.log(process(10,5))

//practice session

function process(x,y){
    return{
        key1 : x+y,
        key2 : x-y,
    }
}

let firstObject=process(2,3)
console.log(firstObject)

console.log(firstObject.key1)