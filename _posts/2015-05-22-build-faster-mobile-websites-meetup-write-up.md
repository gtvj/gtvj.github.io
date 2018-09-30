---
id: 272
title: Build faster mobile websites (meetup write-up)
date: 2015-05-22T23:45:32+00:00
author: Gwyn
layout: post
guid: http://15v.co/?p=272
permalink: /build-faster-mobile-websites-meetup-write-up/
categories:
  - Development
  - Learning
  - Performance
  - Tooling
---
Last night I went along to the London Web meetup where Dean Hume (<span class="screen-name"><a class="pretty-link js-nav" dir="ltr" href="https://twitter.com/DeanoHume" data-send-impression-cookie="true">@DeanoHume</a>) gave</span> a really good presentation covering a broad range of techniques to build faster mobile websites. His [slides](https://speakerdeck.com/deanohume/faster-mobile-websites "Dean's slides") are available but I wanted to summarise **a few of the concepts which are probably most broadly applicable**. Many of these will be known to front-end developers who've looked into page performance.

## The most broadly applicable tips

  * **Optimize images** with [kraken.io](http://www.kraken.io) and learn about the tools and techniques (along with seeing some illuminating comparison images) at [imageoptimization.info ](http://imageoptimization.info)
  * **Remove unused CSS**. Chrome Dev tools will show you what's not being used, and both Grunt and Gulp have 'uncss' packages that will manage this for you. Personally, I wonder about the maintenance overhead of the 'uncss' approach (and 'Critical path' CSS to see below) _if not used wisely._ I say this because CSS rarely applies to just a few pages and, even for a single page, there's a lot of content that _might_ be fetched onto that page (depending on how a user interacts with it).
  * **Concatenate and minify CSS and JavaScript** (there are lots of options for this, including Grunt and Gulp).
  * We should be **spriting images**, and minimising the space between sprites (Beware: a member of the audience said that to apparently to you can have images cross over when resizing the browser if you don't leave at least 1px between individual sprites).
  * **Make use of caching**. Be smart about this to if 90% of your JavaScript never changes but 10% does, consider splitting that out and set a long expiry for the script that doesn't change. The caching might outweigh the cost of the additional network request to the key here, as with all of this stuff, is **benchmarking and monitoring the impact** (See below for tools that do this).
  * **Use** **CSS _instead of_ images**, wherever possible.
  * **Beware of 3rd party scripts/plugins** to they _might_ not care much about performance much, if at all
  * Remember that **CSS and JavaScript references are blocking**.

## When speed really matters

If you really want to go full speed, consider going for '**critical path rendering**' and deliver what your user will see in the first 14KB (the maximum that can be delivered in a single round-trip to the server). See this[ guide from Google](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/) or search 'Critical path CSS' to there's a lot of information on this technique. Personally, I'm a little concerned about the maintenance implications for larger projects if not used with caution.

Dean also covered a lot more techniques which would be particularly beneficial to apps which use a great deal of animation to see the last quarter of the deck.

## Useful resources

  * [Discover dev tools](discover-devtools.codeschool.com) a code school resource which does what it says on the tin
  * [webpagetest.org](http://webpagetest.org) will give you information about the performance of a page and Google's [page speed insights](https://developers.google.com/speed/pagespeed/insights/) will identify issues and suggest improvements. Both of these work by pasting your site's URL into a text field to nice.