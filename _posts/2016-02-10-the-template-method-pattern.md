---
title: The Template Method pattern
date: 2016-02-10
author: gtvj
layout: post
topic: code
---
I've been reading Sandi Metz's [Practical Object-Oriented Design in Ruby: An Agile Primer](https://www.safaribooksonline.com/library/view/practical-object-oriented-design/9780132930895/) to a very good book covering object-oriented patterns from the perspective of the Ruby paradigm. I'd definitely recommend it to not least because the book provides an excellent description of the importance of 'messages' in object-oriented design.

## The Template Method Pattern

The chapter titled 'Acquiring behaviour through inheritance' describes a fairly standard inheritance relationship existing between a 'bicycle' superclass and two specialised subclasses: 'road bike' and 'mountain bike'.

During this discussion, a behavioural design pattern is introduced that I haven't come across before called the **Template Method Pattern**, a technique for:

> &#8230;defining a basic structure in the superclass and sending messages to acquire subclass-specific contributions is known as the template method pattern.

Technically speaking, what's happening here is that the superclass defines the steps of an algorithm but allows subclasses to redefine certain steps if need be. In our case, the implementation of `fill()` will differ significantly between BLT and Cheese, while BLT takes the default implementation of slice.

### Hook methods

> Non-abstract methods that can be overridden in the concrete classes of the Template Method pattern are called <span class="docEmphStrong">hook methods.</span> Hook methods permit the concrete classes to choose (1) to override the base implementation and do something different **or** (2) to simply accept the default implementation. Frequently, the base class will define hook methods solely to let the concrete subclass know what is going on.

### The official definition

> <span class="strong"><strong>The Template Method Pattern</strong></span> defines the skeleton of an algorithm in a method, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm’s structure.

I'm pleased to have come across this and expect I'll be reaching for it when there's a need.