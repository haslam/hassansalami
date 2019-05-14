---
title: Array Accessor Methods
date: '2019-04-27T10:10:03.121Z'
tag: 'Dev'
author: 'Hassan'
---

![Array accessor methods](/pathway.jpg)

These methods return some representations of the array. They do not modify the array.

###Array.concat()

*To merges two or more arrays into one. Does not change the existing array(s), it rather returns a new array.*

**E.g.,**

```javascript
let mergedRice = newRice.concat(newRiceCopy);
console.log(mergedRice);
// ["Jollof rice", "black rice", “jasmine rice”, "basmati rice", “yellow rice”, "brown rice", “Jollof rice”, “Tea rice”, “Lotus rice”]
```
####Or to remove duplicate 

```javascript
mergedRice = Array.from(new Set(newRice.concat(newRiceCopy)));
 console.log(mergedRice);
//  ["Jollof rice", "black rice", “jasmine rice”, "basmati rice", “yellow rice”, "brown rice", “Tea rice”, “Lotus rice”]
```

###Array.includes()

*To determine whether an array includes a certain value among its entries, it returns a boolean true if it does, false if it doesn’t.*

**Syntax:** array.includes(valueToFind[, fromIndex]); where valueToFind is the value to search for and fromIndex (optional) is the index position at which to begin searching for valueToFind.

**E.g.,**

```javascript
const fruit = [‘apple’, ‘banana’, ‘grape’, ‘orange’];
console.log(fruit.includes(‘banana’)); // true
console.log(fruit.includes(‘pear’)); // false
console.log(fruit.includes(‘apple’, 1)); // false - fromIndex here is set to 1 which is means skip 0 and begin search from index 1 to the end of the array.
```

###Array.indexOf()

*To return the first index at which the given element can be found in the array, returns -1 if not found/present in the array.*

**Syntax:** array.indexOf(searchElement[, fromIndex]); where searcElement is the given element to locate in the array and fromIndex (optional) is the index position at which to start the search at.
Note: if the given fromIndex is >= array.length, -1 is returned i.e the array will not be searched. If fromIndex is negative, the array is still searched from front to back.

**E.g.,**

```javascript
const pets = [‘cat’, ‘dog’, ‘elephant’, ‘parrot’, ‘rabbit’];
console.log(pets.indexOf(‘parrot’)); // 3
console.log(pets.indexOf(elephant, 3)) 
// -1 meaning not found as search is set to start after elephant’s index [2]

console.log(pets.indexOf(‘parrot’, -2)); 
// 3 search still starts from front to back.
```

###Array.join()

*To create and return a new string by concatenating all of the elements in an array (or an array-like object), separated by comma (if no separator is specified) or the specified separator string. Note: If the array has only one item, then the item is returned without applying the separator.*

**Syntax:** array.join([separator]); separator is optional.

**E.g.,**

```javascript
const quote = [‘I’, ‘have’, ‘a’, ‘dream’];
console.log(quote.join()); 
// I,have,a,dream  -- no separator is specified hence comma is applied.
console.log(quote.join(‘ ‘)); 
// I have a dream -- space is specified as separator
console.log(quote.join(‘+’)); 
// I+have+a+dream
```

###Array.lastIndexOf()

*To return the last index at which a given element can be found in an array, or -1 if not present in the array. Note: the array is searched backwards from the given fromIndex (if available)*

**Syntax:** array.lastIndexOf(searchElement[, fromIndex]);
Where searchElement is the element to locate in the array; and fromIndex is the array index at which to start searching backwards from. Default is array.length -1 resulting in searching the whole array. If fromIndex >= array.length, the whole array will be searched. If negative, the array is still searched backwards regardless.

**E.g.,**

```javascript
const petName = [‘coco’, ‘joey’, ‘lucy’, ‘bella’, ‘stubborn’];
console.log(petName.lastIndexOf(‘lucy’)); // 2
console.log(petName.lastIndexof(‘bella’)); // 3
console.log(petName.lastIndexOf(‘bella’, 2); 
// -1 -- search starts from index 2 backwards and bella is at index 3, backwards won’t get to bella.

// Say,
petName.unshift(‘stubborn’);
console.log(petName.lastIndexOf(‘stubborn’)); // 5 
```


###Array.slice()

*To create/return a shallow copy of a portion of an array into a new array object selected from begin to end. The original array is not modified.*

**Syntax:** array.slice([begin[, end]]); 
where begin (optional) is the zero-based index at which to start extraction. If not specified, slice default to begin at index 0, if > array.length an empty array is returned.
end (optional) is a zero-based index at which to end extraction. slice extracts up to but not including the end - i like to sometimes see it as non-zero based just to not consider the end. If omitted or > array.length, slice extracts through to the end of the sequence.
For both begin and end, if a negative index is used, slice treats it as an offset from the end of the sequence.

**E.g.,**

```javascript
const cities = [‘Ottawa’, ‘New York’, ‘London’, ‘Lagos’, ‘Plymouth’, ‘Pretoria’];
console.log(cities.slice(2, 4)) // [‘London’, ‘Lagos’]
console.log(cities.slice(4)); 
// [‘Plymouth’, ‘Pretoria’]  -- no end is given so slice see it through the end of the array.
```

###Array.toString()

*To return a string representation of the specified array and its elements.*

**Syntax:** array.toString();

**E.g.,**

```javascript
const areaCodes = [613, 343, 416, 437];
console.log(areaCode.toString()); 
// 613,343,416,437
```

###Array.toLocaleString()

*To return a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and are (Strings) separated by a locale-specific String (such as a comma).*

**Syntax:** array.toLocaleString([locales[, options]]); 
where: locale (optional) is a string with a BCP 47 language tag, or an array of such strings; options (optional) is an object with configurable properties. Please see the docs on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString).

toLocaleString methods include: 

```javascript
Object: Object.prototype.toLocaleString()
Number: Number.prototype.toLocaleString()
Date: Date.prototype.toLocaleString()
```

**E.g.,**

```javascript
const prices = [10, 200, 400, 30];
let prr = prices.toLocaleString('en', { style: 'currency', currency: 'CAD' });
console.log(prr); 
// CA$10.00,CA$200.00,CA$400.00,CA$30.00
```
