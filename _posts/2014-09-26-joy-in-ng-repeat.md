---
id: 71
title: Joy in ng-repeat
date: 2014-09-26T15:17:38+00:00
author: Gwyn
layout: post
guid: http://15v.co/?p=71
permalink: /joy-in-ng-repeat/
categories:
  - AngularJS
  - Development
  - Learning
---
Here&#8217;s a little bit of beauty from AngularJS. I didn&#8217;t realise until today that using `ng-click` within an `ng-repeat` allows you to retain a reference to the object within a specific iteration. That probably sounds a bit more convoluted than it is, so here&#8217;s an illustration.

## Using ng-click within ng-repeat in

The code snippet below shows an array of objects on the `$scope` of our application. Each object represents a person with a name and an age.<figure id="attachment_94" style="width: 640px" class="wp-caption alignnone">

[<img class="size-large wp-image-94" src="http://15v.co/wp-content/uploads/2014/09/Screenshot-2014-09-26-14.49.51-1024x341.png" alt="$scope with people and ageEm() method" width="640" height="213" />](http://15v.co/wp-content/uploads/2014/09/Screenshot-2014-09-26-14.49.51.png)<figcaption class="wp-caption-text">$scope with people and ageEm() method</figcaption></figure> 

&nbsp;

There is also a cruel `ageEm()` method that allows users to increase their age in the click of a button.

The `ng-repeat` directive is then used to iterate over these, creating a HTML structure for each.<figure id="attachment_75" style="width: 640px" class="wp-caption alignnone">

[<img class="size-large wp-image-75" src="http://15v.co/wp-content/uploads/2014/09/Screenshot-2014-09-26-14.11.41-1024x611.png" alt="ng-click applied within ng-repeat" width="640" height="381" />](http://15v.co/wp-content/uploads/2014/09/Screenshot-2014-09-26-14.11.41.png)<figcaption class="wp-caption-text">ng-click applied within ng-repeat</figcaption></figure> 

&nbsp;

Notice here that each HTML structure contains a `ng-click` directive that will call `ageEm()`, passing in the `person`, when the button is clicked.

Now, when I first saw this, I thought it couldn&#8217;t possibly work because the person is out of scope when `ng-click` is triggered by the user. **But no!** AngularJS &#8211; somewhat magically &#8211; keeps the `ng-click` bound to the specific person so that the method works as you would hope. No more messing about with putting person IDs on data-attributes or such-like, and greatly simplifying the front-end development tasks of evil geniuses everywhere.

Another lovely bit of AngularJS. I&#8217;ll be using this, and you should probably too.