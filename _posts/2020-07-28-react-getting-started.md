---
title: React getting started - course notes
date: 2020-07-28
author: Gwyn
layout: post
---

I've been continuing my React refresher / journey this month and have just completed the Pluralsight course [React: Getting Started](https://app.pluralsight.com/player?course=react-js-getting-started) on a directorate learning day. This is a pretty good course and acted as a good refresher - including some new concepts around React Hooks. My notes from the course are available as a [PDF mind map](/content/react_getting_started.pdf) as well as an outline below.

<a href="/content/react_getting_started.pdf">
    ![React: The big picture](/content/react_getting_started.png "React: The big picture")
</a>

## Why React? 

Here are a few reasons why you might want to choose React:

* React a small incomplete library - you'll likely need to use other stuff in addition to React - but this does mean it's **more flexible than a framework**.
* React takes the declarative nature of HTML and extends this to dynamic data (rather than simply static content). It therefore enables developers to **declaratively describe their UIs and model the state of the interfaces**

Things that have made React popular include:
* The **Virtual DOM is easier** than dealing with the DOM API
* strong **corporate backing increases trust** in the library
* It provides a **declarative language to model UI and state**

### A resource for learning
Common problems faced by React developers are described in [React: commonly faced problems](https://jscomplete.com/learn/react-beyond-basics/react-cfp)

## Basic concepts

Components are just like functions. They take input and return a UI.

The input for a component is props and state: 

* **Props are explicitly passed to components**, appearing similar to HTML attributes. **Props are immutable and cannot be changed by the component**. They can be changed _by the component's parent_ and for the component to be re-rendered
* a component **has control over its internal state**.

The output is a user interface - declared as JSX, and shippe shipped to the browser as React API calls). Remember that JSX is not HTML. It will be compiled to pure JavaScript that is sent to the browser (if you wanted to you could just write the raw API calls in your component).

### Components are reusable and composable

Here's a gist I've created which demonstrates and explains some concepts of component composition and
 reuse
<script src="https://gist.github.com/gtvj/aea026d92dc6fabed0391f379d58fadc.js"></script>
                  
### Types of component

The first decision to make in a React app is the component structure: how many components to use, and what each component should describe.

You'll then need to decide on the what type of component to use.

There are two types of component and you can choose to mix and match these within a single app: **Function components** (which are simpler and generally preferred), and; **Class components** (which are more powerful). Both can have state and create side-effects.

When naming a component it must be capitalised. This ensures React doesn't interpret the name as referencing a HTML element rather than a React component. Sound confusing? It isn't - just imagine having a React component called `button`. When passing
 this to `ReactDOM.render()`, it would appear to be an HTML element unless capitalised.

#### Class components

Here's an example of using a Class component
<script src="https://gist.github.com/gtvj/4e35673537abc3c182dd313895584cbf.js"></script>

The only method Class components must have is `render()`

### Styling React components
There are several ways to style React components, including:
* Inline CSS (using JavaScript objects within the 'style' property of your components - and camel casing where necessary
* Styled components

### Working with data
Here's a demonstration of how you might work with data within a component

<script src="https://gist.github.com/gtvj/0f510f8af80a94493969b4cd1384ded1.js"></script>

### Taking input from users
This gist demonstrates of how you might accept user input within a component

 <script src="https://gist.github.com/gtvj/582f3b63cded2cff96bd939514d6ef88.js"></script>


###  The one way flow of data
 Parent components can flow their data and behaviour down to their child components **through props**

### Hooks
Allow you to use state and other features without writing a class. An example hook is
[useState](https://reactjs.org/docs/hooks-state.html).

You can also create your own custom hooks. When doing so it's a good practice to name any custom hooks your create starting with 'use'

### Reactive updates / tree reconciliation / Virtual DOM
In React, you generate HTML using JavaScript, rather than having a HTML template language. 

This allows React's Virtual DOM which uses tree reconciliation to update only what has changed. While it may be easier to generate a DOM more easily using the native DOM API, the React Tree Reconciliation makes it far easier to update the DOM - this is partly because React will only update those elements which need to change, rather than everything and partly because you do this in a declarative way when using React

 You can, of course, also do this with the DOM - but that requires imperative logic. React's Virtual DOM is delarative.
     
### Some modern JavaScript you'll need to understand
Since 2015 we've had yearly releases of ECMAScript named    ES[year] made by TC39

#### Variables and block scopes: let and const
In most cases, const is preferred because it guarantees the value will not have changed.

#### Arrow functions
Work better than traditional functions for closures. Why? Because they do not implicitly bind 'this' to the caller. Instead, Arrow function close over the value of 'this' at the time it was defined. This makes it great for delayed execution functions like listeners because it provides easy access to the defining environment.

Here's a gist that demonstrates this: 

<script src="https://gist.github.com/gtvj/dc4bdb8f9094d9ddf7cb1879de7e4107.js"></script>

This behaviour of arrow functions is a great benefit when working with listeners and event handlers

#### Object literal improvements

A couple of improvements to object literals are often seen when working with React. These are:

* [Shorthand property and method names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015)
* [Computed property names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names)

#### Destructuring and rest/spread

I've [written about spread before](/2020/07/12/spread-operator.html) but a few things to note are shown below:

You can use destructuring in function definitions and, when doing so, you can still set defaults
<script src="https://gist.github.com/gtvj/30db8bfa523d35b2aaac3ea950c4e40c.js"></script>

You use the rest operator to create a new array or object with the 'rest' of the items
<script src="https://gist.github.com/gtvj/db72f395a1dcaf168aead64abffcaca2.js"></script>

#### Promises and async/await
Async/await syntax is a way to consume promises without having to nest .then calls. Remember that, once you await on anything in a function, the function itself becomes asynchronous and it will return a promise object. 

Here's an gist I've prepared which lets you compare the two:

<script src="https://gist.github.com/gtvj/bcc57454d8bad15c5a1009ecabcbcbec.js"></script>

#### Other features you'll see in React
You'll also commonly see [template literals](/2016/10/11/simple-template-literals.html) and [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).
 
In reality, you could potentially see any other new language feature since React itself requires transpiling)

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

