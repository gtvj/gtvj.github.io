---
id: 666
title: Handy little regex for password validation
date: 2015-10-23T20:32:31+00:00
author: Gwyn
layout: post
guid: http://15v.co/?p=666
permalink: /a-handy-little-regex-for-passwords/
categories:
  - Regular expressions
---
Here's a handy little regular expression that makes use of positive lookahead assertions to match a password that contains at least:

  * one uppercase character &#8211; `(?=.*[A-Z])`
  * one lowercase character &#8211; `(?=.*[a-z])`
  * one number &#8211; `(?=.*\d)`

Where these assertions are met it then restricts the match to strings which are between 8 and 15 characters in length &#8211; `.{8,15}`
  
Here it is in full

`/(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,15}/`