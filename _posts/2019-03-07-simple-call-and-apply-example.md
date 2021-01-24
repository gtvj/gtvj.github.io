---
title: Function 'call' and 'apply' - a simple example
date: 2019-03-07
author: Gwyn
layout: post
topic: code
---

I sometimes see developers having difficulty grasping how the `.call()` and `.apply()` functions of `Function.prototype` work and where they might be used. Like many language features they can be very helpful but are seldom used and I sometimes struggle to find a good, concise example to give. 

# What they do

Both these functions do the same thing: call a function with a given value for `this` and a set of arguments. The only difference is how they manage arguments: 

* `call()` has arguments provided individually
* `apply()` has arguments provided as an array

# A very simple example

```javascript
function greet(name) {
	console.log(`Hello ${name}. I am ${this.name}`);
}

greeter = {
  name: 'Diane'
}

// Does these things: 
//   * Calls the greet method
//   * Passing greeter as the context for 'this'
//   * Provides 'Dionne' as the argument to greet
greet.call(greeter, 'Dionne');
```

# A more practical example

Many times I've seen developers try using `.forEach()` on a `NodeList` only to discover that it isn't available (because `NodeList` doesn't share the prototype of `Array`, on which `.forEach()` exists). This is a somewhat hacky way of using `.call()` to 'borrow' that functionality from `Array` at runtime.

```javascript
let li_els = document.querySelectorAll('li'); // Get a NodeList of 'li' elements
Array.prototype.forEach.call(li_els, function (item) {
  // Here you can treat each 'item' as though it were inside a forEach()
});
```