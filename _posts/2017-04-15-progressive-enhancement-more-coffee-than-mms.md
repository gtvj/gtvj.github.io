---
id: 1159
title: 'Progressive enhancement in 2017'
date: 2017-04-15T20:36:14+00:00
author: Gwyn
layout: post
guid: /?p=1159
permalink: /progressive-enhancement-more-coffee-than-mms/
categories:
  - Development
  - Progressive enhancement
---
The Peanut M&M has become the accepted metaphor for progressive enhancement. I've seen it used many times - perhaps first on  [A List Apart](https://alistapart.com/article/understandingprogressiveenhancement) way back in 2008. The thing is, we've seen a great deal of change in recent years and the M&M doesn't really feel like the best metaphor anymore - I just couldn't ever think of something that seemed more suitable.

While having a coffee with friends recently we got round to talking about the value of progressive enhancement. We agreed that it leads to better products delivered at lower cost that are more maintainable (no surprises there). We'd also pretty much agreed that sometimes people can't see the value until they've had the experience of trying to dig themselves out of holes where it's been ignored.

I looked down, saw our drinks and it occurred to me: **_progressive enhancement in 2017 is a bit like coffee._** This metaphor is similar but there are a few reasons why I think it better suits where we are now.

### HTML is the espresso

Like a good coffee this metaphor begins with a shot of espresso representing - you guessed it - semantic HTML that **allows users to meet the &#8216;core' needs without reliance upon CSS or JavaScript capabilities**.

Here's the first difference to the M&M metaphor: remove the peanut from a Peanut M&M and it's still an M&M (and let's face it - many of us care more about chocolate than peanuts). But a cappuccino without espresso is no longer a coffee. I could stretch things here with the importance of quality espresso but hopefully you get my drift: **the coffee itself is the payload.** It's what everyone expects.

I'm going to talk about enhancements now but before I do I'd just like to say:

### Enhancements are not _just_ enhancements

Describing something as an enhancement is sometimes mistaken for trivialising it - as though it's suggesting it doesn't really matter. That's not the case. **It's the enhancements that make all the difference, but they do remain enhancements. Why? Because of the nature of the web:**

  > The one problem I’ve seen, however, is the fundamental disconnect traditional software developers seem to have with the way deploying code on the Web works. In traditional software development, you have some say in the execution environment. On the Web, you don’t. I’ll explain. If I’m writing server-side software in Python or Rails or even PHP, one of two things is true: I control the server environment, including the operating system, language versions, and packages; I don’t control the server environment, but I have knowledge of it and can author my program accordingly so it will execute as anticipated. In the more traditional installed software world, you can similarly control the environment by placing certain restrictions on what operating systems your code supports and what dependencies you might have (such as available hard drive space or RAM). You provide that information up front, and your potential users can choose your software—or a competing product—based on what will work for them. <strong>On the Web, however, all bets are off. The Web is ubiquitous. The Web is messy. And, as much as I might like to control a user’s experience down to the pixel, I understand that it’s never going to happen because that isn’t the way the Web works.</strong> The frustration I sometimes feel with my lack of control is also incredibly liberating and pushes me to come up with more creative approaches. Unfortunately, traditional software developers who are relatively new to the Web have not come to terms with this yet. It’s understandable; it took me a few years as well [Adaptive Web Design: Crafting Rich Experiences with Progressive Enhancement, Aaron Gustafson](https://www.safaribooksonline.com/library/view/adaptive-web-design/9780134216287/)

This view of enhancements not being _just_ enhancements is brilliantly put by [Jeremy Keith in his Resilience talk at Render Conference](https://vimeo.com/166790296#t=1993s) (this link drops you in at 33:03 and he makes the point in just a couple of minutes - but I'd highly recommend the whole talk if you've got time for it).
 
#### I think of it as a hierarchy

 I like to think of enhancements as being similar to everything above &#8216;physiological needs' in Maslow's hierarchy of needs. You can survive without them but it wouldn't be much of a life by most standards; that said, **I wouldn't want my oxygen supply to be reliant upon my sense of social belonging**.

### Everything else is an enhancement

The milk, syrup, burnt caramel drizzle or whipped cream are enhancements. Some people (like me) will gladly have all of them but others wont.

Here's the second reason I think coffee is a more suitable metaphor. The Peanut M&M metaphor can lead to a perception that there is an 'order' to the presentation and behaviour layers that isn't necessarily so. Most users will have your HTML, CSS and JavaScript. Some won't have CSS, others might override your CSS with their own for accessibility reasons, others might enable a reading mode. All users don't have JavaScript until it's loaded and some [don't have it at all](https://kryogenix.org/code/browser/everyonehasjs.html). These groups aren't mutually exclusive and the coffee comparison better reflects this reality - after all, there aren't just three coffees to choose from: espresso; espresso with milk; espresso with milk and sugar.

This might seem like a minor detail but it can lead to very real problems ranging from the belief that screen readers don't run JavaScript to well intentioned but poorly implemented enhancements breaking products for some users. It's easy to see that intentionally demoting HTML and CSS to second class status with JavaScript is against progressive enhancement, but I've seen well meaning developers add a CSS rule that hides everything until JavaScript has loaded and run successfully.

> ~15 years trying to make everyone separate HTML, JS & CSS. And then suddenly everything went south and we’re writing code like this. [Thomas Fuchs (@thomasfuchs)](https://twitter.com/thomasfuchs/status/810885087214637057)




The end result is the same: like putting a sign up saying _&#8216;Apologies to our lactose intolerant or vegan customers but all our coffees are made with cows milk'_.

### And that's before we look below the surface

Things get a lot more complex when you look beneath the surface. It's not just a case of determining whether a user has &#8216;CSS' or &#8216;JavaScript' anymore - it's a question of what APIs, features and versions the browser supports. This is why feature detection, transpilation and tools like [canIuse.com](http://caniuse.com/#) are an essential part of a modern workflow. A quick check of the Modernizr source code suggests there are about 270 detects available. That's 270 capabilities that some, but not all, of your users will have. That's pretty incredible - and it's not stopping any time soon. Browsers will continue to implement features that set them apart from their competition, and occasionally - because they've been shipped so early - this can result in partial, inconsistent implementations of (sometimes dead) specifications across browsers.<figure id="attachment_1283" style="width: 1024px" class="wp-caption alignnone">

![](/wp-content/uploads/2017/04/Screenshot-from-2017-04-13-21-17-04-1024x816.png)

A ‘heads up' to those who may have implemented the FileSystem API that the specification has been dropped.

In our coffee metaphor this can be represented by the huge variety of options that now exist. It's not just &#8216;milk' any more, it's cow's milk (whole, semi-skimmed, skimmed) or soya milk, or almond milk - each of which might be steamed, extra hot or warm. Then there's the flavoured syrups - hazelnut (sugar or sugar-free), peppermint, vanilla, caramel. Then there's the toppings, and so on.

**Setting a high baseline for your users with a view to degrading gracefully is a bit like starting all coffees with a syrup then adding other flavours to counter it for those who didn't want it in the first place.** This can cause development to quickly feel like every change made to accommodate one scenario impacts adversely on another, with workarounds becoming so convoluted that change feels daunting. Development slows down, morale drops and a split - or even tensions - can emerge between those seeking changes and those making them. Not a good scenario for a team or a product.

But this doesn't need to be the case if we haven't made our user's core goals reliant upon something that should have been an enhancement. That's why many of us believe that progressive enhancement done well is worth the effort and results in better products and happier, more productive teams.

## Helpful resources

While the coffee metaphor is undoubtedly flawed I hope that it's at least been helpful. Much of what I've said here has been said before, so here are a few resources if you're interested in knowing more about progressive enhancement:

* [Why we use progressive enhancement to build GOV.UK](https://gdstechnology.blog.gov.uk/2016/09/19/why-we-use-progressive-enhancement-to-build-gov-uk/) (if you've got ten minutes)
* Jeremy Keith’s talk on [Resilience](https://vimeo.com/166790296) at Render Conf 2016 (if you’ve got about an hour)
* [Adaptive Web Design by Aaron Gustafson](https://adaptivewebdesign.info/2nd-edition/) (if you've got a good few hours)