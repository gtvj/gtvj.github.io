---
title: Debounce vs throttle
date: 2017-03-12
author: Gwyn
layout: post
---

Debounce and throttle are techniques used to prevent JavaScript code that runs in response to user actions from blocking the user interface (or otherwise running more than is desirable). They are similar but subtly different and can be confusing because they combine some of the more tricky aspects of working with JavaScript: manipulating context; passing functions around as first-class values and managing timers.

> Because JavaScript is, by nature, single-threaded (only one piece of JavaScript code can execute at a time), timers provide a way to dance around this restriction, resulting in a rather oblique way of executing code. [Secrets of the JavaScript Ninja](https://www.safaribooksonline.com/library/view/secrets-of-the/9781933988696/)

## Debounce and when to use it

I've always found the term 'debounce' confusing so I did some research and found it comes from an electronics problem with mechanical switches, the electrical contacts of which can often make and break contact several times in a single push. This is commonly known as 'switch bounce'.

> Switch bouncing can cause problems. Imagine the situation where pressing a button toggles an LED on and off. If there are an even number of bounces, then the LED will toggle on and then immediately off again, giving the impression that nothing happened. [Practical Electronics for Inventors, 4th Edition](https://www.safaribooksonline.com/library/view/practical-electronics-for/9781259587559/)

The solution to the bounce effect is to ensure that only a single signal will be acted upon. Doing so is called 'debouncing' and it's very similar to the situation we face in the browser when responding to pointing device, scroll and even keyboard events. Here's a debounce method written in JavaScript.

<script src="https://gist.github.com/gtvj/5402026b8896bf7aa75eed084b80a065.js"></script>

In this example, the `debounce()` function acts as a proxy for the intended event handler to an arrow function that logs a message to the console to and serves to ensure that the handler is called **once and after** an event stream (by which I mean any number of events within a specified period) has concluded.

## Throttle and when to use it

Throttling is slightly different because to as its name suggests to it limits the number of times a function can be called within a specified period. Here's an example of throttling.

<script src="https://gist.github.com/gtvj/837fd4e765c4d01f3e950d2991b82069.js"></script>

As with the previous example, this `throttle()` function is a proxy for a simple logging function but the behaviour is different. With `throttle()` the proxied function will be called immediately and at the specified intervals, as well as once after the event stream has concluded. The throttle function will be most useful when you need your code to **respond immediately and continually but at intervals you specify**.

I've created a [repository with these examples](https://github.com/gtvj/debounce-throttle), as well as Grunt/Babel tasks to transpile the ES6 down for use in production. I really hope this is useful to someone 🙂