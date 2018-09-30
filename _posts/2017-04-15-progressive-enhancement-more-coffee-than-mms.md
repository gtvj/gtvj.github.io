---
id: 1159
title: 'Progressive enhancement in 2017: more coffee than M&#038;Ms'
date: 2017-04-15T20:36:14+00:00
author: Gwyn
layout: post
guid: /?p=1159
permalink: /progressive-enhancement-more-coffee-than-mms/
categories:
  - Development
  - Progressive enhancement
---
The Peanut M&M has become the accepted metaphor for progressive enhancement. I&#8217;ve seen it used many times &#8211; perhaps first on  [A List Apart](https://alistapart.com/article/understandingprogressiveenhancement) way back in 2008. The thing is, we&#8217;ve seen a great deal of change in recent years and the M&M doesn&#8217;t really feel like the best metaphor anymore &#8211; I just couldn&#8217;t ever think of something that seemed more suitable.

While having a coffee with friends recently we got round to talking about the value of progressive enhancement. We agreed that it leads to better products delivered at lower cost that are more maintainable (no surprises there). We&#8217;d also pretty much agreed that sometimes people can&#8217;t see the value until they&#8217;ve had the experience of trying to dig themselves out of holes where it&#8217;s been ignored.

I looked down, saw our drinks and it occurred to me: **_progressive enhancement in 2017 is a bit like coffee. _**This metaphor is similar but there are a few reasons why I think it better suits where we are now.

### HTML is the espresso

Like a good coffee this metaphor begins with a shot of espresso representing &#8211; you guessed it &#8211; semantic HTML that **allows users to meet the &#8216;core&#8217; needs without reliance upon CSS or JavaScript capabilities**.

Here&#8217;s the first difference to the M&M metaphor: remove the peanut from a Peanut M&M and it&#8217;s still an M&M (and let&#8217;s face it &#8211; <del>some</del> <del>most</del> many of us care more about chocolate than peanuts <sup>[citation needed]</sup>). But a cappuccino without espresso is no longer a coffee. I could stretch things here with the importance of quality espresso but hopefully you get my drift: **the coffee itself is the payload.** It&#8217;s what everyone expects.

I&#8217;m going to talk about enhancements now but before I do I&#8217;d just like to say&#8230;

<div class="attn">
  <h3>
    Enhancements are not <em>just</em> enhancements
  </h3>
  
  <p>
    Describing something as an enhancement is sometimes mistaken for trivialising it &#8211; as though it&#8217;s suggesting it doesn&#8217;t really matter. That&#8217;s not the case. <strong>It&#8217;s the enhancements that make all the difference, but they do remain enhancements. Why? Because of the nature of the web:</strong>
  </p>
  
  <blockquote>
    <p>
      The one problem I’ve seen, however, is the fundamental disconnect traditional software developers seem to have with the way deploying code on the Web works. In traditional software development, you have some say in the execution environment. On the Web, you don’t. I’ll explain. If I’m writing server-side software in Python or Rails or even PHP, one of two things is true:
    </p>
    
    <ul>
      <li>
        I control the server environment, including the operating system, language versions, and packages.
      </li>
      <li>
        I don’t control the server environment, but I have knowledge of it and can author my program accordingly so it will execute as anticipated.
      </li>
    </ul>
    
    <p>
      In the more traditional installed software world, you can similarly control the environment by placing certain restrictions on what operating systems your code supports and what dependencies you might have (such as available hard drive space or RAM). You provide that information up front, and your potential users can choose your software—or a competing product—based on what will work for them. <strong>On the Web, however, all bets are off. The Web is ubiquitous. The Web is messy. And, as much as I might like to control a user’s experience down to the pixel, I understand that it’s never going to happen because that isn’t the way the Web works.</strong> The frustration I sometimes feel with my lack of control is also incredibly liberating and pushes me to come up with more creative approaches. Unfortunately, traditional software developers who are relatively new to the Web have not come to terms with this yet. It’s understandable; it took me a few years as well <cite><a href="https://www.safaribooksonline.com/library/view/adaptive-web-design/9780134216287/">Adaptive Web Design: Crafting Rich Experiences with Progressive Enhancement, Aaron Gustafson</a></cite>
    </p>
  </blockquote>
  
  <p>
    This view of enhancements not being <em>just</em> enhancements is brilliantly put by <a href="https://vimeo.com/166790296#t=1993s">Jeremy Keith in his Resilience talk at Render Conference</a> (this link drops you in at 33:03 and he makes the point in just a couple of minutes &#8211; but I&#8217;d highly recommend the whole talk if you&#8217;ve got time for it).
  </p>
  
  <h4>
    I think of it as a hierarchy
  </h4>
  
  <p>
    I like to think of enhancements as being similar to everything above &#8216;physiological needs&#8217; in <a href="https://en.wikipedia.org/wiki/Maslow%27s_hierarchy_of_needs">Maslow&#8217;s hierarchy of needs</a>. You can survive without them but it wouldn&#8217;t be much of a life by most standards; that said, <strong>I wouldn&#8217;t want my oxygen supply to be reliant upon my sense of social belonging</strong>.
  </p>
</div>

### Everything else is an enhancement

The milk, syrup, burnt caramel drizzle or whipped cream are enhancements. Some people (like me) will gladly have all of them but others wont.

Here&#8217;s the second reason I think coffee is a more suitable metaphor. The Peanut M&M metaphor can lead to a perception that there is an &#8216;order&#8217; to the presentation and behaviour layers that isn&#8217;t necessarily so. Most users will have your HTML, CSS and JavaScript. Some won&#8217;t have CSS, others might override your CSS with their own for accessibility reasons, others might enable a reading mode. All users don&#8217;t have JavaScript until it&#8217;s loaded and some [don&#8217;t have it at all](https://kryogenix.org/code/browser/everyonehasjs.html). These groups aren&#8217;t mutually exclusive and the coffee comparison better reflects this reality &#8211; after all, there aren&#8217;t just three coffees to choose from: espresso; espresso with milk; espresso with milk and sugar.

This might seem like a minor detail but it can lead to very real problems ranging from the belief that screen readers don&#8217;t run JavaScript to well intentioned but poorly implemented enhancements breaking products for some users. It&#8217;s easy to see that intentionally demoting HTML and CSS to second class status with JavaScript is against progressive enhancement, but I&#8217;ve seen well meaning developers add a CSS rule that hides everything until JavaScript has loaded and run successfully.

<blockquote class="twitter-tweet" data-lang="en">
  <p dir="ltr" lang="en">
    ~15 years trying to make everyone separate HTML, JS & CSS. And then suddenly everything went south and we’re writing code like this. <a href="https://t.co/NnmJmPvEgp">pic.twitter.com/NnmJmPvEgp</a>
  </p>
  
  <p>
    — Thomas Fuchs (@thomasfuchs) <a href="https://twitter.com/thomasfuchs/status/810885087214637057">December 19, 2016</a>
  </p>
</blockquote>



The end result is the same: like putting a sign up saying _&#8216;Apologies to our lactose intolerant or vegan customers but all our coffees are made with cows milk&#8217;_.

### And that&#8217;s before we look below the surface

Things get a lot more complex when you look beneath the surface. It&#8217;s not just a case of determining whether a user has &#8216;CSS&#8217; or &#8216;JavaScript&#8217; anymore &#8211; it&#8217;s a question of what APIs, features and versions the browser supports. This is why feature detection, transpilation and tools like [canIuse.com](http://caniuse.com/#) are an essential part of a modern workflow. A quick check of the Modernizr source code suggests there are about 270 detects available. That&#8217;s 270 capabilities that some, but not all, of your users will have. That&#8217;s pretty incredible &#8211; and it&#8217;s not stopping any time soon. Browsers will continue to implement features that set them apart from their competition, and occasionally &#8211; because they&#8217;ve been shipped so early &#8211; this can result in partial, inconsistent implementations of (sometimes dead) specifications across browsers.<figure id="attachment_1283" style="width: 1024px" class="wp-caption alignnone">

<img class="size-large wp-image-1283" src="/wp-content/uploads/2017/04/Screenshot-from-2017-04-13-21-17-04-1024x816.png" alt="" width="1024" height="816" srcset="/wp-content/uploads/2017/04/Screenshot-from-2017-04-13-21-17-04-1024x816.png 1024w, /wp-content/uploads/2017/04/Screenshot-from-2017-04-13-21-17-04-300x239.png 300w, /wp-content/uploads/2017/04/Screenshot-from-2017-04-13-21-17-04-768x612.png 768w" sizes="(max-width: 1024px) 100vw, 1024px" /><figcaption class="wp-caption-text">A &#8216;heads up&#8217; to those who may have implemented the FileSystem API that the specification has been dropped.</figcaption></figure> 

In our coffee metaphor this can be represented by the huge variety of options that now exist. It&#8217;s not just &#8216;milk&#8217; any more, it&#8217;s cow&#8217;s milk (whole, semi-skimmed, skimmed) or soya milk, or almond milk &#8211; each of which might be steamed, extra hot or warm. Then there&#8217;s the flavoured syrups &#8211; hazelnut (sugar or sugar-free), peppermint, vanilla, caramel. Then there&#8217;s the toppings, and so on.

**Setting a high baseline for your users with a view to degrading gracefully is a bit like starting all coffees with a syrup then adding other flavours to counter it for those who didn&#8217;t want it in the first place.** This can cause development to quickly feel like every change made to accommodate one scenario impacts adversely on another, with workarounds becoming so convoluted that change feels daunting. Development slows down, morale drops and a split &#8211; or even tensions &#8211; can emerge between those seeking changes and those making them. Not a good scenario for a team or a product.

But this doesn&#8217;t need to be the case if we haven&#8217;t made our user&#8217;s core goals reliant upon something that should have been an enhancement. That&#8217;s why many of us believe that progressive enhancement done well is worth the effort and results in better products and happier, more productive teams.

## Helpful resources

While the coffee metaphor is undoubtedly flawed I hope that it&#8217;s at least been helpful. Much of what I&#8217;ve said here has been said before, so here are a few resources if you&#8217;re interested in knowing more about progressive enhancement:

<li style="font-weight: 400;">
  <a href="https://gdstechnology.blog.gov.uk/2016/09/19/why-we-use-progressive-enhancement-to-build-gov-uk/"><span style="font-weight: 400;">Why we use progressive enhancement to build GOV.UK</span></a><span style="font-weight: 400;"> (if you&#8217;ve got ten minutes)</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Jeremy Keith’s talk on </span><a href="https://vimeo.com/166790296"><span style="font-weight: 400;">Resilience</span></a><span style="font-weight: 400;"> at Render Conf 2016 (if you’ve got about an hour)</span>
</li>
<li style="font-weight: 400;">
  <a href="https://adaptivewebdesign.info/2nd-edition/"><span style="font-weight: 400;">Adaptive Web Design</span></a><span style="font-weight: 400;"> by Aaron Gustafson (if you&#8217;ve got a good few hours)</span>
</li>

## 

&nbsp;