![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Javascript: Introduction to jQuery

## Objectives

By the end of this lesson, students should be able to:

* Substitute jQuery methods for vanilla JS DOM manipulation methods
* Reference jQuery documentation when learning a new technique
* Cite two advantages to using jQuery over vanilla JS

## Instructions

1. Fork and clone this repo.
1. Change into the project directory.
1. Follow your instructor's instructions.

## Exercise

The code provided in this repo is a simple list-keeping app. We worked through this code yesterday, reading and annotating to get a better idea of how the app worked.

You may either follow along as I refactor this code to use jQuery, or you may focus on taking notes. The app will be available in its jQuery implementation on another branch.

Our general approach will be:

1. `npm install` to install dependencies.
1. `grunt browserify` to put all of our JS in one file (this will be important later).
1. Change our application code to use jQuery. When we don't know how to do something, we'll first Google for a hint and the check the jQuery documentation.
1. `grunt browserify` and refresh the page each time we want see our changes.
1. Commit our changes when we've finished.

## Notes

When reading the jQuery documentation, be sure to scroll through the whole document to ensure you're looking at the correct method signature. Most jQuery methods change their behavior depending on the number of arguments they have when called.

For example, have a look at [.val()](https://api.jquery.com/val/). Note in the table of contents that there are two method signatures, `.val()` and `.val(value)`. This is our hint that `.val()` can do two things.

Reading the documentation, we discover that `.val()` is getter on an element, but that `.val(value)` is a setter on an element. Be sure you're using the correct method. Reading examples is very helpful, and the jQuery examples in the docs are fully functional!

## Common jQuery Functions

**[find()](http://api.jquery.com/find)**
: Selects elements based on the provided selector string

**[hide()](http://api.jquery.com/hide)**
: Hides an element if it was visible

**[show()](http://api.jquery.com/show)**
: Shows an element if it was hidden

**[html()](http://api.jquery.com/html)**
: Gets or sets an inner HTML of an element

**[append()](http://api.jquery.com/append)**
: Injects an element into the DOM after the selected element

**[prepend()](http://api.jquery.com/prepend)**
: Injects an element into the DOM before the selected element

**[on()](http://api.jquery.com/on)**
: Attaches an event listener to an element

**[off()](http://api.jquery.com/off)**
: Detaches an event listener from an element

**[css()](http://api.jquery.com/css)**
: Gets or sets the style attribute value of an element

**[attr()](http://api.jquery.com/attr)**
: Gets or sets any attribute of an element

**[val()](http://api.jquery.com/val)**
: Gets or sets the value attribute of an element

**[text()](http://api.jquery.com/text)**
: Gets the combined text of an element and its children

**[each()](http://api.jquery.com/each)**
: Iterates over a set of matched elements

## Additional Resources

* [JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [jQuery API Documentation](https://api.jquery.com/)
