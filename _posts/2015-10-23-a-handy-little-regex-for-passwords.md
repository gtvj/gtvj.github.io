---
title: Handy little regex for password validation
date: 2015-10-23
author: Gwyn
layout: post
---
Here's a handy little regular expression that makes use of positive lookahead assertions to match a password that contains at least:

  * one uppercase character to `(?=.*[A-Z])`
  * one lowercase character to `(?=.*[a-z])`
  * one number to `(?=.*\d)`

Where these assertions are met it then restricts the match to strings which are between 8 and 15 characters in length to `.{8,15}`
  
Here it is in full

```php
/(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,15}/
```