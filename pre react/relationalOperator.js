//  >,<,=,<=,>=,==,=== are some of relational operators
// relational operators give boolean result.

//filtering

const isEven = x=> x%2 ==0

console.log(isEven(2))

console.log([1,2,3,4,5,6,7].filter(isEven))
