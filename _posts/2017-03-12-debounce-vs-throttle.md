---
id: 1130
title: Debounce vs throttle
date: 2017-03-12T21:23:59+00:00
author: Gwyn
layout: post
guid: https://15volts.com/?p=1130
permalink: /debounce-vs-throttle/
categories:
  - Development
  - ES6/ES2015
  - Explained code snippets
  - JavaScript
  - Performance
---
Debounce and throttle are techniques used to prevent JavaScript code that runs in response to user actions from blocking the user interface (or otherwise running more than is desirable). They are similar but subtly different and can be confusing because they combine some of the more tricky aspects of working with JavaScript: manipulating context; passing functions around as first-class values and managing timers.

> Because JavaScript is, by nature, single-threaded (only one piece of JavaScript code can execute at a time), timers provide a way to dance around this restriction, resulting in a rather oblique way of executing code.<cite><a href="https://www.safaribooksonline.com/library/view/secrets-of-the/9781933988696/">Secrets of the JavaScript Ninja</a></cite>

## Debounce and when to use it

I&#8217;ve always found the term &#8216;debounce&#8217; confusing so I did some research and found it comes from an electronics problem with mechanical switches, the electrical contacts of which can often make and break contact several times in a single push. This is commonly known as &#8216;switch bounce&#8217;.

> Switch bouncing can cause problems. Imagine the situation where pressing a button toggles an LED on and off. If there are an even number of bounces, then the LED will toggle on and then immediately off again, giving the impression that nothing happened.
  
> <cite><a href="https://www.safaribooksonline.com/library/view/practical-electronics-for/9781259587559/">Practical Electronics for Inventors, 4th Edition</a></cite>

The solution to the bounce effect is to ensure that only a single signal will be acted upon. Doing so is called &#8216;debouncing&#8217; and it&#8217;s very similar to the situation we face in the browser when responding to pointing device, scroll and even keyboard events. Here&#8217;s a debounce method written in JavaScript.



In this example, the `debounce()` function acts as a proxy for the intended event handler &#8211; an arrow function that logs a message to the console &#8211; and serves to ensure that the handler is called **once and after** an event stream (by which I mean any number of events within a specified period) has concluded.

## Throttle and when to use it

Throttling is slightly different because &#8211; as its name suggests &#8211; it limits the number of times a function can be called within a specified period. Here&#8217;s an example of throttling.



As with the previous example, this `throttle()` function is a proxy for a simple logging function but the behaviour is different. With `throttle()` the proxied function will be called immediately and at the specified intervals, as well as once after the event stream has concluded. The throttle function will be most useful when you need your code to **respond immediately and continually but at intervals you specify**.

I&#8217;ve created a [repository with these examples](https://github.com/gtvj/debounce-throttle), as well as Grunt/Babel tasks to transpile the ES6 down for use in production. I really hope this is useful to someone 🙂