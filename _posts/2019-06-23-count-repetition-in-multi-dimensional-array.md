---
title: Count repetition in multi-dimensional array
date: 2019-06-23
author: Gwyn
layout: post
---

A couple of days ago a few of us were talking over lunch about a recent coding challenge a colleague had been posed. The task was to: 

> Write a function that takes two arguments, an array - that could be multi-dimensional - and a needle. The function should return the number of times the needle appears at any level in the array

It's immediately clear that the _tricky_ part of this is iterating over an array of unknown depth to obtain a 'flattened' version (you could, I suppose, check for the needle on-the-fly but my thought was that there's value in having access to the interim flattened array). My initial thought was 

> "surely `Array.prototype.flat()` does this?"

but it turns out `flat()` expects a 'depth' parameter which defaults to `1` if omitted. 

My next thought was to use recursion and, while I was able to solve it quite quickly using that approach, the result relied upon the function updating an external 'state' (which I wasn't happy with). It looked a bit like this

```javascript

// HORRIBLE CODE 😱 DO NOT USE
let result = [];

let flatten = (arr) => {
    arr.map(function (i) {
        if (Array.isArray(i)) {
            flatten(i);
            return;
        }
        result.push(i)
    });
};

let multi_array = ["Cat", "Dog", ["Mouse", "Badger", ["Rat", "Rabbit", ["Dog"]]]];
flatten(multi_array);
console.log(result);

``` 

I did a bit of research and found several solutions to this part of the problem on Stack Overflow. Some of the most terse used `Array.prototype.reduce()` (which had occured to me, and which I like) and arrow functions but - if I'm honest - some of these are a bit too short, which makes difficult for a person to understand and reason about. 

```javascript

// FROM: https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays
// NOT FOR HUMANS 😱 DO NOT USE

const flatten = (arr) => arr.reduce((flat, next) => flat.concat(Array.isArray(next) ? flatten(next) : next), []);
```

## My solution to the flattening problem

The solution I eventually came to tries to balance terseness with readability (and debugability), and I'm quite happy with it:

```javascript
function smoosh(arr) {
    return arr.reduce((accumulator, current) => {
        if (Array.isArray(current)) {
            return accumulator.concat(smoosh(current))
        }
        return accumulator.concat(current)
    }, []);
}
```

## My solution to the whole problem

Here's my solution. I could achieve the same thing in about half the lines but this keeps the focus on readability, reuse and ease of debugging. I've kept the 'smoosh' responsibility separate and used `reduce()` again to count the repetition. I'm pretty happy with this one. 

```javascript
// Pretty happy with this solution 😀
const arr = ["Cat", "Dog", ["Mouse", "Badger", ["Rat", "Rabbit", ["Dog"]]]];

function smoosh(arr) {
    return arr.reduce((accumulator, current) => {
        if (Array.isArray(current)) {
            return accumulator.concat(smoosh(current))
        }
        return accumulator.concat(current)
    }, []);
}

function count_the_needle(arr, needle) {
    let smooshed = smoosh(arr);
    return smooshed.reduce((accumulator, current) => {
        if (current === needle) {
            return accumulator += 1;
        }
        return accumulator;
    }, 0)
}

console.log(count_the_needle(arr, 'Dog'));
```