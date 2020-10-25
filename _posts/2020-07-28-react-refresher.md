---
title: React refresher 2020
date: 2020-07-28
author: Gwyn
layout: post
---

I was recently asked to help a developer that had picked up some code that made pretty heavy use of [React Hooks](https://reactjs.org/docs/hooks-intro.html). While we were able to make the necessary changes to this code I thought it might be a good idea to do a refresher in React and to share what I learned. 

<div class="info">
<h2>This is a refresher post</h2>
<p>I'm not new to React. I know and have been working with it for years.</p>
<p>I take these kind of 'refresher' journeys from time to time, just to make sure that my knowledge and approach is current and I tend to try and share what I come across, both for my own reference and for others.</p>
<p>For this particular refresher it was only React Hooks that were new to me, which is reassuring.</p>
</div>

I used the latest [React]([React: Getting Started](https://app.pluralsight.com/player?course=react-js-getting-started)) course on Pluralsight as my guide, supplemented with materials from O'Reilly Learning and the React documentation. My notes are available as a [PDF mind map](/content/react-getting-started.pdf).

<figure>
<a href="/content/react-getting-started.pdf">
    <img src="/content/react-getting-started.png" alt="React: The big picture">
</a>
<figcaption>My course notes in mind map form</figcaption>
</figure>

 I've also provided outline notes below which include a number of GitHub gists to explain specific concepts. 
 
 If any of this isn't clear let me know and I'll be happy to help.

## Some benefits of React

Here are a few reasons why you might want to choose React:

<dl>
    <dt>Small and flexible</dt>
    <dd>React is a small library and more flexible than a framework. You'll likely have to use other tools in addition to React, but you'll have greater flexibility than if you adopt a framework (though it should be noted this too has its drawbacks)</dd>
    <dt>Declarative</dt>
    <dd>React takes the declarative nature of HTML and extends this to dynamic data (rather than simply static content). It therefore enables developers to declaratively describe their UIs and model the state of the interfaces</dd>
    <dt>Virtual DOM</dt>
    <dd>The Virtual DOM is easier to update and reconcile (and simply easier to work with, really) than the native DOM.</dd>
</dl>

### Reactive updates and tree reconciliation 
In React, you generate HTML using JavaScript, rather than having a HTML template language. JSX might look like a template language but it's just a syntax extension which gets compiled down to `React.createElement()` calls that result in an in-memory representation of the current DOM known as the Virtual DOM. This Virtual DOM can then be applied to the real DOM.

<blockquote cite="https://reactjs.org/docs/faq-internals.html">
The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.
<cite>React Documentation: Virtual DOM and Internals</cite>
</blockquote> 

This might seem redundant but remember that DOM operations are expensive. The benefit of the in-memory Virtual DOM is that tree reconciliation can be used to update only what has changed. 

Remember this: while it may be easier to generate a DOM using the native DOM API, the React Tree Reconciliation makes it far easier to update the DOM - this is:
 
 * because React will only update those elements which need to change, and; 
 * because **you do this in a declarative way** when using React

 You can, of course, also do this with the DOM - but that requires imperative logic. React's Virtual DOM is delarative.


<div class="info">
<h2>Commonly faced problems</h2>
<p>Agile Labs have provided resource to help with <a href="https://jscomplete.com/learn/react-beyond-basics/react-cfp">common beginner problems</a> when getting to grips with React</p>
</div>


## Basic concepts of React

### Components

Components are just like functions. They take input and provide output. 

<dl>
    <dt>Component input</dt>
    <dd>The input for a component is <strong>props</strong> and <strong>state</strong>. Key differences between these relate to control: a component does not control its props. They are immutable and passed to a component. Props can, however, be changed by the component's parent (at which point the component will be re-rendered). On the flipside, a component has complete control over its internal state.</dd>
    <dt>Component output</dt>
    <dd>The output is a user interface - declared as <a href="https://reactjs.org/docs/introducing-jsx.html">JSX</a>, and shipped shipped to the browser as React API calls (which in turn render HTML). Remember that JSX is not HTML. It will be compiled to pure JavaScript that is sent to the browser (if you wanted to you could just write the raw API calls in your component).</dd>
</dl>



####  The one way flow of data
 Because parent components can flow their data and behaviour down to their child components **through props** this is known as a one way flow of data. In order for a child component to change state of a parent, the parent would have to pass a function reference to the child - there are examples of this shown below.
 
### Types of component

The first decision to make in a React app is the component structure: how many components to use, and what each component should describe.

You'll then need to decide on the what type of component to use.

There are two types of component and you can choose to mix and match these within a single app: **Function components** are simpler and generally preferred, and; **Class components** (which are more powerful). Both can have state and create side-effects - but you'll need to use a hook to access these features within function components. An example hook is
[useState](https://reactjs.org/docs/hooks-state.html).

#### Class components
Here's an example of using a Class component
<script src="https://gist.github.com/gtvj/4e35673537abc3c182dd313895584cbf.js"></script>

The only method Class components must have is `render()`

#### Function components
This app (which is discussed later) is made up entirely from function components.

<script src="https://gist.github.com/gtvj/aea026d92dc6fabed0391f379d58fadc.js"></script>


#### Naming components
When naming a component it must be capitalised. This ensures React doesn't interpret the name as referencing a HTML element rather than a React component. Sound confusing? It isn't - just imagine having a React component called `button`. When passing
 this to `ReactDOM.render()`, it would appear to be an HTML element unless capitalised.

### Components are reusable and composable

Here's a gist I've created which demonstrates and explains some concepts of component composition and
 reuse. One thing in particular to notice is that **a function reference being passed from the parent to a child component** and how this allows for the parent state to be amended within the child.
 
<script src="https://gist.github.com/gtvj/aea026d92dc6fabed0391f379d58fadc.js"></script>

### Styling React components
There are several ways to style React components, including:
* Inline CSS (using JavaScript objects within the 'style' property of your components - and camel casing where necessary)
* Styled components
* Normal, exteral CSS files

### Working with data
Here's a demonstration of how you might work with data within a component. A few things to note here: 

* This app mixes class and function components
* The use of `.map()` to iterate over an array
* The ways JSX differs from HTML - for example `className` rather than `class` (which is a reserved word in JavaScript)

<script src="https://gist.github.com/gtvj/0f510f8af80a94493969b4cd1384ded1.js"></script>

### Taking input from users
This gist demonstrates of how you might accept user input within a component.

A few things to note here (which are more fully described in the comments): 

* The use of a controlled component (because input values are linked to state, and how this requires an `onChange` handler for changes to have an impact)
* How we are (again) updating the parent state from within a child (via a function reference passed by props) - see `addNewGuitar` in the `App` component.

 <script src="https://gist.github.com/gtvj/582f3b63cded2cff96bd939514d6ef88.js"></script>

You can also create your own custom hooks. When doing so it's a good practice to name any custom hooks your create starting with 'use'

### Some good practices
Here are some tips for designing React apps:
* Reuse - when extracting components for re-use, you're looking for balance. Too few or too many are both bad design. When considering candidates a helpful pointer can be this: if you have many items that share data or behaviour, they could be a candidate for a component
* Minimise state: general advice when working with stateful components is to minimise state. Compute values where possible, rather than storing them.
* You want a components props to be exact. Only what's needed to render the component (and nothing else)
* Seek to ensure that the structure of your components is consistent:
    * Start with any hooks into state and side effects
    * Follow this with an computations based on state (i.e. practiceIsDone if remainingSongs.length == 0)

### Using Side Effect Hooks with useEffect()
From the React docs: 

> If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.

There are two common kinds of side effects in React components. Those that require cleanup and those that don't.

#### Effects without cleanup

This gist is an example of an effect without cleanup.

<script src="https://gist.github.com/gtvj/464c5bcae76546bc87842e5aa324adc6.js"></script>

#### Effects with cleanup
Effects with cleanup. Simple. If your effect returns a function, that function will be used to cleanup when the component unmounts

#### Unmounting and re-mounting components
It's useful to know that changing a component's 'key' attribute will result in the  component being unmounted and re-mounted. 

This behaviour is demonstrated in this gist:
<script src="https://gist.github.com/gtvj/2411b621e661030adad45026f20dcea2.js"></script>

### Setting up a development environment
Like just about everything in modern JavaScript, setting up a React development environment isn't exactly straightforward. It requires making many different tools (which have different APIs, configurations, release cycles etc.).

But there are tools that allow you to get up and running quickly

#### Quick start with: create-react-app
This is an NPM package which provides many more tools that what is necessary - it's pretty much everything and the kitchen sink. 

#### A lighter quick start: Reactful
This is an NPM package which functions similarly to create-react-app (in that you can use it to create a working environment). The difference is that the is bare bones and ejected by default (i.e. the configuration is flat and editable).

## Appendix. Some modern JavaScript you'll commonly encounter in React
Since 2015 we've had yearly releases of ECMAScript named ES[year] made by TC39. There are several new language features you'll likely encounter in React.

### Arrow functions
These are common because **they work better than traditional functions for closures**. Why? Because they do not implicitly bind 'this' to the caller. Instead, **Arrow function close over the value of 'this' at the time it was defined**. This makes it great for delayed execution functions like listeners because it provides easy access to the defining environment.

Here's a gist that demonstrates this: 

<script src="https://gist.github.com/gtvj/dc4bdb8f9094d9ddf7cb1879de7e4107.js"></script>

This behaviour of arrow functions is **a great benefit when working with listeners and event handlers**

### Object literal improvements

A couple of improvements to object literals are often seen when working with React. These are:

* [Shorthand property and method names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015)
* [Computed property names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names)

### Destructuring and rest/spread

I've [written about spread before](/2020/07/12/spread-operator.html) but a few things to note are shown below:

**You can use destructuring in function definitions** and, when doing so, you can still set defaults
<script src="https://gist.github.com/gtvj/30db8bfa523d35b2aaac3ea950c4e40c.js"></script>

You **use the rest operator in a function definition** to create a new array or object with the 'rest' of the items
<script src="https://gist.github.com/gtvj/db72f395a1dcaf168aead64abffcaca2.js"></script>

### Promises and async/await
The async/await syntax allows you to consume promises without having to nest `.then()` calls. One thing to remember is that, once you await on anything in a function, the function itself becomes asynchronous and it will return a promise object. 

Here's an gist I've prepared which lets you compare the async/await approach with more traditional promises:

<script src="https://gist.github.com/gtvj/bcc57454d8bad15c5a1009ecabcbcbec.js"></script>

### Other features you'll see in React
You'll also commonly see [template literals](/2016/10/11/simple-template-literals.html), [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) and block scoping with `const` and `let`.
 
In reality, you could potentially see any other new language feature (since React itself requires transpiling), but these seem most common.
