---
title: New stack (Pt. 1) Introduction and Page Models 
date: 2021-03-05
author: Gwyn
layout: post
topic: code
---

## Introduction

We're embarking on a major change in technical direction at work as we move **from** a development stack where web applications were (for the most part) built using .NET and our CMS in PHP **to** a stack based in Python.

We've therefore got a lot to learn. My initial focus has been learning the [Wagtail CMS](https://wagtail.io) and I like it a lot - especially as someone that's been working with - though not primarily - a huge (>20,000 page) WordPress site for more than seven years.

<blockquote cite="https://www.w3.org/WAI/standards-guidelines/aria/">
    <p>Wagtail is like WordPress if WordPress was professionally developed in the last decade</p>
    <cite>LearnWagtail.com Wagtail from Scratch</cite>
</blockquote>

### What is Wagtail?

The [about page](https://wagtail.io/about-wagtail/) for Wagtail gives a good overview but the key thing for me is that it is a Django app. This seems like a very good foundation for a CMS as it encourages leveraging Python **within the conventions** of a solid application framework.

<blockquote cite="https://wagtail.io/about-wagtail/">
    <p>...if you can do it in Python you can do it in Wagtail</p>
    <cite>Wagtail.io</cite>
</blockquote>

### First impressions

I'm still really new to the CMS and there's a lot I don't yet understand, but there are a few things I've really been taken by. These include:

<dl>
  <dt>It feels well designed, solid and sensible</dt>
  <dd>Wagtail feels like a CMS with all the goodnesss I'd expect from a modern web application framework. While I don't yet fully understand it's relationship to Django, there are several times when I've been reminded of the kind of features I've enjoyed in frameworks like Laravel, Rails etc.</dd>
  <dt>There's a good team behind it and community around it</dt>
  <dd>While we were evaluating our CMS options I had the opportunity to meet members of core team. They were gracious, patiently answered all my questions and came across as very competent. I came away from that session with a strong sense of these being the types of developers I'd like to be aligned to. I've since joined the Slack community and there's a welcoming and vibrant vibe to it.</dd>
</dl>

<div class="info">
  <h3>So, why this post series?</h3>
  <p>As I've just explained I'm no expert in our new stack. So why would I feel the need to write a post about it? Well, I guess there are two reasons:</p>
  <ul>
    <li>I wanted to write something that would help consolidate my understanding and which could act as a milestone/reference/signpost to my future self (and possibly others)</li>
    <li>I'm genuinely excited by the new stack and, especially, the level of integration it will permit between my employers evidential and interpretive content.</li>
  </ul>
  <p>This post will focus on the concepts of working with Wagtail and will be much lighter on code than similar posts I've done in the past.</p>
</div>

## Wagtail Page models

I'm going to start with what seems to be the heart of Wagtail: the page model.

### Page models are Django models

In Wagtail we define page types as Python classes. These must inherit from `wagtail.core.models.Page` (which in turn extends the Django model class).

<div class="info">
  <h3>What is a Django model?</h3>
  <p>Think of the model as being the <a href="https://docs.djangoproject.com/en/3.1/intro/tutorial02/#creating-models">source of truth</a> for your data. In the case of a Wagtail page think if it as representing the blueprint for your page type. For example, if I'm creating a page for  editors to describe legendary bluegrass players and I want a field to be available to editors called <code>Guitar</code>, I add it as a field to the page model. Similarly, if I want to place some constraints on what editors can supply in this field I can place this logic in the model.</p>
  <p>Each Wagtail page type will be represented in the database as a separate table.</p>
  <p>This is simpler than it sounds as will become clear when we look at an example</p>
</div>

### Creating a page type

The docs provide [a walkthrough](https://docs.wagtail.io/en/stable/getting_started/tutorial.html#a-basic-blog ) for creating a simple page.

* Run the `startapp` command to scaffold out a folder for our app.
* Add the newly created app to the `INSTALLED_APPS` list in `base.py`
* Add the desired fields to the model
* Add any fields we would like exposed to editors to the `content_panels` list
* Create a template file  following the convention expectations set by the page (Wagtail will look in a good few places, so you have options about how you organise things)

This creates a new directory for our app scaffolded out with a few key files. We'll ignore most of these for now.

### Page fields

You can use any Django model field class in a Wagtail page and the admin panel will identify a suitable representation. For example, having played around I've found that setting a `BooleanField` without a default will have it presented as an `<option>` element with three options ('True', 'False', and 'Unknown'). Whereas setting it with a default renders it as a checkbox.s

```python
working = models.BooleanField(null=False, default=False) # Checkbox
working = models.BooleanField(null=False) # Option

```