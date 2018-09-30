---
id: 6
title: AngularJS ng-options is amazing
date: 2014-09-19T14:50:22+00:00
author: Gwyn
layout: post
guid: http://15v.co/?p=5
permalink: /angularjs-ng-options-is-amazing/
categories:
  - AngularJS
  - Development
---
Very occasionally I encounter a library or framework feature that I think is truly brilliant. This doesn’t happen too often, so I’m genuinely excited when it does. The way that `ng-options` in AngularJS can be configured to generate `<option>` elements is one of these features. The way this can be used in conjunction with `ng-model` is another.

The code snippet below shows these directives in action.<figure id="attachment_20" style="width: 640px" class="wp-caption alignnone">

[<img class="size-large wp-image-20" src="http://15v.co/wp-content/uploads/2014/09/Screen-Shot-2014-09-19-at-14.32.46-e1411134426610-930x1024.png" alt="Code demonstrating ng-options and ng-model" width="640" height="704" />](http://15v.co/wp-content/uploads/2014/09/Screen-Shot-2014-09-19-at-14.32.46-e1411134426610.png)<figcaption class="wp-caption-text">Code demonstrating ng-options and ng-model</figcaption></figure> 

## What&#8217;s happening

The code above shows AngularJS being used to generate a number of `<option>` elements corresponding to values on the view model (one for each object that is within the `$scope.todos` array). The magic happens through the `ng-model` and `ng-options` directives on the `<select>` element:

The `ng-model` directive implicitly creates a model value called ‘selected’ and a two-way binding to the `<select>`. This is amazing enough in itself because you instantly have access to a live model value which responds to user actions. Very cool, but the `ng-options` directive is what really impressed me.

`ng-options` iterates over the array, generating `<option>` elements based on the configuration established by a comprehension expression. If you’re not familiar with comprehensions, they are powerful but succinct means of producing a data structure by processing another. They&#8217;re quite popular in Python and you can find a good description of them by searching for &#8216;Python list comprehension&#8217;.

The comprehension expression used in this example is `item.id as item.action group by item.place for item in todos`. This can be deconstructed as follows:

  * `item.id` is set to be the selected property corresponding to each generated `<option>` element. For the first generated option in the snippet above (which is created from the first item in `$scope.todos`) this will be 100. When a user selects an option, it is this value that will be propagated to the view model (via the binding created by `ng-model`). It’s worth noting here that this doesn’t seem to have any relation to the value attributes on the generated `<option>` elements.
  * `item.action` is what the user will see (the text in the option tag). For the first generated option this will be ‘Get groceries’.
  * `group by item.place` will group the options and create an `<optgroup>` element for each grouping (Stop for a moment and consider this. What&#8217;s happening hear is SQL-like aggregation in a JavaScript framework).
  
    `for item in todos` is the iteration statement (which can be read as for value in array)

The result is shown below.<figure id="attachment_21" style="width: 640px" class="wp-caption alignnone">

[<img class="size-large wp-image-21" src="http://15v.co/wp-content/uploads/2014/09/Screen-Shot-2014-09-19-at-14.33.56-1024x808.png" alt="Screenshot showing output from ng-options and ng-model" width="640" height="505" />](http://15v.co/wp-content/uploads/2014/09/Screen-Shot-2014-09-19-at-14.33.56.png)<figcaption class="wp-caption-text">Screenshot showing output from ng-options and ng-model</figcaption></figure> 

## That&#8217;s pretty impressive

That&#8217;s an amazing amount of goodness from such a small amount of code. There’s loads more information about ng-options in the [AngularJS documentation](https://docs.angularjs.org/api/ng/directive/select "AngularJS documentation site"), including a good description of comprehension expressions. I’m just starting out with AngularJS, having been studying it in my free-time daily for the couple of months. I’m no expert but I’m very impressed and looking forward to deepening my understanding and using it in production.