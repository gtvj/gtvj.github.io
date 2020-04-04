---
title: D3 visualisation walkthrough
date: 2020-04-03
author: Gwyn
layout: d3_visualisation_walkthrough
---
For the past few months I've been using my free time each week to learn about [D3 Data Driven Documents](https://d3js.org) and preparing weekly sessions for the developers I work with. The materials I've produced are all on the web, including:

* A high-level [slide deck](https://docs.google.com/presentation/d/1H8UbPesAFGUxk4IuWzBh3QmIHK1oG55WdYIeGjZ7ezU/edit?usp=sharing) that starts with the basics before progressing through to more advanced topics
* A companion [web site](https://pure-hamlet-59256.herokuapp.com) which goes into greater detail and contains a lot of examples (both in the page and via interactive examples on CodePen). I built this site in Python Flask and all the source code is on [GitHub](https://github.com/gtvj/data-visualisation-javascript-with-web-standards). The site is hosted on a free Heroku plan, so might take a few seconds for the first page to load. 

**My goal is for _every member of the team_ to feel confident in delivering standards compliant, accessible, dynamic data-driven visualisations by the end of the year.**

## This walkthrough

This post is a bit of an aside to all that, and I'm doing it because I now think I have sufficient knowledge to produce - from scratch - the type of visualisation which really impressed me when I first the late Hans Rosling show it perhaps ten years ago. Here's a clip: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/jbkSRLYSojo?start=30" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The purpose of this post is to step through the process. It's be 'warts 'n all', and it might be that I need to double-back if I get something wrong - but that's OK.

### This is not production code

The examples shown here use modern JavaScript. To ensure compatibility across browsers and devices, a transpilation step will be necessary. But they should work in a capable modern browser (Chrome, Firefox etc.). The first thing to say here is that D3, like all JavaScript, should be applied in a way that leverages progressive enhancement. I'm not going to illustrate it here, but in the real world the initial draw of the SVG would do this. For a visualisation like this, it might be a server-provided table or image (perhaps a static SVG) with a JavaScript generated call to action to see the JavaScript-powered version. 

### Light relief

As I write this the world is in the grip of a pandemic. For entirely selfish reasons, therefore, I'm going to use some 'positive' data - some fake data showing if there is correlation between total exercise time, body weight and running speed. To keep things really simple we'll start with just two data points:

<pre>
    <code>
    let data = [
    {
        month: "January",
        mean_weight: "88.5kg",
        race_pace: "12:00",
        total_exercise_time: "25 hours"
    },
    {
        month: "February",
        mean_weight: "88kg",
        race_pace: "11:45",
        total_exercise_time: "22 hours"
    }];
    </code>
</pre>

### Step 1 - draw the SVG

I want the SVG to occupy the full width of its parent and be displayed in 16:9 aspect ratio. I'm also creating an object to hold configuration properties.

<pre>
    <code>
    let el = document.getElementById("visualisation"),
      width = el.offsetWidth,
      height = (width / 16) * 9;
    
    let config = { el, width, height };
    
    let svg = d3
      .select("#visualisation")
      .append("svg")
      .attr("width", config.width)
      .attr("height", config.height);
    </code>
</pre>

## To be continued... 