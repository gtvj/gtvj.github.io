---
title: Introduction to ARIA
date: 2020-10-06
author: Gwyn
layout: post
---

For static web pages you can normally achieve good accessibility by thinking carefully about the structure and semantics of your content and making effective use of HTML. For dynamic features you'll likely need to use the Web Accessibility Initiative Accessible Rich Internet Applications (<dfn><abbr title="Web Accessiblity Initiative - Accessible Rich Internet Applications">WAI-ARIA</abbr></dfn>, or simply ARIA) suite.
 
 So much of the web is dynamic that you'd expect ARIA is something most JavaScript developers would understand, right? Sadly, it seems that's not the case. It doesn't take much exploration to feel like most dynamic features - and entire applications - have been implemented in a way that will exclude users of assistive technology.

<div class="info">
<h2>Learn the basics before tackling ARIA</h2>
<p>This post assumes the reader has a basic technical understanding of web accessibility standards, techniques and testing. If you don't yet have a good foundation in accessibility you should get to grips with the basics before approaching ARIA. If you're not sure where to start, the W3C provide an excellent <a href="https://www.w3.org/WAI/fundamentals/accessibility-intro">introduction to accessibility fundamentals</a>.</p>
<p>This is important because ARIA is powerful and <strong>can significantly harm accessibility if it's applied incorrectly</strong>. If you'd like to understand more about the potential dangers of ARIA see the description from <a href="https://www.w3.org/TR/wai-aria-practices-1.2/#no_aria_better_bad_aria">the authoring practices</a></p>
</div>

## What is ARIA

ARIA is a suite of tools that allow us to make web content and applications more accessible than is possible using HTML alone. It provides a way for us to pass information to the [Accessibility API](https://www.w3.org/TR/core-aam-1.1/#dfn-accessibility-api) of the user's Operating System which, in turn, passes the information to Assistive Technologies (AT). As the term _'rich'_ in the name suggests, ARIA is especially important when we start introducing JavaScript.

<blockquote cite="https://www.w3.org/WAI/standards-guidelines/aria/">
    <p>...especially helps with dynamic content and advanced user interface controls developed with Ajax, HTML, JavaScript, and related technologies.</p>
    <cite>W3C WAI WAI-ARIA Overview</cite>
</blockquote>

But don't be tempted to think of this as a clear delineation with HTML being for static elements and ARIA for dynamic elements: 

* ARIA is a must for highly dynamic sites but **can also improve the accessibility of a static pages**, and;
* Good HTML is the foundation of accessible pages, and **should always be your first consideration when designing complex JavaScript driven features**

ARIA can express things that HTML can't, and this can be very helpful even for static pages. It's best to think of the ARIA as picking up where HTML reaches its limits. 

<div class="info">
<p><strong>Key point:</strong> ARIA is vital for dynamic elements but, because it can express things HTML can't, it can also improve accessibility of static elements.</p>
</div>

### What ARIA does for us

Let's look at ARIA in the context of two common front end development tasks: 

* Creating custom JavaScript-driven widgets to support complex user interactions
* Dynamically updating content (either in response to user action, results from asynchronous network requests or other events)

For both of these it is all to easy to unwittingly exclude disabled users. **Without careful thought about accessibility it's likely the controls we provide will not be usuable and content updates will not communicated effectively**. The ARIA suite is part of how we ensure things work for everyone. 

For example, with ARIA we can: 

* Provide descriptive roles for our widgets and regions of the page
* Identify an element as something a user can interact with
* Express the current state of an element
* Provide helpful labels for AT users 
* Represent relationships between elements beyond what is possible using HTML (for example expressing that one element controls another)
* Define regions of a page that are likely to be updated, so that assistive technologies know to announce changes when the user's focus is elsewhere

<div class="info">
<p><strong>Key point:</strong> Think of the ARIA suite as your toolbox for communicating important information to assistive technologies.</p>
</div>

### Roles, states and properties

Everything we do in ARIA is through **roles**, **states** and **properties**. The application and management of these is essentially what ARIA is.

<div id="roles_states_properties"></div>
<script src="https://d3js.org/d3.v5.min.js"></script>
<script src="/assets/scripts/aria-introduction/roles_states_properties.js"></script>

#### Roles: the 'what' and 'how'

ARIA roles are how we communicate _what_ a thing is and _how_ it can be used. Here's how the specification defines roles:

<blockquote cite="https://www.w3.org/TR/wai-aria/#dfn-role">
Main indicator of type. This semantic association allows tools to present and support interaction with the object in a manner that is consistent with user expectations about other objects of that type.
<cite>ARIA 1.1 standard specification</cite>
</blockquote>

You can think of applying a role as making both a statement and a promise (for example, "this is a switch and you can interact with it as you would normally interact with a switch").

##### Role categorisation

There are around 70 roles available to us as developers categorised into: 

<dl>
    <dt>29 Widget roles</dt>
    <dd>We use these to define user interface widgets. <code>button</code> is a widget role. Widget roles can be standalone (20) or composite (9). For example, <code>tablist</code> is a composite role and must own elements with the <code>tab</code> role, and vice versa</dd>
    <dt>26 Document structure roles</dt>
    <dd>We use these to define structure that organises content in a page. These can declare a wide variety of things, such as defining something as a feed, directory or even - with the <code>presentation</code> role - expressing that something should not be made available to the Accessibility API</dd>
    <dt>8 Landmark roles</dt>
    <dd>We use these to define navigational landmarks. These predate HTML5 which introduced HTML equivalents, rendering some of these redundant. For example, <code>role="navigation"</code> has been superceded by the <code>nav</code> element.</dd>
    <dt>5 Live region roles</dt>
    <dd>We use live regions to define content which is likely to be updated when user focus may be elsewhere, for example as the result of an asynchronous network request. Because these areas are expected to update outside the user's area of focus, live regions allow us to notify assistive technologies such as screen readers that the change should be announced.</dd>
    <dt>2 Window roles</dt>
    <dd>Think of these as providing the accessibilty we'd expect from the windows browsers provide in response to JavaScript <code>alert()</code> and <code>confirm()</code> where we provide dialogs using other methods. Of course the custom dialogs we create can be much richer than what is possible using the native JavaScript methods.</dd>
</dl>

There is an additional category called Abstract role, but these exist for taxonomy purposes and are not to be used by developers. Ignore them. 

##### A less than ideal implementation

To explore this, let's look at a simple example from the popular Bootstrap library. 

```html
<!-- Focus on the role attribute -->
<li class="nav-item dropdown">
  <a 
    role="button" 
    data-toggle="dropdown" 
    href="#" 
    aria-haspopup="true"
    aria-expanded="false">Dropdown</a>
</li>
```
In this example, we have a link that has been assigned `role="button"`. This modifies the semantics of the element for assistive technologies and, as as a result, it will be announced as a button. 
 
 Changing semantics in this way sets user expectations or, as the [authoring guidelines](https://www.w3.org/TR/wai-aria-practices/#no_aria_better_bad_aria) put it <q cite="https://www.w3.org/TR/wai-aria-practices/#no_aria_better_bad_aria">A role is a promise</q>. In the same way a sighted user will expect something that visually resembles a button to be clickable, a user of assistive technology will expect something that is announced as a button to be activated **in the normal way**. But applying a role won't suddenly make an element focusable, change its appearance, or magically assign the correct JavaScript event handlers to meet user expectations. **We need to manage all of this**. 

Here's the thing with the Bootstrap implementation: the interaction patterns for links and buttons are different for keyboard users. Links are _followed_ using the enter key, but buttons are _activated_ using the space or enter key. Unfortunately, the Bootstrap library doesn't seem to have provided space bar activation for elements they've applied the role to. A broken promise.

<div class="info">
<p><strong>Key point:</strong> by assigning a role we're making a promise to the user and therefore have to meet the expectations set. <strong>It is our responsibility to ensure we manage focus and JavaScript event handlers so that they are able to interact with elements in a way that meets the expectations we have set</strong></p>
</div>



#### States and properties

States and properties are similar because they both provide specific information about a given object. Both are declared using the aria-prefixed attribute syntax and, from the perspective of day-to-day development, the distinction isn't something we need to dwell on. One helpful way of thinking about the difference is that: 

* A property (such as `aria-labelledby`) is <q cite="https://www.w3.org/TR/wai-aria/#dfn-property">essential to the nature of a given object</q> and doesn't tend to change as a user interacts with a site.
* A state (such as `aria-checked`) is more likely to change, and we need to ensure we are managing this effectively.

**It's important to recognise that the ARIA specification provides a framework that we need to operate within.** It defines: the roles, states and properties; the permitted values, and; the relationships between them. You can't create your own roles, states or properties and you are confined to using the permitted values and relationships. You can't, for example, say `role="zoomer"` or `aria-checked="first"` or decide that your `tablist` is special and need not contain `tab` items.

<div class="info">
<p><strong>Key point.</strong> You could say that ARIA is fundamentally about:</p>  
<ul>
    <li>correct and meaningful application of roles, states and properties</li>
    <li>meeting any interaction expectations we have set by doing so (if we say something is a button, it should be usable as a button)</li>
    <li>effectively managing states and properties in response to events</li>
</ul>
</div>

## The 5 rules of ARIA

W3C guidance on using ARIA sets out [5 rules](https://www.w3.org/TR/aria-in-html/) for how to approach using ARIA. These can be summarised as: 

<dl>
    <dt>Use HTML semantics instead of ARIA where possible</dt>
    <dd>If you can use a native HTML element or attribute with the semantics and behaviour you require already built in then do so.</dd>
    <dt>Don't change native semantics</dt>
    <dd>Do not change native semantics, unless you really have to. Consider introducing elements which have no semantics instead.</dd>
    <dt>All ARIA controls must be usable with a keyboard</dt>
    <dd>In addition to other interactions, all interactive widgets must be scripted to respond to standard key strokes or key stroke combinations where applicable.</dd>
    <dt>Don't hide visible, focusable elements from assistive technologies</dt>
    <dd>Do not use <code>role="presentation"</code> or <code>aria-hidden="true"</code> on a visible focusable element. Using either of these on a visible focusable element will result in some users focusing on 'nothing'.</dd>
    <dt>All interactive elements must have a name</dt>
    <dd>An interactive element only has an accessible name when its Accessibility API accessible name (or equivalent) property has a value. In practice, this name can be derived from different sources, and browsers use an algorithm to determine what to use. Paciello Group have written <a href="https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/">about this</a></dd>
</dl>


## Useful reference materials for ARIA

For front end frameworks you usually find people falling over themselves to produce learning materials before everyone moves on to something else. That doesn't tend to be the case for web standards and it can feel surprisingly hard to find good learning materials for ARIA.

The best learning and reference resource for ARIA is the documentation. This can be a bit daunting at first but the ARIA documentation has improved significantly in recent years and, with a bit of orientation, you'll be able to get all you could need from it.

In this section I'll point you to all the key sections of this vast documentation that you'll need to get going.

### The ARIA authoring practices

I'm going to start with the [authoring practices](https://www.w3.org/TR/wai-aria-practices-1.2/) because they are aimed at the web developer audience. They provide practical information about how to apply ARIA and go beyond what might be evident from the specification.

Key sections are: 

<dl>
    <dt><a href="https://www.w3.org/TR/wai-aria-practices-1.2/#aria_ex">Design patterns</a></dt>
    <dd>This section describes ARIA design patterns for many common widgets. For each there is an example, an explanation of the expected keyboard interactions, and the relevant roles states and properties. When reviewing these design patterns bear in mind that the patterns might be using newer ARIA features and <a href="https://www.w3.org/TR/wai-aria-practices-1.2/#browser_and_AT_support">might not be available to all browsers and AT</a> </dd>
    <dt><a href="https://www.w3.org/TR/wai-aria-practices-1.2/#aria_landmark">Landmarks</a></dt>
    <dd>Provides guidance on using the landmark regions</dd>
    <dt><a href="https://www.w3.org/TR/wai-aria-practices-1.2/#names_and_descriptions">Providing accessible name</a></dt>
    <dd>Describes the practical considerations for ensuring accessible names and descriptions</dd>
</dl>

There is more to the authoring practices than this, but these sections should prove to be a good starting point.

### The ARIA standard specification

The [standard specification](https://www.w3.org/TR/wai-aria/) is more detailed and has a broader audience than the authoring practices. It kind of feels like the primary audience is browser and assistive technology vendors, but there is a lot of value here for developers too. 

**You should think of the standard as your primary source for understanding what something means.** It is especially helpful for understanding the permitted and expected relationships between roles, states and properties. 

Key sections for developers are:

<dl>
    <dt><a href="https://www.w3.org/TR/wai-aria/#role_definitions">Definition of roles</a></dt>
    <dd>Provides short descriptions of all roles, usually a sentence or two.</dd>
    <dt><a href="https://www.w3.org/TR/wai-aria/#roles_categorization">Categorisation of roles</a></dt>
    <dd>This provides an index of all available roles. By clicking on a role you can see its description, its supported states and properties and - if it's a composite role - how it relates to other roles. Additionally, because the states and properties are all links, you can learn more about those.</dd>
    <dt><a href="https://www.w3.org/TR/wai-aria/#state_prop_def">State and properties<strong> definitions</strong></a></dt>
    <dd>Provides concise descriptions of all ARIA states and properties</dd>
    <dt><a href="https://www.w3.org/TR/wai-aria/#state_prop_values">State and property <strong>values</strong></a></dt>
    <dd>Provides a reference for the permitted values for a given state or property</dd>
</dl>

<div class="info">
<p><strong>Key point:</strong> Like all web standards ARIA is evolving. This means that you'll need to think about compatibility when considering newer ARIA features.</p>
</div>

## Testing your ARIA implementation

How to test your ARIA implementation is beyond the scope of this post. That said, it should hopefully be apparent that ARIA isn't something you can rely upon automated tools to test. **You will need to do manual testing to test your ARIA implementation**. 

I do hope to do a future post on accessibility testing at some point. In the meantime, here are a few things that might be of some use: 

* Your ARIA roles, states and properties can be inspected using the Accessiblity Tree viewer in browser developer tools.
* Review your implementation against what is described in the authoring practices to ensure it's meeting everything that is expected (and the expected interactions - and changes in response to those interactions - are as expected)
* There is no substitute for testing with real users of AT. If that absolutely isn't an option for you learn how to use a screen reader and try interacting with the site yourself. It could be quite revealing. 

## Final thoughts

I hope that this post has given a good overview of ARIA and provided useful information for where to go to get started. As the developers that write code which executes in a user's browser **we** need to think about accessibility and broader inclusion from the outset and throughout any project we're working on. And **we** need to make sure our designers and product owners and stakeholders understand the implications of different design and implication choices. **It really is our responsibility to own this because we're almost certainly the only person on the team with knowledge of how the front end actually works.**

Too often though what I’ve seen is developers not consider inclusion at all then, when someone asks about accessibility, it all seems too difficult and expensive to go back unpick everything to make it accessible. The team, quite understandably, want to move on to building the next thing so they do some colour contrast changes and move on.

This is a major source of frustration for many of us in the front end community because too often the residual issues at the end of a project are accessibility problems. Managers typically accept the seeming inevitability of this because they don’t have the technical knowledge to see the root cause of the issue and, because resources are tight and there are other priorities, everyone moves on - with the web just that little bit worse than it had been. It doesn't have to be this way and we are in the best possible position to change things.