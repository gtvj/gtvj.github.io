---
id: 1400
title: A brief introduction to GraphQL
date: 2018-01-13T16:18:26+00:00
author: Gwyn
layout: post
guid: /?p=1400
permalink: /a-brief-introduction-to-graphql/
categories:
  - APIs
  - Development
  - Signpost
---
I&#8217;ve been researching GraphQL this week and thought it might be useful if I posted a brief overview of what I&#8217;ve learned and my mindmap &#8216;notes&#8217; (in both [PDF](/wp-content/uploads/2018/01/GraphQL.pdf) and PNG format below).

[<img class="size-full wp-image-1413 aligncenter" src="/wp-content/uploads/2018/01/GraphQL.png" alt="A mindmap showing the topics I've encountered while learning about GraphQL" width="4326" height="3710" srcset="/wp-content/uploads/2018/01/GraphQL.png 4326w, /wp-content/uploads/2018/01/GraphQL-300x257.png 300w, /wp-content/uploads/2018/01/GraphQL-768x659.png 768w, /wp-content/uploads/2018/01/GraphQL-1024x878.png 1024w" sizes="(max-width: 4326px) 100vw, 4326px" />](/wp-content/uploads/2018/01/GraphQL.png)

## What is GraphQL

It&#8217;s an API specification developed by Facebook to address claimed shortcomings of REST &#8211; including _flexibility_ and _efficiency &#8211; _and was Open Sourced in 2015. In addition to the specification there is a [reference implementation in JavaScript](http://graphql.org/code/#javascript) and many libraries for other languages. The documentation describes all of this as:

> &#8230;a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data<cite><a href="http://graphql.org/learn/">Introduction to GraphQL</a></cite>

GraphQL is supposedly better at:

  1. **Conserving network usage &#8211; **an important consideration for mobile users
  2. **Abstracting the user interface from APIs &#8211; **a heterogeneous client-side landscape makes it difficult to build a single REST API that meets all client needs.
  3. **Flexibility &#8211;** it is easier to evolve a client that obtains data from a single queryable endpoint than it is to modify the design of an API that returns fixed data structures.

## The key difference between GraphQL and REST

I&#8217;m glossing over quite a bit here &#8211; and focussing only HTTP retrieval &#8211; but here&#8217;s perhaps the key difference between REST and GraphQL that developers should understand:

  * In REST you retrieve **complete, fixed structure,** _**resources**_ using **unique endpoints** and **HTTP GET**
  * In GraphQL you **POST** a _**query**_ to a **single endpoint** and receive a response **limited to those fields requested**.

This is described as &#8216;_declarative data fetching_&#8216; because clients express what they need and receive nothing more. This gets particularly interesting when you realise that a query might be along the lines of: &#8220;Get username for User 234612 and their last three orders. For each order retrieve just the order number, date and value&#8221;.

## Where GraphQL might be most _useful_

The use case for GraphQL that I think is most useful is where it acts as **a thin integration layer** for a number of other APIs (whether REST, legacy or 3rd party). I like this because it:

  * avoids the common circumstance where you find a supposedly RESTful API cluttered with code to meet (or even be structured around) the needs of interfaces
  * should &#8211; in theory &#8211; allow for greater independence between front and back end development teams

## Where GraphQL might be most _interesting_

The GraphQL &#8216;subscriptions&#8217; feature allows for a continuous connection to be initiated between client and server.

> Subscriptions are a GraphQL feature allowing the server to send data to its clients when a specific event happens. Subscriptions are usually implemented with <a href="https://en.wikipedia.org/wiki/WebSocket" target="_blank" rel="noopener">WebSockets</a>, where the server holds a steady connection to the client. This means you’re breaking the Request-Response-Cycle
  
> <cite><a href="https://www.howtographql.com/react-apollo/8-subscriptions/">Realtime updates with GraphQL Subscriptions</a></cite>

<p style="padding-left: 30px;">
  <strong>A little side note</strong>: the current GraphQL spec makes no mention of &#8216;subscription&#8217; or &#8216;/real ?time/&#8217;, and there&#8217;s only one reference to &#8216;event&#8217; &#8211; and it&#8217;s nothing to do with <em>events.</em>
</p>

I think this is really interesting because it could simplify event-driven full-stack architectures where the consequences of events &#8211; whether user actions, system events, information from other services, etc. &#8211; are cascaded through the system in realtime and information is immediately pushed to any client that is interested.

&nbsp;