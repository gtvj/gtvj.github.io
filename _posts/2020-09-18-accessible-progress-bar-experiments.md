---
title: Accessible progress bar experiments
date: 2020-09-18
author: Gwyn
layout: post
---

I attended a Show and Tell earlier this week and saw a reasonably complex JavaScript-driven feature being shown. The scenario being demonstrated was this:

1. User performs action which initiates two simultaneous, long-running, asynchronous processes (lasting perhaps minutes)
2. Two independent progress bars are displayed to the user
3. Upon successful completion the user is presented with the next interaction option

I had a brief chat with the developer after the presentation and it seemed they might benefit from some advice on related accessibility considerations. I therefore offered to prepare some materials that would:
 
1. illustrate how this feature might be experienced by a user that relies on an assistive technology
2. demonstrate how ARIA might be applied to improve the user experience

## The repository

During the evenings this week I pulled together a simple Node (Express) app with basic jQuery to simulate the progress of these asynchronous tasks. This code can be found on in my [progress bar experiements](https://github.com/gtvj/progress-bar-experiments) repository on GitHub.

## The session for developers

Earlier today I took the developers through the examples contained in this repository. For each I showed what it would be like to use the application as a sighted user interacting with a mouse. I then showed how it would be for someone using keyboard control and a screenreader, as well as how ARIA can be used to improve the experience in this scenario. 

Here is a video example of the different experience:

<iframe title="Video example of different experiences" width="560" height="315" src="https://www.youtube.com/embed/Xblx_rGWc_U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

