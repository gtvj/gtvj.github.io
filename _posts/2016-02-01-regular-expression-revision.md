---
id: 702
title: Regular expression revision
date: 2016-02-01T20:09:08+00:00
author: Gwyn
layout: post
guid: http://15v.co/?p=702
permalink: /regular-expression-revision/
categories:
  - Development
  - Regular expressions
---
This post has a few regular expression challenges which are intended to help me revise. They start very easy and tend to get a bit harder as you go on.

  1. Match both &#8216;stationary&#8217; and &#8216;stationery&#8217;
  2. Match any single lowercase letter
  3. Match any single letter or number
  4. Match the word &#8216;Go&#8217; but only if it is at the beginning of a text
  5. Match the word &#8216;Stop&#8217; but only if it is at the end of a text
  6. Match the word &#8216;cap&#8217; when it is a whole word &#8211; as in &#8216;My new cap is cool&#8217; &#8211; but not within other words (such as cappuccino or inescapable)
  7. Match the letters &#8216;car&#8217; when its appears in the work &#8216;scarub&#8217; but not in the word &#8216;scarce&#8217;
  8. Match all instances of &#8216;Wales, England, Scotland&#8217; in &#8216;Wales and England are south of Scotland, which is north of England, which is east of Wales&#8217;
  9. Write a regular expression that matches any date where the day, month and year are the same (as in 12/12/2012)
 10. Write a short regular expression that will match any number with 99 digits.
 11. Write a regular expression that will match a pair of `<div>` tags. The contents of which can be anything &#8211; including other tags &#8211; and which will certainly be followed by another `<div>` tag (hint &#8211; it should not be greedy)
 12. Write a regular expression that finds all URLs in a document and converts them into hyperlinks. for example, `http://www.google.com` should be converted to `<a href="http://www.google.com">http://www.google.com</a>`