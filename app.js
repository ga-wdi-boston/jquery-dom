'use strict';

var init = function init() {
  var yourName = prompt('What is your name?');

  document.getElementById('name').textContent = yourName;

  var thingList = document.getElementById('fav-list');
  var button = document.getElementById('new-thing-button');
  var checkbox = document.getElementById('click-handler-box');

  var buttonClickHandler = function buttonClick(event) {
    event.preventDefault();
    MyApp.addToList(thingList);
  };

  var liClickHandler = function liClick(event) {
    var text = event.target.textContent;
    alert(text);
  };

  var checkboxChangeHandler = function checkboxChange(event) {
    var listElements = thingList.children;
    var numListElements = thingList.childElementCount;

    if(event.target.checked) {
      for(var index=0; index < numListElements; index++) {
        listElements[index].addEventListener('click', liClickHandler);
      }
    } else {
      for(var index=0; index < numListElements; index++) {
        listElements[index].removeEventListener('click', liClickHandler);
      }
    }
  };

  button.addEventListener('click', buttonClickHandler);
  checkbox.addEventListener('change', checkboxChangeHandler);
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
