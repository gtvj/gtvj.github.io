---
id: 352
title: Mac OS X Command Line essentials
date: 2016-10-23T14:43:29+00:00
author: Gwyn
layout: post
guid: http://15v.co/?p=352
permalink: /mac-os-x-command-line-essentials/
categories:
  - Bash
  - Development
  - Learning
  - Signpost
  - Unix
---
As our team move to Mac OS X development environments and Git version control I wanted to prepare a post covering some Command Line essentials. As a developer working with these technologies you don't _have to_ use the command line but you'll probably _want to,_ at least some of the time. This post is intended to be something of a beginners reference.

In preparing this post I've used a few  sources including:

  * Kevin Skoglund's excellent [Unix for Mac OS X Users](http://www.lynda.com/Mac-OS-X-10-6-tutorials/Unix-for-Mac-OS-X-Users/78546-2.html) course
  * Joe Kissel's [Take Control of the Mac Command Line with Terminal](https://www.safaribooksonline.com/library/view/take-control-of/9781457191107/) book
  * William Shott's [The Linux command Line](https://www.safaribooksonline.com/library/view/the-linux-command/9781593273897/) book
  * Andrew Mallet's [Linux Command Line Interface (CLI) Fundamentals course](https://app.pluralsight.com/library/courses/linux-cli-fundamentals/table-of-contents)

Here's a summary of the essentials that will probably be most useful.

## Basics of the Command Line

The command line is simply an different way of interacting with the operating system or running programs. You type commands at a prompt instead of using a GUI. This can be off-putting initially, but a little bit of learning can save you a lot of time. For example, I can empty the contents of my Downloads directory in Mac OS X by either:

  * Clicking on Finder in the dock, clicking on 'Downloads' in the favourites, selecting all the documents shown and selecting 'Move to trash' from the context menu, or;
  * Typing `cd ~/Downloads; rm *` in **Terminal** (the command line application provided on Mac OS X)

Admittedly, the second option seems a bit cryptic but it quickly becomes second nature as you start to use the command line. Let's unpick this example. We have two independent commands separated by a semi-colon. The first command '`cd`' navigates to or '**c**hanges **d**irectory' to to Downloads in our home directory. The second command, '`rm`' **r**e**m**oves everything (denoted by '*') in the current directory.

## Essential commands

Here are a few essential commands which I suggest beginners have a play around with.

### Moving around

  * `pwd` (**p**rint **w**orking **d**irectory) shows your current location in the file system.
  * Use `cd` (**c**hange **d**irectory) to move around the file system (`cd ~` takes you back to the home directory, `cd -` lets you toggle to your last directory).
  * ls will **l**i**s**t what's in the current directory

### Using history {#history}

You can view all of your previous commands by typing `history`. When you do this, you'll see a number next to each command. By typing that number preceded by '!' you'll be able to run that command instantly. The history can get pretty long, so it is really helpful to search for a specific command. I often find myself doing this for long Git commands (such as `git log --oneline --decorate --graph`). To do this I'd type `history | grep log` which is essentially 'piping' the output of history through another command (grep to an amazingly powerful search utility) which searches for a specific pattern, in this case 'log'.

#### History shortcuts

  * `!<em>str</em>` lets you **find the last command that** _**began with str**_.** **For example,  `!v` will find and run the last command that began with the letter v
  * `!?<em>str</em>` lets you **find the last command the _contains_ str**
  * `!$` gives you **access to your last argument**. For example, if the last command you typed was `cd ~/Downloads` and you followed that with `!$` you would be presented with `~/Downloads`

#### Update to even better history with 'reverse-i-search' {#update}

I've just today been introduced to a really handy command line feature called `reverse-i-search`. What this does is allow you to search your history and traverse the results. Simply type <kbd>Ctrl + R</kbd> within a terminal window to bring up the search, enter your keyword and then repeat <kbd>Ctrl + R</kbd> to traverse the matches.

### Creating, moving and deleting files

  * `touch`, as well as creating files, will update the access time for an existing file.
  * `cp` lets you **c**o**p**y the contents of one file to another.
  * `mv` can be used to **m**o**v**e files around

### Searching with find

The find command recursively searches directories, looking at every file until it finds a match. For example, I can find all the files anywhere in my home directory with names that contain the string 'index' with:

`find ~ -name "*index*"`

### Fun utilities

There are many useful utilities available on the command line, here are a couple of the more 'fun' ones (use the `man` command to find out more about them)

  * the `expr` command provides a simple calculator
  * `units` provides a simple way to convert units of temperature, length, area etc.

## Mac only commands

Everything mentioned so far should work across *nix command line applications, each of which have their own special features. Here are a few of the many that are specific to Macs.

### Open

The open command is a pretty flexible way of opening _things_. Here are a few examples:

  * `open -a PhpStorm` will open PhpStorm. You can do this for any application within your Applications directory
  * `open http://www.nationalarchives.gov.uk` will open the web page in your default web browser
  * You can also pipe the output from Unix commands to open. For example, `ls -a | open -f` will show the contents of the current directory in your default text editor

### Screen capture

The `screencapture` command allows you to create and save a screen capture to a filename _of your choice._ For example `screencapture > sc.png`

### Text to speech

the `say` command lets you use Mac OS X text to speech capability. For example:

  * type `say "I am talking"` and text to speech will say &#8220;I am talking&#8221;
  * `say -f ramblings.txt -o audio_file.aiff` will create an audio file (in aiff format) of the text within the ramblings.txt file

## General tips

  * Every command has a manual page accessed by typing man followed by the command name (i.e. `man pwd`)
  * Because the Terminal can show both the commands you've typed and their output, the screen can get a bit cluttered. At any point you can use the `clear` command to _hide_ the scrollback (your previous commands and their output) or <kbd>cmd + k</kbd> to _clear_ the scroll back.
  * All commands follow a specific structure: command _optionally_ followed by options _optionally_ followed by arguments. i.e. `ls -a Pictures`
  * You can separate commands with a semi-colon

## Bringing it all together

Here's a little something which, using the techniques shown above (and one other called xargs, which is probably a bit too much to go into at this point) can save you time every time you sit down to start working. By typing

`echo 'SourceTree.app PhpStorm.app MAMP\ PRO.app' | xargs -t -n1 open -a`

You'll instantly open SourceTree, PhpStorm and Mamp Pro. Yes, that's a lot to type but you can very easily save an alias for that command as, say, `devgo` which would allow you to open all your development software.

I really hope this post will be useful to others and would be very happy to clarify or help with any of the commands/techniques mentioned.