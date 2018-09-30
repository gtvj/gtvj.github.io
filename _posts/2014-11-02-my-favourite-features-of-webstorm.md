---
id: 48
title: My favourite features of WebStorm
date: 2014-11-02T08:25:55+00:00
author: Gwyn
layout: post
guid: http://15v.co/?p=48
permalink: /my-favourite-features-of-webstorm/
categories:
  - Tooling
---
I recently moved from using Sublime Text as my primary code editor to WebStorm. When a colleague noticed my enthusiasm for this new editor, he asked what it was that I liked so much about it. I didn&#8217;t provide the answer I would have liked to, so here&#8217;s a breakdown of the features which I like so much about it &#8211; in no particular order.

## Live editing

One nice feature of WebStorm is that its &#8216;live edit&#8217; feature allows me to monitor how code changes are rendered in the actual browser window **without refreshing the page manually and even without leaving WebStorm**. In practical terms this means that I can hit <kbd>Ctrl+D</kbd> to begin a debugging session. While debugging, all changes are immediately reflected in the browser. Besides pure HTML files, this also works for other file types that contain or generate HTML, CSS, or JavaScript. A very nice feature indeed.

## Grunt console, with GUI

WebStorm also comes with a tool window for GruntJS (the recently released WebStorm 9 has similar functionality for Gulp). I find this helpful because it allows you to view and run tasks &#8211; including via aliases &#8211; straight from the IDE. This allows me to see if my Grunt tasks have completed successfully _before_ I switch to view the results in a browser. I also like that you can run any task in your Gruntfile with a single click.

## Built in terminal

WebStorm features a local terminal that provides access to the command line from within the IDE. Before switching to WebStorm, I&#8217;d routinely have a console window open (mostly for build and version control tasks). Now it&#8217;s right there in the IDE. Another nice feature of this is that it defaults to the current working directory. This might seem like a moot point because WebStorm provides a GUI for both task automation and version control, but I still find myself using the built-in terminal.

## Find action

The <kbd>Cmd+Shift+A</kbd> combination reveals a search box for &#8216;actions&#8217; in WebStorm. So, what&#8217;s an action? In WebStorm actions are <q>the commands of the main menu and various context menus, commands performed through the toolbar buttons of the main toolbar and tool windows. I like this because it means no more digging around in menus looking for a specific command.</q>

## Emmet

Emmet is one of those things that you get used to and then find it hard to live without. It saves me time every day. In a nutshell, it allows you to generate HTML from a CSS-like shorthand or use abbreviation CSS rules. I won&#8217;t go into it here but you can read all about it on the [Emmet website](http://docs.emmet.io). I first came across Emmet as a plug-in for Sublime Text but wasn&#8217;t able to get the Sublime Text plugin working when I moved over to a MacBook as my development machine. I&#8217;m very grateful to have it back.

## And that&#8217;s just scratching the surface

These are really just a few of the features I find so helpful. Other great features include:

  * **Local history** &#8211; a kind of version control &#8216;lite&#8217; for managing local changes (very handy if you&#8217;re just working on a local demo and don&#8217;t need full VCS integration)
  * **Multiple cursors** &#8211; Like Sublime, WebStorm provides multiple cursors. Much the same as Emmet, this is a significant efficiency boost
  * The **search everywhere shortcut** <kbd>Shift [double-tap]</kbd> allows you to quickly search within files and actions
  * **Lens mode** provides a really helpful means of navigating through a large file

In summary, if you&#8217;ve not yet used WebStorm, I&#8217;d definitely recommend giving it a try. I&#8217;ve found it a pleasure to use and it&#8217;s certainly a boost to productivity.