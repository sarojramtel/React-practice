    // const square = x => x*x
    // console.log(square(2))
    // console.log([1,2,3,4,5].map(square))

//map function takes function as argument, maps each element of array into function and returns each value in the form of array.

    //console.log([1,2,3,4,5].map(a=> a*a)) //array mapping using arrow function.


//filter function shows only the elements that give true boolean logic.

// every() function checks if all the elements pass the test.

//learn arrow function properly - note

// some() function checks if at least 1 is true.

//find() function finds the element that fits the condition

    // console.log([1,2,3,4,5].find(x=>x==3))

//findIndex()

//findLast()

//findLastIndex()

//finding the sum of array

    sum=0
    arr = [1,2,3,4,5]
    for(i = 0; i<arr.length;i++){
        sum = sum + arr[i]
    }
    console.log(sum)


    sum=0
//for each
    arr.forEach(x => sum = sum + x)

    console.log(sum)

//displaying indiviudal element of array using forEach

    arr.forEach(x => console.log(x))

//includes()

   console.log(arr.includes(0))

//indexOf()- we have to send object.         vs      findIndex()- we give condition and the true condition will show index.

//pop() and push() - like stack 
console.log(arr.pop()) ///gives element that has been popped.

console.log(arr.push(7)) //gives total number of element after being pushed.


//reduce() a-accumulator and v- is value we use.
arr2 = [2,4,6]

const adder=(a,v)=>a+v

console.log(arr.reduce(adder))

console.log(arr2.reduce(adder))




