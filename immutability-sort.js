var arr = [5, 3, 8, 1, 2];
var sortedArr = arr.sort();
console.log(sortedArr); // [1, 2, 3, 5, 8]
console.log(arr); // [1, 2, 3, 5, 8] - The original array is also sorted

var arr2 = [5, 3, 8, 1, 2];
var sortedArr2 = arr2.toSorted();
console.log(sortedArr2); // [1, 2, 3, 5, 8]
console.log(arr2); // [5, 3, 8, 1, 2] - The original array remains unchanged

var reverseArr2 = arr2.toReversed();
console.log(reverseArr2); // [2, 1, 8, 3, 5]
console.log(arr2); // [5, 3, 8, 1, 2] - The original array remains unchanged

var splicedArr2 = arr2.toSpliced(1, 2, 9, 10);
console.log(splicedArr2); // [5, 9, 10, 1, 2]
console.log(arr2); // [5, 3, 8, 1, 2] - The original array remains unchanged