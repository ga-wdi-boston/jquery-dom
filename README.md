[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# jQuery DOM Manipulation

## Objectives

By the end of this lesson, students should be able to:

-   Diagram the DOM
-   Reference jQuery documentation when learning a new technique
-   After selecting a DOM node, reach another node using traversal
-   Get data from the DOM using jQuery
-   Put data into the DOM using jQuery

## The Document Object Model (DOM)

-   The DOM is a recursive tree.

The DOM is a (potential) large object that describes the structure of our
content. Since it's an object, we can use normal techniques to get and set data!
In the browser, the DOM is represented by the `document` object. JS specifies
some built-in methods that make using the DOM easier.

## jQuery

-   The "query" in jQuery comes from SQL.
-   We can retrieve and put data into the DOM using jQuery.
-   jQuery uses selectors (css selectors, remember?)

## Demo: Diagram the DOM

1.  Demo translating a wireframe into a tree diagram (should resemble the next
    sections)

## Lab: Diagram the DOM

1.  Consultant: Give wireframe
1.  Developer: Draw a tree diagram
1.  Consultant: Draw the solution
1.  Discussion and questions

## DOM Traversal

-   Deface the [Broncos](https://en.wikipedia.org/wiki/Denver_Broncos)
-   Add console snippet below to use jQuery.

  `var script = document.createElement('script');script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";document.getElementsByTagName('head')[0].appendChild(script);`

## jQuery Setters & Getters

When reading the jQuery documentation, be sure to scroll through the whole
document to ensure you're looking at the correct method signature. Most jQuery
methods change their behavior depending on the number of arguments they have
when called.

For example, have a look at [.val()](https://api.jquery.com/val/). Note in the
table of contents that there are two method signatures, `.val()` and
`.val(value)`. This is our hint that `.val()` can do two things.

Reading the documentation, we discover that `.val()` is getter on an element,
but that `.val(value)` is a setter on an element. Be sure you're using the
correct method. Reading examples is very helpful, and the jQuery examples in the
docs are fully functional!

## Lab: Register an Event Handler

Continue defacing the Broncos.  This time with an event handler.

## Lab: Research Common jQuery Functions

Here is a list of most commonly used jQuery API functions:

1.  [`find()`](http://api.jquery.com/find)
1.  [`hide()`](http://api.jquery.com/hide)
1.  [`show()`](http://api.jquery.com/show)
1.  [`html()`](http://api.jquery.com/html)
1.  [`append()`](http://api.jquery.com/append)
1.  [`prepend()`](http://api.jquery.com/prepend)
1.  [`on()`](http://api.jquery.com/on)
1.  [`off()`](http://api.jquery.com/off)
1.  [`css()`](http://api.jquery.com/css)
1.  [`attr()`](http://api.jquery.com/attr)
1.  [`val()`](http://api.jquery.com/val)
1.  [`text()`](http://api.jquery.com/text)
1.  [`each()`](http://api.jquery.com/each)


## Gotchas

-   Beware the difference between jQuery setters and getters
-   Beware the difference between a jQuery collection and a
    [jQuery](http://api.jquery.com/Types/#jQuery) object
-   Beware the difference between `.html()`, `.text()`, and `.val()`

## Additional Resources

-   [JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [jQuery API Documentation](https://api.jquery.com/)
