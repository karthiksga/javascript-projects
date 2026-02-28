var users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
];

var groupedByAge = Object.groupBy(users, user=> user.age);
console.log(groupedByAge);