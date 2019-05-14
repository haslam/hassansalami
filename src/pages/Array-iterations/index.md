---
title: Array Iterations Methods
date: '2019-04-27T10:30:16.121Z'
tag: 'Dev'
author: 'Hassan'
---

![Array iteration methods](/repeat.jpg)

###Array.entries()

*To return a new Array Iterator object that contains the key/value pairs for each index in the array.*

```javascript
const colors = [“blue”, “green”, “orange”, “black”];
let colorIt = colors.entries();
console.log(colorIt.next().value); // [0, “blue”]
console.log(colorIt.next().value); // [1, “green”] 

for (const [index, color] of colorIt) {
  console.log(index, color);
}
// 2 “orange”
// 3 “black”
```

**Note:** since colorIt has been iterated twice already, iterating in the ‘for loop’ continues from the last iterated element in the array and finishes when it gets to the end of the array. Unless you iterate on a new variable or the array itself i.e for (const [index, color] of colors.entries()).


###Array.every()

*To test whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. Returns true when used on an empty array irrespective of the condition. It doesn’t mutate the array it’s called on.*

**Syntax:** array.every(callback[, thisArg]) where callback(element, index, array) accepts three arguments - value of the elements, index of the element (optional), and array object being traversed (optional); and thisArgs, if provided is used as the callback’s ‘this’ value.

**E.g.,**

To test whether all the array elements are greater than the length of the array

```javascript
const testNumbers = [4, 5, 4, 6, 2];
testNumbers.every(num => num > testNumbers.length) 
// true  -- as testNumbers.length is 5, element 6 is > than 5.

//Say, to make testNumbers.length grow to 8
testNumbers.push(...[1, 3, 7]); 
console.log(testNumbers.every(num => num > testNumbers.length));
// false -- max element is 7 which is < 8.
```

###Array.filter()

*To create a new array with all elements that pass the test implemented by the provided callback function. It returns a new filtered array with elements that pass the given test, it does not mutate the array it was called on. If no elements pass the test, it returns an empty array.*

**Syntax:** var newArray = array.filter(callback(element[, index[, array]])[, thisArg]); where element is the current element being processed in the array; index (optional) is the index of the current element; array (optional) is the array in which filter was called upon; thisArg (optional) is the value to use as ‘this’ when the callback is being executed.

```javascript
const filteredNums = [10, 20, 30, 40, 50, 60].filter(value => value >= 25);
// filteredNums is [30, 40, 50, 60]

const riceType = [“white”, “brown”, “basmati”, “jasmine”];
const riceFilter = riceType.filter(rice => rice.toLowerCase().indexOf(‘as’) !== -1);
console.log(riceFilter) 
// [“basmati”, “jasmine”]
console.log(riceType.filter(rice => rice.length < 6));
// [“white”, “brown”]
```

###Array.find()

*To return the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.*

**Syntax:** array.find(callback[, thisArg])

```javascript
console.log(riceType.find(rice => rice.indexOf(‘as’) === 1));
// basmati  -- returns first element matching the test i.e that contains ‘as’ in its characters.
```

###Array.findIndex()

*To return the index of the first element in an array that satisfies the provided testing function. If no elements passed the test, it returns -1.*

```javascript
const riceType = [“white”, “brown”, “basmati”, “jasmine”];
console.log( riceType.findIndex(rice => rice.toLowerCase().indexOf(‘as’) !== -1));
// 2 -- “basmati” being the first element to satisfy the test, its index is 2.
```

###Array.forEach()

*To execute a provided function once for each element in the array.*

**Syntax:** array.forEach(callback(currentValue[, index[, array]]) { … }[, thisArg]);
It executes the callback function once for each array element and always return an undefined value, hence, it’s not chainable.

**E.g.,**

```javascript
riceType.forEach((rice, index) => console.log(`${rice}’s index is ${index}`));
/* white’s index is 0
   brown’s index is 1
   basmati’s index is 2
   jasmine’s index is 3 
*/
```

###Array.keys()

*To return a new Array Iterator object that contains the keys for each index in the array.*

**E.g.,**

```javascript
const colorArr = [‘white’, ‘yellow’, ‘blue’, ‘brown’, ‘black’];

for (let key of colorArr.keys()) {
   key < 2 ? console.log(key) : null;
} 
/*
0
1
*/
```

**Note:** Array.keys() key iterator doesn’t ignore holes (empty element)

```javascript
const colorHole = [‘purple’, , ,].concat(colorArr);
// [‘purple’, , , ‘white’, ‘yellow’, ‘blue’, ‘brown’, ‘black’]
for (let hole of colorHole.keys()) {
   console.log(hole);
}
/* 0 
   1 
   2 
   3 
   4 
   5
   6
   7
 */ 
//The keys of the empty array elements/slots are also included.
```


###Array.map()

*To create a new array with the results of calling a provided function on every element in the calling array. It returns a new array with each element being the result of the supplied callback.*

**Syntax:** const newArray = array.map(callback(currentValue[, index[, array]]) { … }[, thisArg]);
Where currentValue is the current element being processed in the array; index (optional) is the index of the current element being processed; array (optional) is the array in which map was called upon; thisArg (optional) is the value to use as ‘this’ when executing the callback function.

**Note:** Using map when you do not intend to use it’s returned array and/or your supplied callback does not return a value is an anti-pattern and you should consider using Array.forEach() or for-of instead.

**E.g.,**

```javascript
const doubleSelf =  [1, 2, 3, 4, 5].map(num => num + num);
// [2, 4, 6, 8, 10]
//create a map Object
const map = Array.prototype.map;
const overStr = map.call("Hey boy there", cha => cha.charCodeAt(0));
console.log(overStr);

// convert numbers to array of numbers
const nums = 123456789
const convertedNum = Array.from(nums.toString()).map(Number);
console.log(convertedNum);
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// OR
nums.toString().split(‘’).map(Number);  for short.
```

**Note:** String.split() method split a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split. More about this will be covered in the post on String Day.


###Array.reduce()

*To execute a reducer function you’ve provided on each element of the array, resulting in a single output value as it’s return value.* 

**Syntax:** array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue]); where:
Callback: is your reducer function to execute on each element in the array. It takes four arguments:
Accumulator: accumulates the callback’s return values. It’s the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
currentValue: the current element being processed in the array.
currentIndex (optional): the index of the current element being processed in the array. Zero-based index if an initialValue is provided; otherwise starts from index 1.
Array (optional): the array reduce() was called upon.

initialValue (optional):  A value to use as the first argument to the first call of the callback; usually equals the first value of the accumulator, if provided, while currentValue equals the first value in the array. If no initialValue is supplied, the first element in the array will be used (i.e accumulator equals the first value in the array and currentValue will equal the second value in the array). Calling reduce() on an empty array without an initialValue will throw a TypeError.

**Note:** if initialValue is not provided, reduce() will execute the callback function starting at index 1 (while accumulator assumes index 0), skipping the first index. If initialValue is provided, it will start at index 0 (while accumulator assumes the provided initialValue).

**E.g.,**

```javascript
 // flatten an array with reduce - this could be achieved in various ways
  const biArray = [[0,1], [2,3], [4,5]];
  const biArr = biArray.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
  console.log(biArr); // [0, 1, 2, 3, 4, 5];

// Without reduce
function flatArray(array) {
  const newArr = [];
  array.forEach(arr => {
     If (Array.isArray(arr)) {
        newArr.push(...flatArray(arr));
    }
    else {
    newArr.push(arr);
}
  });
  return newArr
}

console.log(flatArray(biArray)); [0, 1, 2, 3, 4, 5];

 // OR better still, just use flat()

console.log(biArray.flat()); // [0, 1, 2, 3, 4, 5];

// Grouping array objects with reduce
const people = [
  { name: 'Alice', age: 20 },
  { name: 'Jake', age: 23 },
  { name: 'Jack', age: 20 },
  ];
  
  function groupBy(objArray, filterProperty) {
    return objArray.reduce((acc, obj) => {
      const key = obj[filterProperty];
      if (!acc[key]) {
        // where key here is age, if no existing 
        // key wrapper, set a key wrapper array
        acc[key] = [];
      }
      // a key wrapper exist (array) push 
      // currentValue into it
      acc[key].push(obj);
      return acc;
    }, {});
  }
  
  const groupedPeople = groupBy(people, 'age');
  console.log(groupedPeople);
```

###Array.reduceRight()

*To apply a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.*

**Syntax:** array.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])
Same as Array.reduce() other it processes from right-to-left. It executes the callback function once for each element present in the array, excluding holes in the array.

**E.g.,**

```javascript
const summation = [1, 2, 4, 6, 3].reduceRight((accumulator, currentValue, index, array) => accumulator + currentValue);
// accumulator starts from the end - 3; and currentValue also - 6
console.log(summation);
```

|   callback   | accumulator | currentValue | index |     array          | return value |
| ------------ | :---------: | :----------: | :---: | -------------------| :----------: |
| first call   |  3          | 6            | 6     | [1, 2, 4, 6, 3]    | 9            |
| second call  |  9          | 4            | 4     | [1, 2, 4, 6, 3]    | 13           |
| third call   |  13         | 2            | 2     | [1, 2, 4, 6, 3]    | 15           |
| fourth call  |  15         | 1            | 1     | [1, 2, 4, 6, 3]    | 16           |


Flattening with reduceRight()

```javascript
const flatten = [[0, 1], [2, 3], [4, 5]].reduceRight((a, b) => a.concat(b), []);
// a (accumulator) initialValue being [] concats each currentValue’s array i.e [4, 5] e.t.c.
console.log(flatten);
// [4, 5, 2, 3, 0, 1]
```

###Array.some()

*To test whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value; returns false if supplied an empty array regardless of the condition.*

**Syntax:** array.some(callback(element[, index[, array]])[, thisArg]);
Where element is the current element being processed in the array; index (optional) is the index of the current element being processed in the array; array (optional) is the array some() was called upon; thisArg (optional) is the value to use as ‘this’ when executing the callback.

**E.g.,**

```javascript
const isGreater = [2, 3, 4, 1, 5].some(element => element >= 6)
console.log(isGreater);
// false -- no element in the array is greater than or equal to 6, they’re all less than 6.

const TRUTHY_VALUES = ['true', true, 1];

function getBoolean(val) {
  'use strict';
  
  if (typeof val === String) {
    val = val.toLowerCase().trim();
  }
  
  return TRUTHY_VALUES.some(v => v === val);
}

console.log(getBoolean('true')); // true
console.log(getBoolean('false')); // false
console.log(getBoolean(1)); // true
console.log(getBoolean(true)); // true
```

###Array.values()

*To get a new Array Iterator object that contains the values for each index in the array.*

**E.g.,**

```javascript
const arr = [4, 5, 3, 2, 1, 0].values();
console.log(arr.next);
// {value: 4, done: false}
console.log(arr.next);
// {value: 5, done: false}
console.log(arr.next.values) 
// 3
console.log(arr.next.done);
// false
console.log(arr.next);
// {value: 1, done: false}
console.log(arr.next) 
// {value: 0, done: true}
```



###Array.prototype[@@iterator]()

*The initial value of the @@iterator property is the same function object as the initial value of the values() property.*

**Syntax:** array[Symbol.iterator]()
Returns the initial value given by the values() iterator. By default, using array[Symbol.iterator] will return the values() function.

**E.g.,**

```javascript
const arr = [4, 5, 3, 2, 1, 0];
const arrIterate = arr[Symbol.iterator]();

console.log(arr.next);
// {value: 4, done: false}
console.log(arr.next);
// {value: 5, done: false}
console.log(arr.next.values) 
// 3
console.log(arr.next);
// {value: 2, done: false}
console.log(arr.next);
// {value: 1, done: false}
console.log(arr.next) 
// {value: 0, done: true}
```