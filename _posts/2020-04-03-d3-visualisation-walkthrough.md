---
title: Building a dynamic D3 bubble visualisation - a walkthrough
date: 2020-04-03
author: Gwyn
layout: d3_visualisation_walkthrough
---
I explained in a recent post that I've been using my free time each week to learn about [D3 Data Driven Documents](https://d3js.org) and preparing weekly sessions for the developers I work with. The materials I've produced are all on the web, including:

* A high-level [slide deck](https://docs.google.com/presentation/d/1H8UbPesAFGUxk4IuWzBh3QmIHK1oG55WdYIeGjZ7ezU/edit?usp=sharing) that starts with the basics before progressing through to more advanced topics
* A companion [web site](https://pure-hamlet-59256.herokuapp.com) which goes into greater detail and contains a lot of examples (both in the page and via interactive examples on CodePen). I built this site in Python Flask and all the source code is on [GitHub](https://github.com/gtvj/data-visualisation-javascript-with-web-standards). The site is hosted on a free Heroku plan, so might take a few seconds for the first page to load. 

**My goal is for _every member of the team_ to feel confident in delivering standards compliant, accessible, dynamic data-driven visualisations by the end of the year.**

## About this walkthrough

This post is a bit of an aside to all that, and I'm doing it because I now think I have sufficient knowledge to produce - from scratch - the type of visualisation which really impressed me when I first the late Hans Rosling show it perhaps ten years ago. Here's a clip: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/jbkSRLYSojo?start=30" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The purpose of this post is to step through the process. It's be 'warts 'n all', and it might be that I need to double-back if I get something wrong - but that's OK.

### This is not production code

The examples shown here use modern JavaScript. To ensure compatibility across browsers and devices, a transpilation step will be necessary. But they should work in a capable modern browser (Chrome, Firefox etc.). 

### Progressive enhancement would be used in production

I also want to say that D3, like all JavaScript, should be applied in a way that leverages progressive enhancement. I'm not going to illustrate it here, but in the real world the initial draw of the SVG would do this. For a visualisation like this, it might be a server-provided table or image (perhaps a static SVG) with a JavaScript generated call to action to see the JavaScript-powered version. 

### Light relief

As I write this the world is in the grip of a pandemic. For entirely selfish reasons, therefore, I'm going to use some 'positive' data - some fake data that might be used to determine if there is any correlation between total exercise time, body weight and running speed changes over time. To keep things really simple we'll start with just two data points:

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

## The walkthrough

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

### Step 2 - prepare the data

We're gong to fake this bit. The point here is that our JSON data is not currently in a good shape for a visualisations and needs to be 'prepared'. Let's imaging I'm fetching this data from an API, and then have run it through a function that cleans it and turns it into a JavaScript object. D3 provides a number of utilities that could help with this. 

Here's an example showing how you might take some data loaded from a CSV and use unary plus to convert string representations of numbers to their numeric equivalents.

<pre>
    <code>
    // This is just for illustration purposes. We won't be using it.
    d3.csv("/data/cities.csv").then(function(data) {
      data.forEach(function(d) {
        d.population = +d.population;
        d["land area"] = +d["land area"];
      });
      console.log(data[0]);
    });
    </code>
</pre>

OK. Accepting that we've cleaned up our data, here's what we've got to work with. 

A few things to notice are: 

* I'm leaving the months as they are because I don't - currently - see a need to convert them to <code>Date()</code> objects.
* Strings have been converted to numbers, where appropriate
* I've changed <code>race_pace</code> from a pace to a speed called <code>miles_per_hour</code>. The reason for this is that I want the X and Y axes of the graph to begin at the bottom left, and for the top right to be where the fastest pace and greatest exercise volume are shown. The thing that might be a little difficult for users is that, as we run faster, the number that represents the pace decreases (a 4 minute mile, is faster than a 5 minute mile). Things are a little easier if we thing in terms of speed (5 miles per hour is faster than 4 miles per hour).
<pre>
    <code>
    let data = [
    {
        month: "January",
        mean_weight: 88.5,
        miles_per_hour: 5,
        total_exercise_hours: 25
    },
    {
        month: "February",
        mean_weight: 88,
        miles_per_hour: 5.11,
        total_exercise_hours: 22
    }];
    </code>
</pre>

### Setting up the X Axis

Changes in <code>miles_per_hour</code> property will be shown along the X axis. Here's our code as updated to render an X axis:

<pre>
    <code>
    let data = [
      {
        month: "January",
        mean_weight: 88.5,
        miles_per_hour: 5,
        total_exercise_hours: 25
      },
      {
        month: "February",
        mean_weight: 88,
        miles_per_hour: 5.11,
        total_exercise_hours: 22
      }
    ];
    
    let el = document.getElementById("visualisation"),
      width = el.offsetWidth,
      height = (width / 16) * 9,
      padding = width / 20;
    
    let config = { el, width, height, padding };
    
    let svg = d3
      .select("#visualisation")
      .append("svg")
      .attr("width", config.width)
      .attr("height", config.height);
    
    // Store highest and lowest speeds
    let data_extent = d3.extent(data, (d) => d.miles_per_hour);
    
    // Create a scale that represents our data
    let xScale = d3.scaleLinear();
    xScale.domain(data_extent);
    xScale.range([config.padding, config.width - config.padding]);
    
    // Create an axis based on the scale
    let xAxis = d3.axisBottom();
    xAxis.scale(xScale);
    
    // Render and place the axis
    svg
      .append("g")
      .attr("transform", "translate(0," + (config.height - config.padding) + ")")
      .call(xAxis);

    </code>
</pre>

## Setting up the Y axis

Our Y axis will show our <code>total_exercise_hours</code>. Here's what the code looks once when we've added this axis.

<pre>
    <code>
    let data = [
      {
        month: "January",
        mean_weight: 88.5,
        miles_per_hour: 5,
        total_exercise_hours: 25
      },
      {
        month: "February",
        mean_weight: 88,
        miles_per_hour: 5.11,
        total_exercise_hours: 22
      },
      {
        month: "March",
        mean_weight: 87,
        miles_per_hour: 5.35,
        total_exercise_hours: 29
      }
    ];
    
    let el = document.getElementById("visualisation"),
      width = el.offsetWidth,
      height = (width / 16) * 9,
      padding = width / 20;
    
    let config = { el, width, height, padding };
    
    let svg = d3
      .select("#visualisation")
      .append("svg")
      .attr("width", config.width)
      .attr("height", config.height);
    
    // Store highest and lowest speeds
    let speed_extent = d3.extent(data, (d) => d.miles_per_hour);
    
    // Create a scale that represents our data
    let xScale = d3.scaleLinear();
    xScale.domain(speed_extent);
    xScale.range([config.padding, config.width - config.padding]);
    
    // Create an axis based on the scale
    let xAxis = d3.axisBottom();
    xAxis.scale(xScale);
    
    // Render and place the axis
    svg
      .append("g")
      .attr("transform", `translate(0, ${config.height - config.padding})`)
      .call(xAxis);
    
    // Store highest and lowest speeds
    let exercise_hours_extent = d3.extent(data, (d) => d.total_exercise_hours);
    
    // Create a scale for your Y axis
    // Note that we flip the min and max
    let yScale = d3.scaleLinear();
    yScale.domain([d3.max(exercise_hours_extent), d3.min(exercise_hours_extent)]);
    yScale.range([config.padding, config.height - config.padding]);
    
    let yAxis = d3.axisLeft();
    yAxis.scale(yScale);
    
    svg
      .append("g")
      .attr("transform", `translate(${config.padding}, 0)`)
      .call(yAxis);

    </code>
</pre>

## Adding bubbles and event management

Next we're going to a bubbles that represents our data. We'll put the bubble drawing code in a function called <code>set_visualisation_data()</code> and then use 
some simple event management to update the data.

At this point we have a working visualisation with the ability to change the data and animate shown and animate it. This could be significantly improved, but it does illustrate the concept.

<pre>
    <code>
    &lt;!-- Our HTML --&gt;
    &lt;div id="visualisation"&gt;
    &lt;/div&gt;
    &lt;button class="month" data-index=0&gt;January&gt;/button&gt;
    &lt;button class="month" data-index=1&gt;February&gt;/button&gt;
    &lt;button class="month" data-index=2&gt;March&gt;/button&gt;
    </code>
</pre>
<pre>
        <code>
    let data = [
      {
        month: "January",
        mean_weight: 88.5,
        miles_per_hour: 5,
        total_exercise_hours: 25
      },
      {
        month: "February",
        mean_weight: 88,
        miles_per_hour: 5.11,
        total_exercise_hours: 22
      },
      {
        month: "March",
        mean_weight: 87,
        miles_per_hour: 5.35,
        total_exercise_hours: 29
      }
    ];
    
    let new_data = [
      {
        month: "January",
        mean_weight: 88.6,
        miles_per_hour: 5.1,
        total_exercise_hours: 24
      },
      {
        month: "February",
        mean_weight: 87.8,
        miles_per_hour: 5.12,
        total_exercise_hours: 22
      },
      {
        month: "March",
        mean_weight: 87.7,
        miles_per_hour: 5.25,
        total_exercise_hours: 27
      }
    ];
    
    let el = document.getElementById("visualisation"),
      width = el.offsetWidth,
      height = (width / 16) * 9,
      padding = width / 10;
    
    let config = { el, width, height, padding };
    
    let svg = d3
      .select("#visualisation")
      .append("svg")
      .attr("width", config.width)
      .attr("height", config.height);
    
    // Store highest and lowest speeds
    let speed_extent = d3.extent(data, (d) => d.miles_per_hour);
    
    // Create a scale that represents our data
    let xScale = d3.scaleLinear();
    xScale.domain(speed_extent);
    xScale.range([config.padding, config.width - config.padding]);
    
    // Create an axis based on the scale
    let xAxis = d3.axisBottom();
    xAxis.scale(xScale);
    
    // Render and place the axis
    svg
      .append("g")
      .attr("transform", `translate(0, ${config.height - config.padding})`)
      .call(xAxis);
    
    // Store highest and lowest speeds
    let exercise_hours_extent = d3.extent(data, (d) => d.total_exercise_hours);
    
    // Create a scale for your Y axis
    // Note that we flip the min and max
    let yScale = d3.scaleLinear();
    yScale.domain([d3.max(exercise_hours_extent), d3.min(exercise_hours_extent)]);
    yScale.range([config.padding, config.height - config.padding]);
    
    // Set the X axis
    let yAxis = d3.axisLeft();
    yAxis.scale(yScale);
    yAxis.ticks(5);
    
    svg
      .append("g")
      .attr("transform", `translate(${config.padding}, 0)`)
      .call(yAxis);
    
    // Create a scale for our bubbles
    let bubbleScale = d3.scaleLinear();
    bubbleScale.domain(d3.extent(data, (d) => d.mean_weight));
    bubbleScale.range([3, 21]);
    
    // Create a function which takes data and renders bubbles, creating
    // them if they didn't exist, animating them if they did.
    function set_visualisation_data(data) {
      const selection = svg
        .selectAll("circle")
        .data(data, (d) => d.month)
        .join(
          (enter) =>
            enter
              .append("circle")
              .attr("cy", (d) => yScale(d.total_exercise_hours))
              .attr("fill", "transparent")
              .attr("stroke", "orange")
              .attr("stroke-width", "2px")
              .attr("cx", (d) => xScale(d.miles_per_hour))
              .attr("r", (d) => bubbleScale(d.mean_weight)),
          (update) =>
            update
              .transition()
              .duration(1000)
              .attr("cy", (d) => yScale(d.total_exercise_hours))
              .attr("cx", (d) => xScale(d.miles_per_hour))
              .attr("r", (d) => bubbleScale(d.mean_weight)),
          (exit) => exit.remove()
        );
    }
    
    // Setting up our click handlers
    // Note: each HTML button has a data-index
    // which corresponds to an array index
    function click() {
      if (this.dataset.source == "initial") {
        set_visualisation_data(data);
      } else {
        set_visualisation_data(new_data);
      }
    }
    
    d3.selectAll("button").on("click", click);
    
    set_visualisation_data(data);
    </code>
</pre> 

You can see this code in [action on CodePen](https://codepen.io/gtvj/pen/eYNqgmZ?editors=1011)

## I'm stopping here, but there would be a lot more to do on this

A this stage there is a working visualisation but, in its current form, there is much that would need to be done if this was a 'real' thing, including: 

* Improving the click handling to make it more dynamic (the current implementation is hard-coded and crude)
* Ensuring the axes reflect the full extent of both ranges (they're currently set on the initial dataset only)
