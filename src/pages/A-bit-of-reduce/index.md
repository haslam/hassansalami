---
title: A mini look into Array.reduce()!
date: '2018-12-16T10:10:37.121Z'
tag: 'Dev'
author: 'Hassan'
---

As part of the many magics of JavaScript's functional programming, reduce comes with its own beautiful wand yet requires a good grasp of how it works.

JavaScript's reduce method executes a provided reducer function on each member of a given array resulting in a single output - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

#Basic function

```
//Consider an array on numbers as
const arrayList = [2, 4, 5, 6, 7, 8, 9];

//Throw the array into reduce for a single sum total, passing in an accumulator, // a current value, and an initial value [optional]

const arrayReducer = arrayList.reduce((accumulator, cuurentValue) => accumulator + cuurentValue, 0);

//outputs 41
console.log(arrayReducer)
```

#So what just happened?

reduce() takes a callback function and an optional initialValue (in this case, 0)

#What's an accumulator?

Given the array `[2, 4, 5, 6, 7, 8, 9]` supplied to reduce with initialValue 0 appended to its' tail, reduce performs summation as such:

from left to right:
a. initialValue / old acucmulator
b. arrayList item value
c. new accumulator

Such that `a + b = c`. then `c` becomes the new `a` repeatedly.

```
0 + 2 = 2
2 + 4 = 6
6 + 5 = 11
11 + 6 = 17
17 + 7 = 24
24 + 8 = 32
32 + 9 = 41
```

# What if the supplied initialValue > 0?

Say we supplied an initialValue of `10`, no worries. reduce just use that as the starting `a` in our case. Which will increase our `b` and `c` by `10`. Therefore, our sum will also be increased by `10` in our case maing `51`.


Thanks guys!

Best