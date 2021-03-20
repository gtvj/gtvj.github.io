---
title: New stack (Pt. 1) First impressions of Wagtail
date: 2021-03-06
author: gtvj
layout: post
topic: code
---

We're embarking on a major change in technical direction at work as we move **from** a development stack where web applications were (for the most part) built using .NET and our CMS was in PHP **to** a stack based entirely in Python.

My initial focus has been learning the [Wagtail CMS](https://wagtail.io) and I started with Kalob Taulien's [Wagtail for beginners](https://learnwagtail.com/wagtail-for-beginners/) course. My initial thoughts are that I like it a lot (especially coming from a lot of recent experience with WordPress).

<blockquote cite="https://www.w3.org/WAI/standards-guidelines/aria/">
    <p>Wagtail is like WordPress if WordPress was professionally developed in the last decade</p>
    <cite>LearnWagtail.com Wagtail from Scratch</cite>
</blockquote>

### First impressions

The [about page](https://wagtail.io/about-wagtail/) for Wagtail gives a good overview but the key thing for me is that it is a Django app. This seems like a very good foundation for a CMS as it encourages leveraging Python **within the conventions** of a solid application framework.

<blockquote cite="https://wagtail.io/about-wagtail/">
    <p>...if you can do it in Python you can do it in Wagtail</p>
    <cite>Wagtail.io</cite>
</blockquote>

I'm still really new to the CMS and while I'm not yet an expert, there are things I've really been taken by. These include:

<dl>
  <dt>It feels well designed, solid and sensible</dt>
  <dd>Wagtail feels like a CMS with all the goodnesss I'd expect from a modern web application framework. While I don't yet fully understand how to fully utilise Django (which I also have to learn), there are several times when I've been reminded in Wagtail of the kind of features I've enjoyed in frameworks like Laravel, Rails etc.</dd>
  <dt>There's a good team behind it and community around it</dt>
  <dd>While we were evaluating our CMS options I had the opportunity to meet members of core team. They were gracious, patiently answered all my questions and came across as very competent. I came away from that session with a strong sense of these being the types of developers I'd like to be aligned to. I've since joined the Slack community and there's a welcoming and vibrant vibe to it.</dd>
</dl>

<div class="info">
  <h3>So, why this post series?</h3>
  <p>As I've just explained I'm no expert in our new stack. So why would I feel the need to write a post about it? Well, I guess there are two reasons:</p>
  <ul>
    <li>I wanted to write something that would help consolidate my understanding and which could act as a milestone/reference/signpost to my future self (and possibly others)</li>
    <li>I'm genuinely excited by the new stack. It feels like a new dawn.</li>
  </ul>
</div>

I plan to start with Wagtail pages (coming soon!).  