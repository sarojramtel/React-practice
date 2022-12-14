function getAverage() {
  // refactor with object destructuring
  const obj = { x: 3.6, y: 7.8, z: 4.3 };
  const { x, y, z } = obj; //destructuring
  // return Math.floor((x + obj.y + obj.z) / 3.0)
  return Math.floor((x + y + z) / 3.0); //after destructuring
}

//   console.log(getAverage())

function getAvgTemp() {
  // refactor with nested destructuring
  const weather = {
    location: "Toronto",
    unit: "Celsius",
    today: { max: 2.6, min: -6.3 },
    tomorrow: { max: 3.2, min: -5.8 },
  };
  // const maxToday = weather.today.max
  // const minToday = weather.today.min

  // const maxTomorrow = weather.tomorrow.max
  // const minTomorrow = weather.tomorrow.min

  //destructuring commented section above
  const {
    location,
    unit,
    today: { max: maxToday, min: minToday },
    tomorrow: { max: maxTomorrow, min: minTomorrow },
  } = weather;

  return {
    max: (maxToday + maxTomorrow) / 2.0,
    min: (minToday + minTomorrow) / 2.0,
    unit: weather.unit,
  };
}
// console.log(getAvgTemp());

function getFirstTwo() {
  // refactor with array destructuring
  const arr = [0, 1, 2, 3, 4, 5, 6, 7];
  // const firstItem = arr[0]
  // const secondItem = arr[1]
  const [firstItem, secondItem] = arr;

  const [a, b, , , fifth] = arr;

  return {
    firstItem: a,
    secondItem: b,
    fifth,
  };
}

// console.log(getFirstTwo());

function getElements() {
  // returns 1st, 2nd and last element from an array
  // refactor with skipped destructuring for arrays
  const arr = [0, 1, 2, 3, 4, 5, 6, 7];
  // const first = arr[0]
  // const second = arr[1]
  // const fifth = arr[4]

  const [first, second, , , , , , eighth] = arr;

  return {
    first: first,
    second: second,
    // fifth: fifth,
    eighth,
  };
}

// console.log(getElements())

function getSecondItem() {
  // refactor with nested destructuring of arrays
  const food = [
    ["carrots", "beans", "peas", "lettuce"],
    ["apple", "mango", "orange"],
    ["cookies", "cake", "pizza", "chocolate"],
  ];
  // const firstItem = food[0][1]
  // const secondItem = food[1][1]
  // const thirdItem = food[2][1]
  const [[, firstItem], [, secondItem], [, thirdItem]] = food;

  return {
    first: firstItem,
    second: secondItem,
    third: thirdItem,
  };
}

// console.log(getSecondItem())

function nestedArrayAndObject() {
  // refactor this to a single line of destructuring...
  const info = {
    title: "Once Upon a Time",
    protagonist: {
      name: "Emma Swan",
      enemies: [
        { name: "Regina Mills", title: "Evil Queen" },
        { name: "Cora Mills", title: "Queen of Hearts" },
        { name: "Peter Pan", title: `The boy who wouldn't grow up` },
        { name: "Zelena", title: "The Wicked Witch" },
      ],
    },
  };
  // const title = info.title
  // const protagonistName = info.protagonist.name
  // const enemy = info.protagonist.enemies[3]
  // const enemyTitle = enemy.title
  // const enemyName = enemy.name

  const {
    title,
    protagonist: {
      name: protagonistName,
      enemies: [,,, { name: enemyName, title: enemyTitle }],
    },
  } = info;

  return `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`;
}

console.log(nestedArrayAndObject());
