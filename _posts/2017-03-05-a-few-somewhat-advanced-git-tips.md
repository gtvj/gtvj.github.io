---
id: 841
title: A few (somewhat) lesser known Git tips
date: 2017-03-05T08:47:29+00:00
author: Gwyn
layout: post
guid: http://15volts.com/?p=841
permalink: /a-few-somewhat-advanced-git-tips/
categories:
  - Git
  - Signpost
---
This post describes a few lesser known features of Git. It's starting out small but  &#8211; like my [OSX Command Line Essentials](http://15volts.com/2016/10/23/mac-os-x-command-line-essentials/) &#8211; will be added to as I encounter new things.

For the purposes of the description there are four main areas that I will refer to:

  1. The **working area **(i.e. the files on your system)
  2. The **index **(i.e. the files that have been 'added' or 'staged')
  3. The **repository **(i.e. the files that have been committed)
  4. The **stash**

## diff subtleties

  1. `git diff` will compare the working area to the _index_
  2. `git diff --cached` compares the index to the _repository_
  3. `git diff branch_one branch_two` compares two branches

### Useful diff formatting options

A standard `diff` command in Git will show you the line as it was and the line as it is. That's how Git works internally to identify changes but it's not always most helpful. Sometimes we need to zoom in to easily identify the specific words or characters that have changed. At other times we might just need to know which files that have changed and not be concerned about how. There are useful options for both scenarios:

  * the `--color-words` and `--word-diff` options can be used to better see exactly what has changed within a line.
  * the `--stat` command will show only what files have changed.

## rm with caution

While `git add` moves a file from the working area to the index, `git rm` needs to be treated with caution:

  * `git rm -f` will remove the file from both the index **and** the working area. It is **destructive**
  * `git rm --cached` removes the file from the index but retains the changes in the working area

## surgical logging

Here are some useful variants of the `git log` command:

  * `git log --grep volts` will filter results to those that have 'volts' in the **commit message**
  * `git log -Gvolts [--patch]` will filter results to those that added or removed the string 'volts' _to any file_