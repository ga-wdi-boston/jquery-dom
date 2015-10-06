![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)

# JavaScript Document Object Model Manipulation

## Objectives

By the end of this lesson, students should be able to:

- Recognize the Document Object Model (DOM) as a data structure
- Compare and contrast the DOM with arrays and maps
- Put data into the DOM using JS
- Get data from the DOM using JS
- Find solutions to common DOM tasks using MDN and Google

## Instructions

1. [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone) this repo.
1. Change into the project directory.
1. Follow your instructor's instructions.

## Review: Using Data Types

One student will volunteer to summarize with notes on the whiteboard. The class will participate by instructing the instructor on the code to write in the REPL.

1. Demonstrate how to access data stored in an array.
1. Demonstrate two ways to change data inside an array.
1. Demonstrate how to access data stored in an object (hash).
1. Demonstrate two ways to change data inside and object (hash).

```javascript
myArray = [ "red", "orange", "yellow", "green", "blue", "indigo", "violet" ];

myObject = {
  movie: "Milk",
  release: 2008,
  url: "http://www.imdb.com/title/tt1013753/"
};
```

## The Document Object Model (DOM)

Before we dive too deep into the DOM, we need to understand first how browsers work. Watch this short video on [browser rendering](https://www.youtube.com/watch?v=n1cKlKM3jYI). Don't worry too much about taking notes, we want a high-level understanding of what the browser does for us.

So, the DOM is a (potential) large object that describes the structure of our content. Since it's an object, we can use normal techniques to get and set data! In the browser, the DOM is represented by the `document` object. JS specifies some built-in methods that make using the DOM easier. Take a minute to review the [summary of the DOM at MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document). Pay particular attention to the following methods:

- `Document.getElementById(String id)`
- `Document.querySelector(String selector)`
- `Document.querySelectorAll(String selector)`

When reading these methods, try to get a sense of what they're trying to accomplish. We aren't going to ask you to memorize documentation. Don't worry about the details, since we're going to observe some examples.

Each of these methods returns an element from the DOM. What can we do with an [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)? Let's write a few suggestions down on the board.

## Exercise

We've provided some code for a simple list-keeping app. Play around with the app by opening `index.html` in your browser.

Next, work with a partner to read the application's JS code. Annotate the code with comments to explain what (nearly) every line does. If you don't know, Google it!

After you've had time for self-discovery, we'll go through the code together share our annotations.

## Lab

Use some of the new tools you've learned to change all the headlines at [TMZ](http://www.tmz.com)

[License](LICENSE)
------------------

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.