---
id: 747
title: The Template Method pattern
date: 2016-02-10T21:06:15+00:00
author: Gwyn
layout: post
guid: http://15v.co/?p=747
permalink: /the-template-method-pattern/
categories:
  - Design patterns
  - Development
  - Ruby
---
I&#8217;ve been reading Sandi Metz&#8217;s [Practical Object-Oriented Design in Ruby: An Agile Primer](https://www.safaribooksonline.com/library/view/practical-object-oriented-design/9780132930895/) &#8211; a very good book covering object-oriented patterns from the perspective of the Ruby paradigm. I&#8217;d definitely recommend it &#8211; not least because the book provides an excellent description of the importance of &#8216;messages&#8217; in object-oriented design.

## The Template Method Pattern

The chapter titled &#8216;Acquiring behaviour through inheritance&#8217; describes a fairly standard inheritance relationship existing between a &#8216;bicycle&#8217; superclass and two specialised subclasses: &#8216;road bike&#8217; and &#8216;mountain bike&#8217;.

During this discussion, a behavioural design pattern is introduced that I haven&#8217;t come across before called the **Template Method Pattern**, a technique for:

> &#8230;defining a basic structure in the superclass and sending messages to acquire subclass-specific contributions is known as the template method pattern.

Technically speaking, what&#8217;s happening here is that the superclass defines the steps of an algorithm but allows subclasses to redefine certain steps if need be. In our case, the implementation of `fill()` will differ significantly between BLT and Cheese, while BLT takes the default implementation of slice.

### Hook methods

> Non-abstract methods that can be overridden in the concrete classes of the Template Method pattern are called <span class="docEmphStrong">hook methods.</span> Hook methods permit the concrete classes to choose (1) to override the base implementation and do something different **or** (2) to simply accept the default implementation. Frequently, the base class will define hook methods solely to let the concrete subclass know what is going on.

### The official definition

> <span class="strong"><strong>The Template Method Pattern</strong></span> defines the skeleton of an algorithm in a method, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm’s structure.

I&#8217;m pleased to have come across this and expect I&#8217;ll be reaching for it when there&#8217;s a need.