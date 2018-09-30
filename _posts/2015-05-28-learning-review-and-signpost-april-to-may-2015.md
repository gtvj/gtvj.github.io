---
id: 265
title: Learning review and signpost (April to May 2015)
date: 2015-05-28T17:28:11+00:00
author: Gwyn
layout: post
guid: http://15v.co/?p=265
permalink: /learning-review-and-signpost-april-to-may-2015/
categories:
  - Development
  - Learning
  - PHP
  - Signpost
---
## Plans for this period

This sprint was focussed on getting to grips with new developments in PHP. I&#8217;ve heard a lot of good things about emerging standards and &#8211; having been focussing my study on other topics &#8211; I felt now would be a good time to get a handle on what&#8217;s been happening.

## Activity

My activity around building my skills in PHP was focussed on a few sources:

  * Josh Lockhart&#8217;s [Modern PHP](http://shop.oreilly.com/product/0636920033868.do) book recently published by O&#8217;Reilly
  * Lorna Jane Mitchell&#8217;s [Intermediate PHP](https://www.safaribooksonline.com/library/view/intermediate-php/9781491911471/) course
  * The [PHP: The Right Way](http://www.phptherightway.com/) website and reference
  * Lorna Jane Mitchell&#8217;s [PHP Web Services](https://www.safaribooksonline.com/library/view/php-web-services/9781491909997/) course

These, in turn, pointed to other useful resources (which I&#8217;ll cover under highlights).

## Highlights

There are a few things which really stood out as important from these sources.

### Standards

The [PHP Framework Interop Group](http://www.php-fig.org/) (or PHP-FIG) have established a range of standards to help improve intraframework consistency and performance. These standards are known as PHP standards recommendations (or PSRs) and cover an increasing range of things:

  * PSR-0 and PSR-4 provide a standard for autoloading classes. Why two? Because PSR-4 is an &#8216;improved autoloading standard&#8217;
  * PSR-1 and PSR-2 cover coding standards and style respectively &#8211; two issues which I feel are very important. Note: if you&#8217;re using PhpStorm you can easily set it up to auto-format your code to comply with these PSRs

These standards don&#8217;t just apply to framework developers, they provide **solid guidelines which will improve the code quality and consistency in development teams that adopt them**.

### Composer and packagist

Together these provide an excellent way of finding, publishing and managing code. [Packagist](https://packagist.org) is where you **find** (or publish) the packages and [Composer](https://getcomposer.org) is how you **install and manage them** (similar to NPM, Bower and NuGet). I found these both really nice to work with and there are a lot of great packages to choose from, including:

  * [League/Csv](https://packagist.org/packages/league/csv) provides a lovely way to interact with .csv files. This is going to be incredibly handy for a project I&#8217;ve got coming up
  * [Guzzle](https://packagist.org/packages/guzzlehttp/guzzle) is a great HTTP client
  * [Monolog](https://packagist.org/packages/monolog/monolog) is a brilliant logging package which will allow you to send PHP logging information just about anywhere _including via JavaScript to the browser console _

### PHP Data Objects (PDO)

Having encountered PDO I can&#8217;t imagine using anything else to interact with a database. Here&#8217;s why:

  * PDO provides a **single interface** to many different database management systems
  * Using **PDO statements** and **bound parameters **allows you to _safely inject foreign input into queries _without worrying about SQL injection
  * It provides **a broad range of methods** to use when retrieving results (`fetch()`, `fetchAll()`, `fetchColumn()` and `fetchObject()`) which accept constants that allow you to specify how you want the results. For example, `fetch(PDO::FETCH_OBJ)` will return an _object _whose properties are database column names

Most of these concepts are illustrated in the figure below &#8211; see the comments for an explanation.<figure id="attachment_304" style="width: 640px" class="wp-caption alignnone">

[<img class="wp-image-304 size-large" src="http://15v.co/wp-content/uploads/2015/05/pdo-997x1024.png" alt="PDO example" width="640" height="657" />](http://15v.co/wp-content/uploads/2015/05/pdo.png)<figcaption class="wp-caption-text">Example usage of PDO</figcaption></figure> 

&nbsp;

### That&#8217;s not all

There&#8217;s a lot more really good stuff happening in modern PHP, including:

  * New language features include: **namespaces** (which can be imported and aliased), **interfaces**, **traits** (think interface with implementation), **generators** (simple iterators), **closures** and **anonymous functions** (which will be familiar to you if you&#8217;re from a JavaScript background)
  * [PHPUnit](https://phpunit.de/) (_the_ unit testing framework for PHP which &#8211; having looked into it further &#8211; I&#8217;m certainly using it routinely from now on)
  * [Xdebug](http://xdebug.org/) for debugging and profiling
  * the [Command Line Interface](http://php.net/manual/en/features.commandline.usage.php) &#8211; which provides a really nice way to run scripts without firing up a web server
  * the [built-in web server](http://php.net/manual/en/features.commandline.webserver.php) which provides a really nice way to fire up a web server without using Apache

## Outcomes

What I&#8217;ve learned during these months has significantly changed the way I write PHP, making it more efficient, consistent and generally improved. Well worth the 29 hours effort.

## Plans for next sprint

I&#8217;ll be kicking off the next sprint on 1 June and will spend the next few days identifying what it&#8217;ll cover. I must say, another month or so on modern PHP is very tempting.