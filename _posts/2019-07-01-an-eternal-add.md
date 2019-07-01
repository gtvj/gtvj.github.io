---
title: An eternal add function
date: 2019-07-01
author: Gwyn
layout: post
---

Earlier today I was told about a coding challenge a colleague had tried this weekend. The challenge was to write an `add()` function
which could take any number of arguments and add them. It can also take a single argument, with the ability to chain a further call.

```javascript
console.assert(add(1) == 1);
console.assert(add(1)(2)(3) == 6);
console.assert(add(1)(2)(3)(4)(5) == 15);
console.assert(add(1, 2, 3) == 6);
console.assert(add(1, 2, 3)(3) == 9);
console.assert(add(1, 2, 3, 4, 5, 6) == 21);
```

Here's a solution I've come up with (expanding on a [Gist](https://gist.github.com/getify/fa0c953ceae448177caf#file-add-js) by the genius that is Kyle Simpson) which I'll describe below

```javascript
function add() {  
    let total = 0;
    const add = (...args) => {
        args.forEach(i => total += i);
        return add;
    };
    add.valueOf = () => total;
    return add.apply(null, arguments);
}

```

## How this works

Within our `add()` function we initialize a `total` variable which we'll use for memoization. Notice these two things: 
 
- the `total` variable is updated within the inner `add()` function, thus creating a closure
- we're overriding the `add.valueOf()` method (which exists on Object and returns a primitive value of the specified object) to return the value of sum 

The clever thing here - which is entirely thanks to Kyle's code - is that we need never decide whether we need to return a primitive or a function because the `valueOf` has been hijacked to give us the value of `total`. Very clever. 

When called with one argument, that value will be added to `total` and a function is returned. When called with two or more arguments, each value is added to `total` and a function is returned. Any subsequent calls do the same thing - update `total` and return a function that can be used, if needed. 