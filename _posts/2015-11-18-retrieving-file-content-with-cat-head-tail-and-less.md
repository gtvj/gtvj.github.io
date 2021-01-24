---
title: Retrieving file content with cat, head, tail and less
date: 2015-11-18
author: Gwyn
layout: post
topic: code
---

This short post provides a brief description of a few simple commands that deal with retrieving file contents.

## cat (meaning concatenate)

Shows the full file contents of one or more files. For example:

  * `cat one.txt` will output the single file contents to the terminal
  * `cat one.txt two.txt` will output the _concatenated contents of both files_ to the terminal

## head and tail

Show the first or last lines of a file. For a file:

  * `head one.txt` will show the _first ten lines_ of the file
  * `head -1 one.txt` will show the _first line_ of the file
  * `head -1 one.txt two.txt` will show the _first line of both file_

Tail works the same way.

## File perusal with less

While the previous commands simply output the file contents to the terminal window, the command line program `less` provides powerful file perusal (their word, not mine) capabilities. For example: `less one.txt` opens the file for perusal in less. There are a lot of commands available in less but here the key ones:

  * `h` shows all available commands
  * `space` goes forward one window
  * `q` quits

## Practical applications

Here are a few practical applications of these programs used in conjunction with others.

  * `head -1 lebowski.txt | pbcopy` places the first line of the file onto the clipboard
  * `cat *.css > new.css` copies the contents from all CSS files within the current directory  into new.css (this is just an illustration: there are better ways/means of doing this).