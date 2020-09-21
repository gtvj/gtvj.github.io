---
title: A brief introduction to GraphQL
date: 2018-01-13
author: Gwyn
layout: post
---

I've been researching GraphQL this week and thought it might be useful if I posted a brief overview of what I've learned and my mindmap 'notes' (in both [PDF](/content/graph_ql.pdf) and PNG format below).

[<img src="/content/graph_ql.png" alt="A mindmap showing the topics I've encountered while learning about GraphQL" />](/content/graph_ql.png)

## What is GraphQL

It's an API specification developed by Facebook to address claimed shortcomings of REST to including _flexibility_ and _efficiency_ to and was Open Sourced in 2015. In addition to the specification there is a [reference implementation in JavaScript](http://graphql.org/code/#javascript) and many libraries for other languages. The documentation describes all of this as:

> &#8230;a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data<cite> <a href="http://graphql.org/learn/">Introduction to GraphQL</a></cite>

GraphQL is supposedly better at:

  1. **Conserving network usage**. An important consideration for mobile users
  2. **Abstracting the user interface from APIs**. A heterogeneous client-side landscape makes it difficult to build a single REST API that meets all client needs.
  3. **Flexibility**. It is easier to evolve a client that obtains data from a single queryable endpoint than it is to modify the design of an API that returns fixed data structures.

## The key difference between GraphQL and REST

I'm glossing over quite a bit here to and focussing only HTTP retrieval to but here's perhaps the key difference between REST and GraphQL that developers should understand:

  * In REST you retrieve **complete, fixed structure,** _**resources**_ using **unique endpoints** and **HTTP GET**
  * In GraphQL you **POST** a _**query**_ to a **single endpoint** and receive a response **limited to those fields requested**.

This is described as '_declarative data fetching_' because clients express what they need and receive nothing more. This gets particularly interesting when you realise that a query might be along the lines of: &#8220;Get username for User 234612 and their last three orders. For each order retrieve just the order number, date and value&#8221;.

## Where GraphQL might be most _useful_

The use case for GraphQL that I think is most useful is where it acts as **a thin integration layer** for a number of other APIs (whether REST, legacy or 3rd party). I like this because it:

  * avoids the common circumstance where you find a supposedly RESTful API cluttered with code to meet (or even be structured around) the needs of interfaces
  * should to in theory to allow for greater independence between front and back end development teams

## Where GraphQL might be most _interesting_

The GraphQL 'subscriptions' feature allows for a continuous connection to be initiated between client and server.

> Subscriptions are a GraphQL feature allowing the server to send data to its clients when a specific event happens. Subscriptions are usually implemented with <a href="https://en.wikipedia.org/wiki/WebSocket" target="_blank" rel="noopener">WebSockets</a>, where the server holds a steady connection to the client. This means you’re breaking the Request-Response-Cycle<cite><a href="https://www.howtographql.com/react-apollo/8-subscriptions/">Realtime updates with GraphQL Subscriptions</a></cite>

<p style="padding-left: 30px;">
  <strong>A little side note</strong>: the current GraphQL spec makes no mention of 'subscription' or `/(real )?time/`, and there's only one reference to 'event' and it's nothing to do with <em>events.</em>
</p>

I think this is really interesting because it could simplify event-driven full-stack architectures where the consequences of events to whether user actions, system events, information from other services, etc. to are cascaded through the system in realtime and information is immediately pushed to any client that is interested.

&nbsp;