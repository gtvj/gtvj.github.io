---
title: Introduction to ARIA
date: 2020-09-30
author: Gwyn
layout: post
---

For a static web page you can normally achieve good accessibility by thinking carefully about the structure and semantics of your content and making effective use of HTML. But for dynamic features you'll likely need to use the Web Accessibility Initiative Accessible Rich Internet Applications (<dfn><abbr title="Web Accessiblity Initiative - Accessible Rich Internet Applications">WAI-ARIA</abbr></dfn>, or commonly referred to as ARIA) suite

<div class="info">
<h2>Learn the basics before tackling ARIA</h2>
<p>This post assumes the reader has a basic technical understanding of web accessibility standards, techniques and testing. If you don't yet have a good foundation in accessibility you should get to grips with the basics before approaching ARIA. If you're not sure where to start, the W3C provide an excellent <a href="https://www.w3.org/WAI/fundamentals/accessibility-intro">introduction to accessibility fundamentals</a>.</p>
<p>This is important because ARIA is powerful and <strong>can significantly harm the accessibility of a your applications if applied incorrectly</strong></p>
</div>

## What is ARIA

ARIA is a suite of tools that allow us to make web content and applications more accessible than is possible using HTML alone. As the term _'rich'_ in the name suggests, ARIA is especially important when we start introducing JavaScript.

<blockquote cite="https://www.w3.org/WAI/standards-guidelines/aria/">
    <p>...especially helps with dynamic content and advanced user interface controls developed with Ajax, HTML, JavaScript, and related technologies.</p>
    <cite>W3C WAI WAI-ARIA Overview</cite>
</blockquote>

But don't be tempted to think it's a case of using HTML for static elements and ARIA for dynamic elements: 

* ARIA is a must for highly dynamic sites but **can also improve the accessibility of a static pages**, and;
* Good HTML is the foundation of accessible pages, and **should always be your first consideration when designing complex JavaScript driven features**

You can think of the Accessibile Rich Internet Applications (ARIA) suite of tecnologies as picking up where HTML has reached its limit. 

<div class="info">
<p><strong>Key point:</strong> ARIA is vital for dynamic pages but can also improve accessibility of static pages</p>
</div>

### What ARIA does for us

A good starting point for considering ARIA is from the perspective of two common front end development tasks: 

* Creating custom JavaScript controls to support complex user interactions
* Dynamically updating content (either in response to user action, results from asynchronous network requests or other events)

For both of these it is all to easy to unwittingly exclude disabled users. **Without careful thought it's likely the controls we provide will not be usuable and content updates not communicated effectively**. The ARIA suite is part of how we ensure this doesn't happen. 

For example, with ARIA we can: 

* Provide descriptive roles for our widgets and regions of the page
* Identify an element as being interactive
* Express the current state of an element
* Represent relationships between elements
* Define regions of a page that are likely to be updated, as well as an interuption policy for those regions

<div class="info">
<p><strong>Key point:</strong> Think of the ARIA suite as your toolbox for communicating important information to assistive technologies.</p>
</div>

We do this in ARIA by applying **roles**, **states** and **properties** to our elements.

### Roles: the 'what' and 'how'

ARIA roles are how we communicate _what_ a thing is and _how_ it can be used. You can think of roles as a **contract** between you and the user. To explore this, let's look at a simple example from the popular Bootstrap library. 

```html
<!-- Focus on the role attribute -->
<li class="nav-item dropdown">
  <a role="button" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false">Dropdown</a>
</li>
```
In this example, we have a link that has been assigned `role="button"`. When an assistive technology encounters this link it will be announced as a button. And this announcement sets expectations: while links are _followed_ using the enter key. Buttons are _activated_ using the space key. It is our responsibility to ensure we're fulfilling the contract by managing the JavaScript event handlers.

Unfortunately, the Bootstrap library doesn't seem to do this. 

<div class="info">
<p><strong>Key point:</strong> by assigning a role you're creating a contract with the user and you need to ensure you fulfil your end of the contract.</p>
</div>

#### Role categorisation

There are around 70 roles available to us as developers categorised into: 

<dl>
    <dt>29 Widget roles</dt>
    <dd>We use these to define user interface widgets. <code>button</code> is a widget role. Widget roles can be standalone (20) or composite (9). For example, <code>tablist</code> is a composite role and must own elements with the <code>tab</code> role, and vice versa</dd>
    <dt>26 Document structure roles</dt>
    <dd>We use these to define structure that organises content in a page. These can declare a wide variety of things, such as defining something as a feed, directory or even - with the <code>presentation</code> role - expressing that something should not be made available to the accessibility APIs</dd>
    <dt>8 Landmark roles</dt>
    <dd>We use these to define navigational landmarks. These predate HTML5 which introduced HTML equivalents, rendering some of these redundant. For example, <code>role="navigation"</code> has been superceded by the <code>nav</code> element.</dd>
    <dt>5 Live region roles</dt>
    <dd>We use live regions to define content which is likely to be updated when user focus may be elsewhere, for example as the result of an asynchronous network request. Since these asynchronous areas are expected to update outside the user's area of focus, live regions allow us to notify assistive technologies such as screen readers that the change should be announced.</dd>
    <dt>2 Window roles</dt>
    <dd>Think of these as providing the accessibilty we'd expect from the windows browsers provide in response to JavaScript <code>alert()</code> and <code>confirm()</code> where we provide dialogs using other methods.</dd>
</dl>

There is an additional category called Abstract role, but these exist for taxonomy purposes and are not to be used by developers. Ignore them. 

### States and properties

States and properties are similar because they both provide specific information about a given object. Both are declared using the aria-prefixed attribute syntax and, from the perspective of day-to-day development, the distinction isn't something we need to dwell on. One helpful way of thinking about the difference is that: 

* A property (such as `aria-labelledby`) is <q cite="https://www.w3.org/TR/wai-aria/#dfn-property">essential to the nature of a given object</q> and doesn't tend to change as a user interacts with a site.
* A state (such as `aria-checked`) is more likely to change, and we need to ensure we are managing this effectively.

It's important to recognise that the ARIA specification provides a framework that we need to operate within. It defines permitted relationships between roles, states and properties as well as the permitted values for states and properties. You can't create your own roles, states or properties and you are confined to using the defined values for states and properties. You can't, for example, say `aria-checked="chicken"`  the permitted and expected relationships between roles, states and properties.

<div class="info">
<p><strong>Key point.</strong> You could say that ARIA is fundamentally about:</p>  
<ul>
    <li>correct and meaningful application of roles, states and properties</li>
    <li>meeting any interaction expectations we have set by doing so (if we say something is a button, it should be usable as a button)</li>
    <li>effectively managing states and properties in response to events</li>
</ul>
</div>

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