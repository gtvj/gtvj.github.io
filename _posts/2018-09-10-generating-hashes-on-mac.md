---
id: 1594
title: Generating hashes on Mac
date: 2018-09-10T09:01:50+00:00
author: Gwyn
layout: post
guid: /?p=1594
permalink: /generating-hashes-on-mac/
categories:
  - Bash
---
Every time I have to use a checksum on Mac I end up searching on line for the command to use to and every time I have this niggling feeling that I should be saving this somewhere. Since I'm not doing this _that_ often I tend to forget. Anyways, here's how you do it.

Here's an example of checking the iTerm2 .zip file before downloading the file:

```bash
curl -L https://iterm2.com/file.zip | shasum -a 256
```