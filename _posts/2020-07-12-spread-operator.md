---
title: Spread operator - a few things to remember
date: 2020-07-12
author: Gwyn
layout: post
---

For some reason, I seem unable to remember the different things you can do with the spread operator. It's just one of those things that won't sink in. I get this occasionally with the strangest of things (one of them being my partner's telephone number!)

I've therefore spent some time today compiling the list below. This is for my reference really, but I'm putting it here because I'll likely come across someone who is having a similar problem, and it'll be handy to have this reference if I have an opportunity to explain it. 

Before we look at the list, the thing that's worth remembering about Rest and Spread as it applies to functions:

* We use spread to unpack an iterable into its individual items in a function **invocation**. This is helpful where we have a function that expects multiple arguments - think `Math.min()`
* We use the rest parameter in a function **definition** to specify which arguments should be pulled together into an array for use in the function body. 

Here are a few smooshed quotes from JavaScript: The Definitive Guide, 7th Edition.

## On rest parameters
<blockquote>
<p>Parameter defaults enable us to write functions that can be invoked with fewer arguments than parameters. Rest parameters enable the opposite case: they <strong>allow us to write functions that can be invoked with arbitrarily more arguments than parameters.</strong>
</p>
<p>A rest parameter is preceded by three periods, and it must be the last parameter in a function declaration. When you invoke a function with a rest parameter, the arguments you pass are first assigned to the non-rest parameters, and then any remaining arguments (i.e., the “rest” of the arguments) are stored in an array that becomes the value of the rest parameter.
</p>
</blockquote>

## On the spread operator
<blockquote>
<p>The spread operator is used to <strong>unpack, or “spread out,”</strong> the elements of an array (or any other iterable object, such as strings in a context where individual values are expected...</p>

<p>The operator <strong>can be used, in the same way, in function invocations</strong>...</p>

<p>When we use the same syntax in a <strong><em>function definition</em> rather than a function invocation, it has the opposite effect to the spread operator</strong>. ... in a function definition gathers multiple function arguments into an array [i.e. the Rest parameter]... Rest parameters and the spread operator are often useful together...</p>
<cite>JavaScript: The Definitive Guide, 7th Edition</cite>
</blockquote>

## Example of things you can do with Spread

```javascript   
// copy properties to a new object
{
    const position = { x: 0, y: 0 };
    const dimensions = { width: 100, height: 75 };
    const rect = { ...position, ...dimensions };

    position.x = 200;

    console.log(rect);
}

// create a shallow copy of an array
{
    const original = [1, 2, 3];
    const copy = [...original];
    copy[0] = 0;  // Modifying the copy does not change the original
    original[0]   // => 1

    console.log(copy)
}

// Turn an iterable into an array
{
    const letters = [..."ABC"];
    console.log(letters);
}

// Remove duplicates from an array
{
    const letters = [..."AAABBBCCC"];
    const deduped = [...new Set(letters)];

    console.log(deduped);
}

// Unpacking an iterable for a function that requires individual arguments
{
    const numbers = [1, 2, 3, 4, 5, 6];
    const min = Math.min(...numbers)

    console.log(min);
}
``` 