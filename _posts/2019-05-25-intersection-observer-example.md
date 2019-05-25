---
title: Intersection Observer API examples
date: 2019-05-25
author: Gwyn
layout: post
---

I've been experimenting with the Intersection Observer API. This is a handy little API which, as [MDN concisely explains](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API):

> ...provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

## A simple example

Hopefully, the snippet below is self-explanatory. We're creating an 'observer' and attaching a 'handler'. We then tell the observer to 'observe' a specific element.

```javascript
const handler = (entries) => {
    console.log(`Element ${(entries[0].isIntersecting) ? 'is' : 'is not'} in view`);
};

const createObserver = (element) => {
    const options =  {root: null, rootMargin: "0px"};
    const observer = new IntersectionObserver(handler, options);
    observer.observe(element);
};

createObserver(document.querySelector('.map-container .lead'));
```

## A real world example

In this example I've created an example that to allow developers to add or remove an HTML class when an element enters (or leaves) the viewport. It's still pretty simple.


```javascript
const toggle_class_on_intersection = (entries, element, className) => {
    if (entries[0].isIntersecting) {
        element.classList.add(className);
    } else {
        element.classList.remove(className);
    }
};

const createObserver = (element, className) => {

    const observer = new IntersectionObserver(iObserver => {
        toggle_class_on_intersection(iObserver, element, className)
    }, {root: null, rootMargin: "0px",});

    observer.observe(element);
};


window.addEventListener("load", function (event) {

    // Animate text over the map
    const map_lead = document.querySelector('.map-container .lead');
    createObserver(map_lead, "slide-from-left");

    // Animate the h2 in .part-two
    const part_two_h2 = document.querySelector('.part-two h2');
    createObserver(part_two_h2, "fade-in");

}, false);

```