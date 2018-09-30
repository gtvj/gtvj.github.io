---
id: 1363
title: 'Testing Angular: a brief overview'
date: 2018-01-07T19:25:49+00:00
author: Gwyn
layout: post
guid: /?p=1363
permalink: /testing-angular-a-brief-overview/
categories:
  - Angular
  - Testing
  - Tooling
---
I&#8217;ve just finished a short exploration of the tools and techniques for testing Angular (I&#8217;m referring to the more modern Angular framework here, not the older AngularJS). Below you&#8217;ll find an overview diagram and a few key highlights.

## TL;DR

  * Testing Angular is _much, much _more logical than testing AngularJS.
  * There are many assertion frameworks to choose from when using Angular.  Jasmine seems most popular and I can&#8217;t honestly see why you&#8217;d use anything else.
  * Use Karma for running your tests.
  * Protractor is a very capable way of performing end-to-end (e2e) tests in Angular (it&#8217;s actually a wrapper around WebDriver)
  * A solid testing environment is provided when generating projects using the Angular CLI. Use that if you can.

## Overview diagram<figure id="attachment_1371" style="width: 4972px" class="wp-caption alignnone">

[<img class="size-full wp-image-1371" src="/wp-content/uploads/2018/01/angular_testing.png" alt="" width="4972" height="7758" srcset="/wp-content/uploads/2018/01/angular_testing.png 4972w, /wp-content/uploads/2018/01/angular_testing-192x300.png 192w, /wp-content/uploads/2018/01/angular_testing-768x1198.png 768w, /wp-content/uploads/2018/01/angular_testing-656x1024.png 656w" sizes="(max-width: 4972px) 100vw, 4972px" />](/wp-content/uploads/2018/01/angular_testing.png)<figcaption class="wp-caption-text">Overview of key Angular testing tools and techniques</figcaption></figure> 

## Testing architecture

One of the things that can be most confusing about JavaScript testing &#8211; aside from all the asynchronous stuff &#8211; is the number of tools involved.

  * Unit testing: 
      * You write your unit tests is an **assertion library** (like Mocha, QUnit or Jasmine). An assertion library may also provide advanced tools such as spies and stubs (a topic for another post but they&#8217;re really well introduced in Chapter 9 of [Node.js in Action](https://www.safaribooksonline.com/library/view/nodejs-in-action/9781617292576/kindle_split_012.html)). Choose one &#8211; Jasmine seems a good bet.
      *  tests with a **test runner** (more on this below)
  * End-to-end (e2e) provides the ability to test the application as your user sees it: 
      * **Protractor** seems to be _the_ end-to-end (e2e) testing framework for Angular. It&#8217;s built upon WebDriver.

If you&#8217;ve got experience with PHPUnit and QUnit, you might find the need for a separate test runner a little odd &#8211; isn&#8217;t that was what the test framework does? This is a single responsibility principle thing:

> Remember that Karma is a test runner, not a test framework. Its job is to run tests and report which tests will pass or fail.
> 
> <a href="https://www.safaribooksonline.com/library/view/angular-test-driven-development/9781786465474/ch08s12.html" target="_blank" rel="noopener"><cite>Angular Test Driven Development &#8211; Second Edition</cite></a>

It seems this specialisation provides three main benefits:

  * it&#8217;s agnostic &#8211; you can use your preferred TDD or BDD framework
  * the ability to test across multiple _real _browsers and devices, apparently
  * easy integration with CI (which is great) and IDEs (which is nice)

## Useful resources

  * If you&#8217;ve got a week or so (of evenings and weekend days) read Angular Test Driven Development (Second Edition) by Md. Ziaul Haq
  * If you&#8217;ve got a couple of days then get familiar with the [Angular testing documentation](https://angular.io/guide/testing) (you should do this anyway)
  * If you&#8217;ve got a day read Gerard Sans&#8217; Google Developer Experts [Angular Testing Guide](https://medium.com/google-developer-experts/angular-2-testing-guide-a485b6cb1ef0) &#8211; and be sure to look at the examples
  * If you&#8217;ve got only an hour then review Gerard Sans&#8217; [slide deck](http://slides.com/gerardsans/ng-stockholm-testing-recipes) from ngStockholm