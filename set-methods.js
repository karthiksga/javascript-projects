// JavaScript Set examples

const a = new Set([1, 2, 3, 4]);
const b = new Set([3, 4, 5, 6]);

// 1) Intersection: values in both sets
const intersection = a.intersection(b);
console.log([...intersection]); // [3, 4]

// 2) Union: all unique values from both sets
const union = a.union(b);
console.log([...union]); // [1, 2, 3, 4, 5, 6]

// 3) Difference: values in a but not in b
const difference = a.difference(b);
console.log([...difference]); // [1, 2]