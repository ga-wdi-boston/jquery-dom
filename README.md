![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Introduction to jQuery

## Objectives

By the end of this lesson, students should be able to:

* Substitute jQuery methods for vanilla JS DOM manipulation methods
* Reference jQuery documentation when learning a new technique
* Cite two advantages to using jQuery over vanilla JS

## jQuery and the DOM

By now, you've learned about the DOM and seen how we can use JavaScript to interact with it - reading values from it, and writing values to it. The DOM's _**API**_ (application programming interface) give us access to a couple of different methods that allow us to select elements from the DOM.

* `document.getElementById` retrieves a single element with a matching ID.
* `document.getElementsByClassName` retrieves an array of elements that match the given class.
* `document.getElementsByTagName` retrieves an array of elements that are of the given type.

However, these options are somewhat limiting. What if we wanted to retrieve the first `<li>` on a particular list with class `specialList`? We might be able to find it by using the `children` property, but that's a little clunky. If we were using CSS, we could just write a selector like this to style that element:

```CSS
.specialList li:first-child {
  ...
}
```

Wow - short and powerful! Wouldn't it be nice if we could select elements in the same way?

Enter jQuery. jQuery is an open-source project that was released in 2006, and it's currently the most widely used JavaScript library on the web; originally, it was going to be called "JSelect", but the domain name "JSelect.com" was taken, so its creator, John Resig, decided to call it jQuery instead.

jQuery allows us to query (i.e. select elements from) the DOM using the exact same selector syntax that we've used in CSS. To select the element described above, we would write

```jQuery
jQuery(".specialList li:first-child")
```

This will return a 'jQuery Object' - think of it as an abstraction for the search results from our query. You can retrieve any of the specific results using array notation (`jQuery("...")[i]`). There are also a number of special methods on the 'jQuery Object' that you can call which will manipulate the DOM for _all elements select by the query, at once_. These methods can do things like:

* change styling
* add event listeners for specific events
* write brand new content (text _and_ HTML) into the page

Writing 'jQuery' every time we want to make a query is a little tedious, though, so the jQuery team kindly created a shorthand reference that you can use to refer to jQuery : `$`. We can rewrite our jQuery code above as follows.

```jQuery
$(".specialList li:first-child")
```

### Activity :: Trading JavaScript for jQuery

Now let's use jQuery to refactor some JS code! You may either follow along as or you may focus on taking notes. The app will be available in its jQuery implementation on another branch.

<!-- Our general approach will be:

1. `npm install` to install dependencies.
1. `grunt browserify` to put all of our JS in one file (this will be important later).
1. Change our application code to use jQuery. When we don't know how to do something, we'll first Google for a hint and the check the jQuery documentation.
1. `grunt browserify` and refresh the page each time we want see our changes.
1. Commit our changes when we've finished. -->

#### Notes

When reading the jQuery documentation, be sure to scroll through the whole document to ensure you're looking at the correct method signature. Most jQuery methods change their behavior depending on the number of arguments they have when called.

For example, have a look at [.val()](https://api.jquery.com/val/). Note in the table of contents that there are two method signatures, `.val()` and `.val(value)`. This is our hint that `.val()` can do two things.

Reading the documentation, we discover that `.val()` is getter on an element, but that `.val(value)` is a setter on an element. Be sure you're using the correct method. Reading examples is very helpful, and the jQuery examples in the docs are fully functional!

Here is a list of many commonly used jQuery API functions:

1. **[find()](http://api.jquery.com/find)**
1. **[hide()](http://api.jquery.com/hide)**
1. **[show()](http://api.jquery.com/show)**
1. **[html()](http://api.jquery.com/html)**
1. **[append()](http://api.jquery.com/append)**
1. **[prepend()](http://api.jquery.com/prepend)**
1. **[on()](http://api.jquery.com/on)**
1. **[off()](http://api.jquery.com/off)**
1. **[css()](http://api.jquery.com/css)**
1. **[attr()](http://api.jquery.com/attr)**
1. **[val()](http://api.jquery.com/val)**
1. **[text()](http://api.jquery.com/text)**
1. **[each()](http://api.jquery.com/each)**

We'll count off and take a few minutes to research these methods. The goal is to explain what each method does in your own words. We'll share our thoughts and compile a reference list.

## Additional Resources

* [JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [jQuery API Documentation](https://api.jquery.com/)
