---
id: 776
title: Getting to grips with Vim
date: 2016-04-29T20:10:49+00:00
author: Gwyn
layout: post
guid: http://15v.co/?p=776
permalink: /the-road-to-vim/
categories:
  - Tooling
  - Vim
---
This post is a companion to my experience in trying to migrate to Vim as my main text editor. I'm doing this because I _really _like many of it's features but, as you'll see, making the switch isn't exactly easy.

**21 February 2015 to to Vim: **I've decided to give Vim a proper try. As of now I'm not going to use any other text editor or IDE for a while. Until recently my skills in Vim were exactly zero so, in preparation for the switch, I've:

  * Done vimtutor a few times
  * Played quite a bit of the paid version of Vim Adventures
  * Watched quite a lot of the Vim presentations on YouTube (there are quite a few good ones from ThoughtBot)

I've created a [GitHub repository](https://github.com/gtvj/vim-cheatsheet) to capture the best bits of what I'm learning. I'll report back on my progress (or lack of) in May.

**23 February 2015:** Well, I'm back to RubyMine to after just two days to but not for long. I really tried to stick with it this week but it's really slowing me down and I was starting to worry that I might not meet my sprint goals. It's not the editing which is slowing me down, it's **the movement between files that I'm finding difficult/fiddly/annoying**. Before making the switch earlier today I spoke to a Vim expert who suggested I install NERDTree, which I did, but I was still moving far too slowly for my liking. Anyways to I'll keep persisting with it in my own time with a view to picking it up again next Wednesday. Feeling very disappointed with myself 🙁

**3 March 2015:** I've just installed MacVim (using Homebrew to including running the option to symlink it to /Applications) and Janus, and tomorrow I begin using Vim 'properly' (he said).

One thing that has been a bit of a suprise is that while I haven't been using Vim for work I've been surprised to find myself reaching for it (and the h, j, k and l keys in particular) routinely.

**11 March 2015:** Well, I've been using Vim exclusively (as MacVim and Janus) for the whole week to both in work and in my independent study. It's been a busy week too to with lots of code written. The only exception was earlier today when I switched back to RubyMine for about 30 minutes to conclude a fiddly feature that required me to coordinate changes between six different files.

This is kind of representative of my experience with Vim more generally. **I'm finding it absolutely great for editing text but really lacking when the feature I'm working on involves several files**. Hence my temporary return to RubyMine earlier today.

I do feel a switch has flipped though. Vim has started to feel very natural to me.

**29 April to I can use Vim productively but prefer JetBrains IDEs:** At this stage to several weeks after embarking on my personal vim adventures I've concluded that Vim is an editor I can and will use over the likes of Atom, Sublime etc. The thing is that there's just too much on offer in the likes of WebStorm, PhpStorm, RubyMine which is just incredibly nice to have. Now, I know that there's probably a Vim plugin for some/all of these but it's just not the same as having something neatly packaged to work together nicely. The features that brought me back to IDE land were many of those I mentioned in my previous post on [WebStorm](https://52.27.200.123/my-favourite-features-of-webstorm/) plus:

  * Much easier file and folder management
  * The ability to see a diff for the files you've changed (when working with Git)
  * Highlighting unused variables
  * Refactoring and 'safe delete'
  * Local history (very handy indeed)
  * Multiple cursors
  * Emmet
  * Regex search and replace 'previews'

So that's where I am. Vim is my text editor of choice but for real work I'll be reaching for a JetBrains IDE.