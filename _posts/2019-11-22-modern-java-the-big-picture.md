---
title: Modern Java - The Big Picture
date: 2019-10-30
author: Gwyn
layout: post
---

These are my notes from the Pluralsight course [Modern Java - The Big Picture](https://www.pluralsight.com/courses/modern-java-big-picture)

The Java Platform has three components which are bundled into the Java Development Kit (or JDK):
 
* **programming language** - the source code you write in `.java` files
    * which are then compiled into Java bytecode using javac (the Java compiler)
* **runtime** - for example, the Java Virtual Machine (JVM)
* **standard library** - for example, the Java Standard Edition (SE) APIs

There are also many third-party libraries.

## Philosophy of Java

* Portability (WORA - _Write Once Run Anywhere_)
* Optimized for readability 
    * reading code is more important than writing code. In Java there is a strong focus on having one clear way to express your intent in code, and not have a myriad of options to choose from. 
    * understandable code is more important than clever code
* Conservative approach to new features:
    * 'First do no harm'
    * Help developer productivity
    * Maintaining simplicity
    * A focus on backward compatibility with controlled deprecation
    
[Continue from Philosophy of Java: Openness]
