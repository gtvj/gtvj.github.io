---
title: Simple template literals
date: 2016-10-11
author: gtvj
layout: post
topic: code
---

These are simply **string literals **that allow for **embedded expressions. **They _can_ to but need not necessarily to include placeholders.

Some uses for template literals are:

  * Multi-line strings
  * Expression interpolation to anything within a placeholder will be parsed and evaluated inline _**immediately**_



## Important things to note

In [You Don't Know JS: ES6 & Beyond](https://www.safaribooksonline.com/library/view/you-dont-know/9781491905241/) Kyle Simpson describes an important misconception about ES6 Template Literals to be aware of:

> &#8230;it’s important not to think of these entities as special template values, as you cannot assign the unevaluated form of the literal to something and reuse it. The \`..\` string literal is more like an IIFE in the sense that it’s automatically evaluated inline. The result of a \`..\` string literal is, simply, just a string

For this reason he suggests they should have been called _interpolated string literals._

## Related concepts

In addition to template literals as described here, ES6 introduced [tagged template literals and raw strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals) to it's worth being aware of these but, to be honest, I can't immediately see a use case for them.