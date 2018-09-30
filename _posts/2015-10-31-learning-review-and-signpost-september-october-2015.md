---
id: 632
title: 'Learning review and signpost September to October 2015'
date: 2015-10-31T19:03:28+00:00
author: Gwyn
layout: post
guid: http://15v.co/?p=632
permalink: /learning-review-and-signpost-september-october-2015/
categories:
  - D3
  - Development
  - Learning
  - Regular expressions
  - Signpost
---
## Plans for this period

Having spent the last few sprints looking at quite a broad range of development topics I resumed focus on front-end specific technologies and tooling.

## Activity

### D3

D3 is one of those libraries I'd been holding at arms length for some time so I was really pleased to get to grips with it during this sprint. I approached this by completing Ray Villalobos' [Data Visualisation with D3.js](http://www.lynda.com/D3js-tutorials/Data-Visualization-D3js/162449-2.html) course and creating a few small experiments (like the one below) along the way. I also wrote a post describing the [basics concepts of D3](https://52.27.200.123/basic-concepts-in-d3-js/).

<p class="codepen" data-height="268" data-theme-id="0" data-slug-hash="QjjVwO" data-default-tab="result" data-user="gtvj">
  See the Pen <a href="http://codepen.io/gtvj/pen/QjjVwO/">Fun with bubbles</a> by Gwyn Jones (<a href="http://codepen.io/gtvj">@gtvj</a>) on <a href="http://codepen.io">CodePen</a>.
</p>



### Regular Expressions

I devoted about 50% of the total effort this sprint to gaining a pretty solid understanding of regular expressions. I've long felt a bit exposed in not really having a handle on them, especially since reading John Resig in Secrets of the JavaScript Ninja:

<div class="page" title="Page 174">
  <div class="layoutArea">
    <div class="column">
      <blockquote>
        <p>
          <strong>Regular expressions are a necessity of modern development.</strong> There, we said it. While many a web developer could go through life happily ignoring regular expressions, there are some problems that need to be solved in JavaScript code that can’t be addressed elegantly without regular expressions. Sure, there may be other ways to solve the same problems. But frequently, <strong>something that might take a half-screen of code can be distilled down to a single statement with the proper use of regular expressions</strong>.
        </p>
      </blockquote>
    </div>
  </div>
</div>

In getting to grips with regular expressions I used a few sources which I'd recommend:

  * [Using Regular Expressions](http://www.lynda.com/Regular-Expressions-tutorials/Using-Regular-Expressions/85870-2.html) by Kevin Skoglund is an absolutely brilliant course and reference.
  * [Introducing Regular Expressions](https://www.safaribooksonline.com/library/view/introducing-regular-expressions/9781449338879/) by Michael Fitzgerald is good
  * [RegexOne](http://regexone.com) is useful for basic reference and practice

Regular expressions are one of those topics which are incredibly dry without hands-on use, but very fun when facing actual problems. In a way that's great because they're also one of those things that I'll need to practice and review to improve and retain. In that regard I've come across some absolutely brilliant resources online, including:

  * [RegExr](http://www.regexr.com) is a great sandbox for testing and playing with regular expressions.
  * [Regex Golf](https://regex.alf.nu) is a fun game based on the principles of golf (i.e. the aim is to make the match in as few characters as possible). Bear in mind though that this gets very difficult very quickly.
  * [Regex Crossword](https://regexcrossword.com) is a regex based crossword puzzle. Like Regex Golf, this gets very hard very quickly to so don't be put off.

### Test driven development

TDD is one of those things that I've been doing sometimes (mostly for more complex features) but really felt that:

  * I wasn't sure I was doing it right
  * I didn't feel I was doing it enough

I therefore decided to do the [Foundations of Programming: Test Driven Development](http://www.lynda.com/Developer-Programming-Foundations-tutorials/Foundations-Programming-Test-Driven-Development/124398-2.html) course by Simon Allardice. Well worth doing for those who, like me, knew the mantras but wasn't sure whether they were implementing it well.

### Emmet review

I value tools that allow me to do things efficiently and one of those that I've [written about previously](http://15v.co/my-favourite-features-of-webstorm/) is [Emmet](http://www.emmet.io). What Emmet does is take snippets to a whole new level. This is best described in the docs which state:

> &#8230;you can type _CSS-like_ expressions that can be dynamically parsed, and produce output depending on what you type in the abbreviation. Emmet is developed and optimised for web-developers whose workflow depends on HTML/XML and CSS&#8230;

During the sprint I completed Ray Villalobos' [Coding Faster with Emmet](http://www.lynda.com/Emmet-tutorials/Coding-Faster-Emmet/133353-2.html) course which provided a handy refresher, including:

  * The automatic ['lorem ipsum' generator](http://docs.emmet.io/abbreviations/lorem-ipsum/) capabilities
  * The 'climb up' expression capabilities (see the cheat sheet below)
  * The element numbering capabilities (also covered in the cheat sheet)

If you don't have the time to check out Ray Villalobos' course, at least bookmark the [cheat sheet](http://docs.emmet.io/cheat-sheet/)

### Debugging

I also realised that it's been nearly three years since I attended Remy Sharp's debugging workshop so I thought it would be worth doing Joe Chellman's new [Debugging the web: JavaScript](http://www.lynda.com/JavaScript-tutorials/Debugging-Web-JavaScript/383908-2.html) course.

## Plans for next period

### ES6 deep dive

I'll be spending the whole of November exclusively focussed on ES6 (aka ECMAScript 2015, 6th Edition) language features and tooling.

### New job

I've accepted a new job in central Government which I'll be starting in a few weeks time. I'm really excited by the new position and the range of digital services I'll be working on, and really grateful to The National Archives for the opportunities I was given in my current role.

I've had a great time at The National Archives over the years. I've really enjoyed working on Discovery, the website, record copying and countless other smaller applications and sites. I'm also extremely grateful to have been given the opportunity to lead  front-end development across the organisation: it's certainly been the high point of my career to date and I can't recommend The National Archives' Digital Teams strongly enough.