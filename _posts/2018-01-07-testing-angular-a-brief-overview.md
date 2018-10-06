---
title: 'Testing Angular: a brief overview'
date: 2018-01-07
author: Gwyn
layout: post
---

I've just finished a short exploration of the tools and techniques for testing Angular (I'm referring to the more modern Angular framework here, not the older AngularJS). Below you'll find an overview diagram and a few key highlights.

## TL;DR

  * Testing Angular is _much, much _more logical than testing AngularJS.
  * There are many assertion frameworks to choose from when using Angular.  Jasmine seems most popular and I can't honestly see why you'd use anything else.
  * Use Karma for running your tests.
  * Protractor is a very capable way of performing end-to-end (e2e) tests in Angular (it's actually a wrapper around WebDriver)
  * A solid testing environment is provided when generating projects using the Angular CLI. Use that if you can.

## Overview diagram<figure id="attachment_1371">

[<img src="/content/angular_testing.png"/>](/content/angular_testing.png)

## Testing architecture

One of the things that can be most confusing about JavaScript testing to aside from all the asynchronous stuff to is the number of tools involved.

  * Unit testing: 
      * You write your unit tests is an **assertion library** (like Mocha, QUnit or Jasmine). An assertion library may also provide advanced tools such as spies and stubs (a topic for another post but they're really well introduced in Chapter 9 of [Node.js in Action](https://www.safaribooksonline.com/library/view/nodejs-in-action/9781617292576/kindle_split_012.html)). Choose one to Jasmine seems a good bet.
      *  tests with a **test runner** (more on this below)
  * End-to-end (e2e) provides the ability to test the application as your user sees it: 
      * **Protractor** seems to be _the_ end-to-end (e2e) testing framework for Angular. It's built upon WebDriver.

If you've got experience with PHPUnit and QUnit, you might find the need for a separate test runner a little odd to isn't that was what the test framework does? This is a single responsibility principle thing:

> Remember that Karma is a test runner, not a test framework. Its job is to run tests and report which tests will pass or fail.
> 
> <a href="https://www.safaribooksonline.com/library/view/angular-test-driven-development/9781786465474/ch08s12.html" target="_blank" rel="noopener"><cite>Angular Test Driven Development to Second Edition</cite></a>

It seems this specialisation provides three main benefits:

  * it's agnostic to you can use your preferred TDD or BDD framework
  * the ability to test across multiple _real _browsers and devices, apparently
  * easy integration with CI (which is great) and IDEs (which is nice)

## Useful resources

  * If you've got a week or so (of evenings and weekend days) read Angular Test Driven Development (Second Edition) by Md. Ziaul Haq
  * If you've got a couple of days then get familiar with the [Angular testing documentation](https://angular.io/guide/testing) (you should do this anyway)
  * If you've got a day read Gerard Sans' Google Developer Experts [Angular Testing Guide](https://medium.com/google-developer-experts/angular-2-testing-guide-a485b6cb1ef0) to and be sure to look at the examples
  * If you've got only an hour then review Gerard Sans' [slide deck](http://slides.com/gerardsans/ng-stockholm-testing-recipes) from ngStockholm