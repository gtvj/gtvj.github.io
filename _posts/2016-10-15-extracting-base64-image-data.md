---
title: Extracting Base64 image data
date: 2016-10-15
author: gtvj
layout: post
topic: code
---

Earlier today I faced an unusual problem in that the app I'm currently working on involves generating a PDF from HTML (for which we're using the [WebKit HTML to PDF](http://wkhtmltopdf.org/) library) and I needed to include the designers' PNGs without making a network request for them. The immediate answer to this is to use the [Data URI scheme](https://developer.mozilla.org/en-US/docs/Web/HTTP/data_URIs). This left me with a handful of PNGs which I needed to convert to Base64. There are online tools which will do this conversion but, to be honest, I just don't trust them.

My colleague Dan (a very capable Ruby developer) showed me a great way to achieve this using nothing but Ruby. The command line snippet below will probably be fairly self-explanatory and will result in the Base64 string being copied to the clipboard ready for pasting into an `<img />` attribute.

`````ruby
ruby -e "require 'base64'; puts Base64.strict_encode64(File.open('./app/assets/images/exclamation.png').read)" | pbcopy
`````

Thanks Dan 🙂

## Update: to do the same thing in bash

`````bash
opopenssl base64 -in image.png -out image.txt
`````

An alternative to `-out` is to pipe it to `pbcopy`

```bash
openssl base64 -in image.png | pbcopy`
```