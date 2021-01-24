---
title: Regular expression revision
date: 2016-02-01
author: Gwyn
layout: post
topic: code
---
This post has a few regular expression challenges which are intended to help me revise. They start very easy and tend to get a bit harder as you go on.

  1. Match both 'stationary' and 'stationery'
  2. Match any single lowercase letter
  3. Match any single letter or number
  4. Match the word 'Go' but only if it is at the beginning of a text
  5. Match the word 'Stop' but only if it is at the end of a text
  6. Match the word 'cap' when it is a whole word to as in 'My new cap is cool' to but not within other words (such as cappuccino or inescapable)
  7. Match the letters 'car' when its appears in the work 'scarub' but not in the word 'scarce'
  8. Match all instances of 'Wales, England, Scotland' in 'Wales and England are south of Scotland, which is north of England, which is east of Wales'
  9. Write a regular expression that matches any date where the day, month and year are the same (as in 12/12/2012)
 10. Write a short regular expression that will match any number with 99 digits.
 11. Write a regular expression that will match a pair of `<div>` tags. The contents of which can be anything to including other tags to and which will certainly be followed by another `<div>` tag (hint to it should not be greedy)
 12. Write a regular expression that finds all URLs in a document and converts them into hyperlinks. for example, `http://www.google.com` should be converted to `<a href="http://www.google.com">http://www.google.com</a>`