---
title: Introduction to ARIA
date: 2020-09-27
author: Gwyn
layout: post
---

<div class="info">
<p>This post assumes the reader has a basic technical understanding of web accessibility standards, techniques and testing. If you don't yet have a good foundation in accessibility you should get to grips with the basics before approaching ARIA. If you're not sure where to start, the W3C provide an excellent <a href="https://www.w3.org/WAI/fundamentals/accessibility-intro">introduction to accessibility fundamentals</a>.</p>
<p>This is important because ARIA is powerful and <strong>can significantly harm the accessibility of a your applications if applied incorrectly</strong></p>
</div>

For a static web page you can normally achieve good accessibility by thinking carefully about the semantics and structure of your content and making effective use of HTML. For dynamic features you'll likely need to use <dfn><abbr title="Web Accessiblity Initiative - Accessible Rich Internet Applications">WAI-ARIA</abbr></dfn>

## What is ARIA

The <abbr title="Web Accessiblity Initiative - Accessible Rich Internet Applications">WAI-ARIA</abbr>, more commonly shortened to ARIA, is a suite of tools that allows developers to make their web content and applications more accessible than is possible using HTML alone. As the term _'rich'_ in the name suggests ARIA is especially important for highly dynamic sites and components.

<blockquote cite="https://www.w3.org/WAI/standards-guidelines/aria/">
    <p>...especially helps with dynamic content and advanced user interface controls developed with Ajax, HTML, JavaScript, and related technologies.</p>
    <cite>W3C WAI WAI-ARIA Overview</cite>
</blockquote>

But don't be tempted to think it's as a clear as HTML for static elements and ARIA for dynamic elements: 

* ARIA can improve the accessibility of a static pages, and;
* good HTML should always be your first consideration when designing complex JavaScript driven features

You can think of the Accessibile Rich Internet Applications (ARIA) suite of technologies as picking up where HTML has reached its limit. 

<div class="info">
<p><strong>Key point:</strong> ARIA is vital for dynamic pages but can also improve accessibility of static pages</p>
</div>

## What ARIA does for us

A good starting point for considering ARIA is from the perspective of two common front end development tasks: 

* Creating complex controls to support complex user interactions
* Dynamically updating content (either in response to user action, results from asynchronous network requests or other events)

For both of these it is all to easy to unwittingly exclude disabled users. Without deliberate thought it's likely the controls we provide will not be usuable and content updates not communicated effectively. The ARIA suite is what we use to ensure this doesn't happen. 

With ARIA we can: 

* Provide descriptive roles for our widgets and regions of the page
* Identify an element as being interactive
* Express the current state of an element
* Represent relationships between elements
* Define regions of a page that are likely to be updated, as well as an interuption policy for those regions

<div class="info">
<p><strong>Key point:</strong> Think of the ARIA suite as your toolbox for communicating important information to assistive technologies.</p>
</div>

## ARIA concepts, in the simplest possible terms
Roles, states and properties

## The 5 rules of ARIA

[The 5 rules of ARIA](https://www.w3.org/TR/aria-in-html/)


## Useful reference materials for ARIA

For most front end technologies you can expect to find dozens of text books or online courses. I haven't found that to be the case for ARIA. It can feel surprisingly hard to find identify good learning and reference materials for ARIA. The best resources I've found are the documentation.

### The ARIA standard

[The ARIA standard](https://www.w3.org/TR/wai-aria/)

### The ARIA authoring practices

[The ARIA authoring practices](https://www.w3.org/TR/wai-aria-practices-1.2/)

## Testing your ARIA implementation

* Testing your ARIA implementation
    * The Accessibility Tree
    * Using a Screen Reader