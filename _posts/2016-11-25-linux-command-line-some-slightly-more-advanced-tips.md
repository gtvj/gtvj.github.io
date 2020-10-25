---
title: 'Linux command line - some slightly more advanced tips'
date: 2016-11-25
author: Gwyn
layout: post
---

In my [Mac OSX Command Line Essentials](http://15volts.com/mac-os-x-command-line-essentials/) post I describe some basics of command line use. About 90% of what's there is equally applicable in Linux. If the command line is entirely new to you I'd suggest starting there because I'll be introducing a few more advanced topics here.

## Contents

  * [man](#man)
  * [chmod](#chmod)
  * [tail](#tail)
  * [locate and find](#locate-and-find)
  * [shutdown](#shutdown)
  * [Assorted cool stuff](#assorted)

## man to read the manual {#man}

The `man` command allows you to see a 'manual' for a given command but these are often quite unwieldy. Here are a few tips for finding what you need within a man page:

  * `\` to search (either a simple string or regular expression will work)
  * `h` to get help

## chmod to change permissions {#chmod}

`chmod` can be used to alter a file’s permissions. It can be a little confusion because it provides several forms of command syntax to achieve the same thing. These including octal, binary and to perhaps easiest to grasp to the mnemonic form. For users the mnemonic forms are: `u` for user, `g` for group, `o` for other, `a` for all. For permissions it's: `r` for read, `w` for write and `x` for execute

For example:

  * `chmod a-r foo.txt` removes 'read' permissions from 'all'
  * `chmod u+rw foo.txt` adds 'read' and 'write' permissions for 'user'
  * `chmod u+rw -R bar/` adds 'read' and 'write' permissions for the 'bar' directory and its contents recursively

## tail {#tail}

The `tail` command prints the last 10 lines of a file. A lesser known but extremely useful variant is the `-f` option which allows you to keep the file open and print any new lines as they are appended. In addition, you can use the `--retry` option if the file doesn't exist.

## locate and find {#locate-and-find}

These two commands can be used to find files but they work in different ways. Simply put: `locate` is easier but `find` is more powerful.

`locate` searches a database of pathnames and returns every name that matches a given substring. For example:

  * `locate .js --count` tells me that there are currently 14,151 pathnames that contain the '.js' substring listed in the database on my machine. Without `--count` they'd all be output
  * `locate --regex ".s?css$" ` lists all the pathnames that end with either '.css' or '.scss'

`find` is better because it _searches a given directory_ and has many powerful options. Rather than describe them I'll provide some examples:

  * `find ~` lists everything in my home directory
  * `find ~ -regex '.*\.min\.css$'` lists all '.min.css' files in my home directory
  * `find ~ -type f` lists every file (there is also a `d` option)
  * `find ~ -type f -name "*.js" -size +1M | wc -l` tells you how many '.js' files are larger than one MB. You can see how something like this might be useful for testing.
  * `find ~ -cmin -4 -type f` will show all files with contents or attributes that were last modified less than 4 minutes ago (there is also a `-mmin` option which looks for content changes only).

This is really just the beginning to there is lots you can achieve with `find`.

## Shutdown {#shutdown}

One of the things I initially missed when moving from Mac to Linux was the ability within Alfred to quickly shut down or restart a machine.

  * `shutdown -h now` to will shut down immediately
  * `shutdown -r now` to will restart immediately

There are other options that can be found on the `man` page.

## Assorted cool stuff {#assorted}

  * `sudo !!` run the last command as root (Note: omitting `sudo` simply runs the last command
  * `Ctrl + x, e` temporarily open Vim to edit the command
  * `Alt + .` place the argument from the last command on the shell

I hope you've found these few tips helpful 🙂
