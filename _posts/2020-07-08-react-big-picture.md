---
title: React big picture - course notes
date: 2020-07-08
author: Gwyn
layout: post
---

This quarter I'm focussing my learning on ReactJS. 

While I've been working with it for a few years now, in my current role it tends to be used quite lightly (with a few components spread across some key applications). This means that my interaction with it has been pretty sporadic, and I want to ensure my skills are up to date and comprehensive so that I can be most effective with it.

I've stared by doing a new Pluralsight course (published 3 months ago) which looks at the 'big picture' and I've found it to be really helpful. As always, I'm publishing my notes here in [PDF](/content/react-the-big-picture.pdf) format as well as an outline in HTML (below).

<a href="/content/react-the-big-picture.pdf">
    ![React: The big picture](/content/react-the-big-picture.png "React: The big picture")
</a>


# Outline notes

1.  React: The Big Picture
    1.  Why React
        1.  A library, and less opinionated than 'frameworks'
        2.  Versatility is improved because the 'renderer' is separate to React itself.
            1.  Incl server-side (Next.js, Gatsby, Phenomic) and thinkgs like render to PDF
        3.  https://codesandbox.io
            1.  React sandbox
        4.  Code mod
            1.  When breaking changes occur in React, Facebook provide a 'code mod'. This is a CLI tool you can point at your code to automatically make changes.
        5.  Huge availability of mature and open source components
            1.  See the awesome React list for examples: https://github.com/enaqx/awesome-react
        6.  Some key parts of the ecosystem
            1.  React Router
            2.  Redux
            3.  Mobx
            4.  Jest
            5.  GraphQL
            6.  Next.js
        7.  React + ReactDom = 35K when gzipped and minified
            1.  Inferno and Preact are two smaller versions of React, if you need one.
        8.  Testability
            1.  Reacts functional components are 'pure' (given the same input, you get the same output).
                1.  Jest is the most popular React testing solution
    2.  Tradeoffs
        1.  Key tradeoffs:
            1.  Library (not framework)
            2.  Explicit (not concise)
                1.  React uses one-way binding, so you have to handle changes in a handler (Angular and others prefer two-way binding)
            3.  JavaScript centric (not template centric)
                1.  Whereas Angular and others put JS in HTML, React puts HTML in JS
            4.  Separation of concerns - Single files for components (not separate templates)
                1.  React is not MVC
                2.  React mixes logic and markup - but thinks of separation of concerns as separating components. Each component is a separate concern.
            5.  React is not the web component standard (which does exist)
                1.  The Web Component standard exists - but browser support is spotty and browser vendors don't seem interested in it
                    1.  Templates
                    2.  Custom elements
                    3.  Shadow DOM
                    4.  Imports
                2.  Everything you can do in Web Components can be done in React (or Angular etc.)
                    1.  Template == JSX
                    2.  Custom elements == components
                    3.  Shadow DOM == CSS modules
                    4.  Imports == one component per file
            6.  Corporate backing means React is driven by Facebook's needs. But this has benefits as compared to purely 'community' driven projects
    3.  Why not React
        1.  Concerns
            1.  HTML and JSX differ
                1.  Differences
                    1.  htmlFor
                    2.  className
                    3.  Styles in JSON format
                    4.  Comments in JavaScript format
                2.  There are conversion tools (including a NPM package)
            2.  Build step is required
                1.  The most popular transpires (Babel and Typescript) work well with React
                2.  There are also boilerplates (like create-react-app) which configure everything automatically
            3.  Version conflicts
                1.  You can't run two different versions of React together on the same page.
                2.  You also need to ensure your dependencies (like React router) are compatible with the version of React you're using
            4.  Out of date information online
                1.  Several features have been extracted from React core and exist separately now
                2.  When in doubt, check the React documentation
            5.  Decision fatigue
                1.  Key decisions for a team to make upfront:
                    1.  What development environment
                        1.  Most people use create-react-app
                    2.  To use classes or functions
                        1.  Most people prefer functions these days.
                    3.  How to handle types
                        1.  Three popular ways: prototypes, typescript or Flow
                    4.  How to handle state
                        1.  Popular ways: plain React, Flux, Redux or MobX
                            1.  Redux is currently most popular
                            2.  But remember: you often will not need a separate state management library. You can build powerful apps using plan React.
                    5.  How to handle styling
                        1.  Most React developers continue to use traditional styling approaches
