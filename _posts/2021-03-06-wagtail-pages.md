---
title: New stack (Pt. 2) Wagtail page model
date: 2021-03-09
author: Gwyn
layout: post
topic: code
---

In Wagtail we define the different **types of page** in our site (our page 'types') as Python classes which inherit from the `Page` model class. This post is intended to be a quick overview/tutorial for developers new to the working with these. 

## Creating a page type: the steps

The docs provide [a walkthrough](https://docs.wagtail.io/en/stable/getting_started/tutorial.html#a-basic-blog ) for creating a simple page.

1. Run the `startapp` command to scaffold out a folder for our app.
    * Add the newly created app to the `INSTALLED_APPS` list in `base.py` (this is simply the filename as a string to the list)
2. **Create a Page model class**
   * add the desired fields to the model
   * add the logic for any constraints related to the page type
   * add any fields we would like exposed to editors to the `content_panels` list
3. Make and run database migrations
4. Create a template file  following the convention expectations set by the page.

<div class="info">
<p><strong>This post is going to focus <em>only</em> on Page models.</strong> We'll start from the absolute basics and expand this to reference some more advanced features.</p>
</div>

## A simple Page model class

This really (too) simple page will allow editors to create any number of pages about different guitars. For each page there will be a single field available to editors for the guitar name, and they will be limited to providing ten characters in the name field.
```python
from django.db import models

from wagtail.core.models import Page
from wagtail.admin.edit_handlers import FieldPanel


class Guitar(Page):
    name = models.CharField(
        max_length=10,
        help_text='Just 10 characters',
        null=True
    )

    content_panels = Page.content_panels + [
        FieldPanel('name')
    ]
```

Let's look a bit more closely.

Notice that our class inherits (using [standard Python inheritance](https://docs.python.org/3/tutorial/classes.html#inheritance)) from `Page`, which is imported from `wagtail.core.models.Page`. Additionally, because `Page` itself inherits from the Django `model` **every page type is a Django model**.

<div class="info">
   <h3>What is a Django model?</h3>
   <p>Think of the model as being the <a href="https://docs.djangoproject.com/en/3.1/intro/tutorial02/#creating-models">source of truth</a> for your data. In the case of a Wagtail page it is the blueprint for your page type.</p> 
   <p>Each page type will be represented in the database as a separate table with columns to represent the model fields. Each created page will be a row in that table.</p>
   <p>It is possible to use the model to apply constraints on what editors can supply for a given field (either through logic or by specifying the field characteristics).</p>
</div>

As they are Django models, **Pages can use every field type from Django model**.

### Field classes and Field options

You can use any Django model _field class_ in a Wagtail page and pass to these classes any of the Django _field options_ (All of these are described in the [Django documentation](https://docs.djangoproject.com/en/3.1/ref/models/fields/)). For example, you could: 

* Limit a field to store only short strings by using the `CharField` (class) and passing it the `help_text` (option) so that this information is communicated via the editorial interface - **_the example above does this_**
* Set a field to store boolean values using `BooleanField` (class) and state that it should not be null with `null=False` (option) and provide a default with `default=True`

In addition to the Django field classes, Wagtail provides two of its own `RichTextField` and `StreamField` (both of which are pretty important to Wagtail but we won't get into them here)

### Panel types

To expose a field within the editorial interface you add it to the `content_panels` list. The example above does this by passing the field name to a Wagtail [panel type](https://docs.wagtail.io/en/stable/reference/pages/panels.html) called `FieldPanel()`.

<blockquote cite="https://docs.wagtail.io/en/stable/reference/pages/panels.html">
Django’s field types are automatically recognised and provided with an appropriate widget for input. Just define that field the normal Django way and pass the field name into FieldPanel when defining your panels. Wagtail will take care of the rest.
<cite>Wagtail documentation</cite>
</blockquote>

When passed a field type **`FieldPanel` will ensure an appropriate representation is provided to the editorial interface**. In my experiments I've found that it is really quite smart about this. For example, when experimenting with `BooleanField` I found that `FieldPanel` would determine whether a checkbox or select was appropriate based on whether a `null` value was permitted. 

In addition to `FieldPanel` there are several other [panel types](https://docs.wagtail.io/en/stable/reference/pages/panels.html) provided, including:

* `StreamFieldPanel` (I'll go over StreamField in a future post)
* `SnippetChooserPanel`
* `PageChooserPanel`
* `HelpPanel`
* `DocumentChooserPanel`

## To be continued...

I'm going to stop here because this is only intended to be a brisk introduction. Future posts will look in more detail at other features of the Wagtail Page model.