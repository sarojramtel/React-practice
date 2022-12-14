// let arr=[1,5,'hello',3.14];
// console.log(arr[1])

person1={
    name: 'Elon Musk',
    netWorth :213,
    company : 'Tesla',
    nationality :'American'
}

updateObj=(details)=> ({...person1,...details})

console.log(updateObj({age:40}))

