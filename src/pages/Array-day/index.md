---
title: Array Day!
date: '2019-04-26T15:45:17.121Z'
tag: 'Dev'
author: 'Hassan'
image: arrayDay.jpg
---


Array data types are a kind of object useful for storing sequences of values. The Array object in JavaScript is a global object that is used in the construction of arrays; which are high-level, list-like objects.
Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations.
To create an Array

```javascript
let rice = ['basmati', 'brown', 'arborio', 'jasmine', 'white'];

rice.length // 5
```

Access an array item via its index (Note: arrays are zero-indexed, first element is at index 0 and last element is at the index equal to the value of the array’s length minus 1 i.e arrayName.length - 1. invalid index number returns undefined)


Several of the built-in array methods (e.g., join(), slice(), indexOf(), etc) take into account the value of an array’s length property when they’re called. Other methods (e.g., push(), splice(), etc.) also results in updates to an array’s length property.

###Loop over an Array

```javascript
let rice = ['basmati', 'brown', 'arborio', 'jasmine', 'white', 'brown'];

rice.forEach((item, index) => { console.log(`${item} has an index of ${index}`});
```



##Array properties

###Array.length 
*Gives you the length of the array*

```javascript
rice.length // 5
```

###Array.prototype

An array itself, it allows the addition of properties to all array objects. Say you want to add new methods and properties to extend all Array objects - e.g., useful for polyfilling. 
Note: adding non-standard methods to the array object can cause issues later, so thread with care. For its properties and methods check:
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)

##Methods

###Array.from() - returns a new Array instance

*Creates new shallow-copied Array instance from an array-like or iterable object.*

**Syntax** - Array.from(arrayLike[, mapFn[, thisArg]]) where arrayLike is an array-like or iterable object to convert to an array; mapFn (optional) is a Map function to call on every element of the array; thisArg (optional) is the value to use as this when executing mapFn.

**E.g.,**

```javascript
const set = new Set(rice);
const newRice = Array.from(set, myRice => myRice + " rice");
//  ["white rice", "brown rice", "basmati rice", "jasmine rice"]
```

###Array.isArray()

*Returns a boolean value (true/false) in determining whether the passed value is an Array or not.*

**E.g.,**

```javascript
Array.isArray(rice) // true
Array.isArray({gender: female}) // false  
Array.isArray(undefined) // false
Array.isArray([3, 5]) // true
Array.isArray(Array.prototype) // true
```

###Array.of()

*Creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.*

**E.g.,**

```javascript
Array.of(9) // [9]
Array.of(9, 7, 9) // [9, 7, 9]
```
Note: Array.of() is unlike passing a number argument to Array() which creates an empty array with a length property of the specified argument with empty slots i.e., Array(4) creates [ , , , ]

##Mutator methods
These methods are such that modifies the array.

###Array.fill()

*Fills the array elements with a specified static value from specified start index (optional - default zero) to specified end index (optional - default array length). It returns the modified array.*

**Syntax** - array.fill(value[, start[, end]]) where value is the value to fill with; start is the index to start from; end is the length to fill till.
Note: fill replaces existing element(s) with the given new one in the location specified.

**E.g.,**

```javascript
let newRice = ["white rice", "brown rice", "basmati rice", "jasmine rice"]
newRice.fill('Yellow rice', 1, 2);  
// fill from index 1, span 2 items. (Note: 2 here is not index based)
console.log(newRice);
// ["white rice", "Yellow rice", "basmati rice", "jasmine rice"]

//What happens if 2 arguments is give?

// inserts from index 3 to the length end of the array.
newRice.fill('Green rice', 3) 
console.log(newRice);
// ["white rice", "brown rice", "basmati rice", "Green rice"]
```

If passed on the one argument (the value) it replaces all the array items with the value. Let’s not do that now :)

###Array.copywithin()

*Shallow copies a sequence of array elements to another set location within the same array, it returns the copied array without modifying its size.*

**Syntax** - array.copywithin(target [, start [, end]]) where target is zero based index at which to copy to; start (optional) is zero based index at which to start copying from; end (optional) is zero based index at which to end copying, it copies up to but to including end.
**Note:** if start is omitted, copying starts at 0, if end is omitted, copying ends at array.length. If either is negative, counting for such starts from the end.

**E.g.,**

```javascript
console.log(newRice) 
// ["white rice", "brown rice", "basmati rice", "Green rice"]

// copy starting from index 2 till index 3 to index 0
newRice.copywithin(0, 2, 3);
console.log(newRice);
// ["basmati rice", "brown rice", "basmati rice", "Green rice"]
newRice.length // 4
```

###Array.pop() 

*Removes the last element from an array and returns that element. changes the length of the array.*

**E.g.,** 

```javascript
//helps remove Green rice from newRice array.
newRice.pop() // Green rice
newRice.length // 3
```

###Array.push()

*Adds one or more elements to the end of an array and returns the length of the array.*

**E.g.,**

```javascript
console.log(newRice) 
// ["basmati rice", "brown rice", "basmati rice"]
newRice.push('Wheat rice', 'Jasmine rice'); // 5
console.log(newRice) 
// ["basmati rice", "brown rice", "basmati rice", "Wheat rice", 'Jasmine rice']
```

###Array.reverse()

*Reverses the order of the elements of an array in place, making the first becomes the last and the last becoming the first.*

**Note:** reverse in its destructive nature also changes the original array.

**E.g.,**

```javascript
console.log(newRice) 
// ["basmati rice", "brown rice", "basmati rice", "Wheat rice", 'Jasmine rice']
const reversedRice = newRice.reverse();
console.log(reversedRice ) 
// ["Jasmine rice", "brown rice", "basmati rice", "Wheat rice", 'basmati rice']
console.log(newRice)
// ["Jasmine rice", "brown rice", "basmati rice", "Wheat rice", 'basmati rice']
```

Reversing an array-like object

```javascript
const aLike = {0: 1, 1: 2, 2: 3, length: 3};
Array.prototype.reverse.apply(aLike);
console.log(aLike) // {0: 3, 1: 2, 2: 1, length: 3}
```

###Array.shift()

*To remove the first element from an array. It returns the removed element. Returns undefined if the array is empty.*

**E.g.,**

```javascript
console.log(newRice);
// ["Jasmine rice", "brown rice", "basmati rice", "Wheat rice", 'basmati rice']

newRice.shift();
// 'Jasmine rice

console.log(newRice);
// ["brown rice", "basmati rice", "Wheat rice", 'basmati rice']
```

###Array.sort()

*To sort the elements in an array in place and returns the sorted array.*

**Syntax** - array.sort([compareFunction]);
compareFunction (optional) specifies the function that defines the sort order.
Note: if compareFunction is omitted, the array is sorted by converting them to strings and comparing the strings in Unicode code point value. For example, 'banana' comes before 'cherry'. In a numeric sort, 9 comes before 80, but because numbers are converted to strings, '80' comes before '9' in Unicode order. Head to the docs on MDN for complete understanding..

In compareFunction(a, b), if return value is < 0, sorts a to an index less than b (i.e a should come first) before b; if it returns 0, leave a and b unchanged with respect to each other, but sorted with to all different elements; if it returns a value > 0, sort b to an index lower than a (i.e b comes first). It must always return the same value when given a specific pair of elements a and b as its arguments.

**E.g.,**

```javascript
console.log(newRice);
// ["brown rice", "basmati rice", "Wheat rice", 'basmati rice']
//To remove duplicate:
//We could throw the array into a Set - this affects the length of the array.

//i.e 
const noDuplicateRice = new Set(newRice);
// ["brown rice", "basmati rice", "Wheat rice"]
```
Heck, use the Array.fill() above to replace the duplicate item - this assumes we know the duplicate item and its position in the array.

```javascript
newRice.fill('Jollof rice', 3);
console.log(newRice);
// ['brown rice", "basmati rice", "Wheat rice", 'Jollof rice']  -- we go with this.

newRice.sort();
// ["Jollof rice", "Wheat rice", "basmati rice", "brown rice"]
```
**Note:** Mind the case of the array items. Relate it to the compareFunction Note above.

```javascript
	const intArr = [5, 1, 8, 9];
      intArr.sort(); // [1, 5, 8, 9];

  // 3 - sorting mixed numbers
	const nums = 967513248;
	const convertedNum = parseInt(Array.from(nums.toString())
  		.map(Number)
  		.sort((a, b) => {
    			// this sorting is in ascending order. For Desc: return b - a.
			// say a: 6 here and b: 9 … 6 - 9 = -3 so a comes first… and so on.
   			 return a - b
 		 })
  		.join(''));
console.log(convertedNum); // 123456789

// OR -- for short without the compareFunction

const converted = parseInt(String(nums).split('').sort().join(''));
// You could also sort Desc by just chaining reverse:
parseInt(String(nums).split('').sort().reverse().join(''));
```


###Array.splice()

*To add/remove elements from an array or replace an existing elements.*

**Syntax** - array.splice(start[, deleteCount[, item1[, item2[, …]]]])
Where start is the index at which to start changing the array (with origin 0). If > array.length, actual starting index is set to array.length. If negative, will begin that many elements from the end of the array (with origin -1); 
deleteCount (optional) an integer indicating the number of old array elements to remove. If omitted or >= array.length - start, from start, all the following elements will be deleted. If 0 || negative, no elements are removed.
Item1, item2,... (optional) is the elements to add to the array if you’d like to add, starting at start index. If none is specified, then splice() removes from your array.
Returns an array of deleted elements.

**E.g.,**

```javascript
console.log(newRice)
// ["Jollof rice", "Wheat rice", "basmati rice", "brown rice"]
```
Add item(s)

```javascript
// adds jasmine rice to index 2 location deleting none.
newRice.splice(2, 0, 'jasmine rice'); 
console.log(newRice);
// ["Jollof rice", "Wheat rice", 'jasmine rice', "basmati rice", "brown rice"]

// adds from 1 element from the end of the array.
newRice.splice(-1, 0, 'yellow rice', 'red rice'); 
console.log(newRice);
// ["Jollof rice", "Wheat rice", 'jasmine rice', "basmati rice", 'yellow rice', 'red rice', "brown rice"]
```

Remove item(s)

```javascript
// ['red rice'] remove 1 element from index 5
newRice.splice(5, 1);  
console.log(newRice);
//["Jollof rice", "Wheat rice", 'jasmine rice', "basmati rice", 'yellow rice', "brown rice"]
```

Remove and add

```javascript
// remove 1 from index 1 and insert 'black rice'
newRice.splice(1, 1, 'black rice'); 
console.log(newRice);
// ["Jollof rice", "black rice", 'jasmine rice', "basmati rice", 'yellow rice', "brown rice"]
```
Lets make a copy of the newRice

```javascript
const newRiceCopy = [...newRice];

//remove 2 elements from index 3
newRiceCopy.splice(3, 2); 
console.log(newRiceCopy);
// ["Jollof rice", "black rice", 'jasmine rice', "brown rice"]

newRiceCopy.splice(1); // remove all elements from index 1
console.log(newRiceCopy);
// ['Jollof rice']
```

###Array.unshift()

*Unlike array.shift() which removes the first element an array, array.unshift() helps add one or more elements to the start of an array and returns the length of the array.*

**E.g.,**

```javascript
console.log(newRiceCopy);
// ['Jollof rice']
newRiceCopy.unshift('Tea rice', 'Lotus rice'); // 3 (length of the array)
console.log(newRiceCopy);
// ['Jollof rice', 'Tea rice', 'Lotus rice']
```
