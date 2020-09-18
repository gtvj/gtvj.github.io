---
title: Accessible progress bar experiments
date: 2020-09-18
author: Gwyn
layout: post
---

I attended a Show and Tell earlier this week and saw a reasonably complex, JavaScript-driven interaction that had been implemented without ARIA. The scenario being demonstrated was this:

1. User performs action which initiates two simultaneous, long-running, asynchronous processes (lasting perhaps minutes)
2. Two independent progress bars are displayed to the user
3. Upon successful completion the user is presented with the next interaction option

I had a brief chat with the developer after the presentation and it seemed they might benefit from some advice on related accessibility considerations. I therefore offered to prepare some materials that would:
 
1. illustrate how this feature might be experienced by a user that relies on an assistive technology
2. demonstrate how ARIA might be applied to improve the user experience

## The repository

During the evenings this week I pulled together a simple Node (Express) app with basic jQuery to double for the progress that would be provided by the end point. This code can be found on in my [progress bar experiements repository on GitHub](https://github.com/gtvj/progress-bar-experiments).

## The session for developers

Earlier today I took a group of developers from across the organisation through the examples contained in this repository. I've also prepared a few short videos comparing the experience via a visual web browser to that of a screen reader. In the first part of the videos I showed what it would be like to use the application as a sighted user interacting with a mouse. In the second I showed how it would be for someone using keyboard control and a screenreader. 

<video controls>

    <source src="/content/progress_bars_example.mp4  "
            type="video/mp4">

    Sorry, your browser doesn't support embedded videos.
</video>

     