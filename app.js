'use strict';

var init = function init() {
  var yourName = prompt('What is your name?');

  document.getElementById('name').textContent = yourName;

  var thingList = document.getElementById('fav-list');

  var button = document.getElementById('new-thing-button');

  var buttonClick = function buttonClick(event) {
    event.preventDefault();
    MyApp.addToList(thingList);
  };

  button.addEventListener('click', buttonClick);
};

window.addEventListener('load', init);

// We can define things outside of the window.onload which are evaluated
// // only when called.
var MyApp = {};

MyApp.addToList = function(list) {
  var newLi = document.createElement('li');
  var newItemText = document.getElementById('new-thing');
  newLi.textContent = newItemText.value;
  newItemText.value = '';
  if (newLi.textContent !== '') {
    list.appendChild(newLi);
  }
};
