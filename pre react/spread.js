//spread in array
arr = [1,2,3,4,5]

arr2 = [...arr,2,3,4]

arr3 = [...arr,...arr2,4,5]

// console.log(arr3)

person={
    name: 'Elon Musk',
    netWorth :213,
    company : 'Tesla',
    nationality :'American'
}

person1=person

person1 = person

person1 = {...person1}

person1 = {...person1,name:'new',company:'ABC'}

person2 = {newKey:'test'}

console.log(person)