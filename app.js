// Strict mode makes it harder to make certain mistakes in JS
'use strict';

// onload is an example of an event handler. We're telling the browser to run
// the function assigned on the next line only *after* it has finished
// building the DOM
window.onload = function() {
  // Get input from the user.
  var yourName = prompt('What is your name?');

  // Grab the '#name' element from the DOM. Set it's innerHTML to the input
  // we previously got from the user and stored in yourName
  document.getElementById('name').innerHTML = yourName;

  // Grab the favorites list from the DOM, and save it into a variable for
  // later use. We want to do this so that we don't have to query the DOM
  // everytime we want use that element. Querying the DOM takes time. Once
  // we have the element we want, we can store it in a variable just like
  // any other object.
  var thingList = document.getElementById('fav-list');

  // Grab the button and store it.
  var button = document.getElementById('new-thing-button');

  // onclick is another event handler. We're registering a function that
  // *only* fires when the button we found on the previous line is clicked.
  // This particular function is attached to this particular button; no
  // other buttons have this behavior.
  button.onclick = function(event) {
    // When the browser fires an event, it passes the Event object to the
    // callback function as the first argument. This is just another object
    // defined by the browser, so we can call methods on it. For all the
    // methods defined on event objects, see:
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/Event
    //
    // For all the possible events the browser can fire, see:
    //
    // https://developer.mozilla.org/en-US/docs/Web/Events
    //
    // Here, we send the `preventDefault` message to the event to stop the
    // browser from continuing with the default action for that particular
    // event. In this case, the event was a button press. What would happen
    // if we didn't have `preventDefault`? Comment it out and use the app
    // to find out.
    event.preventDefault();

    // Here we're sending a method to an object. Specifically, we're
    // telling MyApp to add something the list it knows about.
    // We haven't defined MyApp yet, but this code hasn't been executed
    // until *after* the DOM is loaded. That means the rest of this file
    // will be read before this line is actually executed. Furthermore,
    // this line won't actually execute until the button is pressed.
    MyApp.addToList(thingList);
  };
};

// We can define things outside of the window.onload which are evaluated
// // only when called.
var MyApp = {};

// Here, we add a method to the MyApp object. Recall that methods are just
// functions that are stored in properties. The method is called `addToList`.
MyApp.addToList = function(list) {
  // Now we want to start creating a new DOM element. We've seen how to
  // query to get data out of the DOM, now we're going to insert a new node
  // (a list item element) into the DOM.
  var newLi = document.createElement('li');

  // Here we retrieve the element that holds our input (the form's input
  // element) so we can get its value on the next line.
  var newItemText = document.getElementById('new-thing');

  // This is the input in our form field. We set the new list element's
  // innerHTML to hold the text we've put in the form field.
  newLi.innerHTML = newItemText.value;

  // We have to reset the form field, otherwise the text will hang around
  // after this function is fired. This function is fired from the button
  // event handler, defined above. Try commenting this line out and playing
  // with the app to see what happens.
  newItemText.value = '';

  // Here we're simply performing some validation. We don't want to be able
  // to add blank items to the list, so we're only actually going to create
  // a new list item inside the list if the new list item isn't blank. Try
  // commenting out this code. Can you add a blank list item to the list?
  if (newLi.innerHTML !== '') {
    list.appendChild(newLi);
  }
};
