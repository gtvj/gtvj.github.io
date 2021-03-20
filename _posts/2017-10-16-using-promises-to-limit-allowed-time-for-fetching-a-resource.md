---
title: Using promises to limit the time available for an asynchronous task
date: 2017-10-16
author: gtvj
layout: post
topic: code
---

I've been reading Nicholas Bevacqua's brilliant [Practical Modern JavaScript](https://www.safaribooksonline.com/library/view/practical-modern-javascript/9781491943526/) recently and came across this technique for using `Promise.race()` to intervene when an asynchronous task is taking longer than is acceptable.

<script src="https://gist.github.com/gtvj/f1a86728ab9f363bf72331186109cc24.js"></script>

## How it works

JavaScript promises provide a couple of mechanisms for managing concurrent tasks:

  * `Promise.all()` resolves when all passed promises resolve (or it encounters a rejection)
  * `Promise.race()` resolves when the first passed promise is resolved (or, like `Promise.all()` it encounters a rejection)

All we're doing here is to create a `timeout()` function which returns a promise that is rejected after a specified delay. By passing this to `Promise.race()` along with our asynchronous fetch we can trigger the catch if the task (downloading a large file, in this example) is taking longer than is specified as acceptable.