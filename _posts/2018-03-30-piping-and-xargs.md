---
title: Piping and xargs (updated)
date: 2018-03-30
author: gtvj
layout: post
topic: code
---

Today I faced an odd problem. I needed to remove everything but a specific file from a directory via the command line. Having thought about it for a while, and done a bit of research, I came across someone posing the same question on [Stack exchange](http://unix.stackexchange.com/questions/153862/remove-all-files-directories-except-for-one-file). There are several answers provided, but I really liked this one.

## Example

```bash
ls | grep -v file.txt | xargs -t rm
```

In this example, everything but `file.txt` will be removed from the working directory.

### How it works

1. The output from the `ls` command is piped into `grep`
2. `grep` is passed the `-v` argument which inverts its behaviour, returning everything **but** `file.txt`
3. The output of `grep` is then piped into `xargs` which in turn passes each result to `rm` (which removes each item passed to it). _Note: the `-t` argument simply shows the resulting command that is run by `xargs`_

I thought that was a nice simple way of achieving what I needed and, since it also neatly demonstrates how piping and `xargs` works, I thought I'd post it here.

## Using xargs with commands that take two arguments

But what about using `xargs` for commands that take multiple arguments (like `mv` that takes both _source_ and _destination_ arguments)? I used this command today to move all Python files within the current directory to a new location.

```bash
ls | grep -e '.*py$' | xargs -I '{}' mv '{}' ../python
```

### How it works

  <ul>
    <li>
      The output of <code>ls</code> is piped to <code>grep</code>
    </li>
    <li>
      the <code>-e</code> argument is passed to <code>grep</code> to use extended regular expressions
    </li>
    <li>
      the output is passed to <code> xargs</code> with the <code>-I</code> argument using <code>'{}'</code> to represent the replacement.
    </li>
  </ul>


I should explain that I initially found this confusing because it looked to me that standard input was being placed both before and after the mv command. That isn't the case because the first instance of `'{}'` is simply providing a name for the value received from standard input. I've experimented with this and you could achieve the exact same thing with something other than `'{}'`. Here's an example where I'm copying files using `'{blah}'`:

```bash
ls | grep .py | xargs -I {blah} cp {blah} new-{blah}
```
