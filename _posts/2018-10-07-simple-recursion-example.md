---
title: Simple recursion example
date: 2018-10-07
author: Gwyn
layout: post
topic: code
---

I was helping a developer recently with a problem. They needed to extract all properties from an object as `key:value` pairs where:
* the 'value' was a string, and
* the object shape (how deeply nested it was) was determined dynamically in response to events. It may be one level deep; it might be several. 

We looked at it for a few minutes and found a solution I didn't particularly like on Stack Overflow (referenced in comment below). Then the developer needed to leave for the evening and I said I'd look into it for them. Here's the solution I proposed. 

```javascript
// The code below was helped by: https://stackoverflow.com/a/722732

/**
 *
 * @param {object} object_to_traverse
 * @param {function} func
 *
 * It tests that the given property of object_to_traverse 
 * - i.e. object_to_traverse[i] - is an
 * object. If so, it calls the traverse object on it 
 * and returns (to prevent further execution)
 *
 * Otherwise it calls the callback
 */

function traverse(object_to_traverse, func) {

    let properties = Object.keys(object_to_traverse);

    properties.forEach((i) => {

        if (object_to_traverse[i] === Object(object_to_traverse[i])) {
            return traverse(object_to_traverse[i], func);
        }

        func(i, object_to_traverse[i]);
    })
}

/**
 * @param {string} key - an object key
 * @param {string} value - an object value
 *
 * Just a wrapper around console.log for demonstration purposes. But this
 * could be where you do the aggregation ultimately.
 *
 */

function process(key, value) {
    console.log(`${key} : ${value}`);
}

// This is an example object

let obj = {
    one: 'one',
    two: {
        four: 'four',
        five: {
            six: 'six',
            seven: {
                eight: 'eight',
                nine: {
                    ten: 'ten'
                }
            }
        }
    },
    three: 'three'
};

traverse(obj, process);
```