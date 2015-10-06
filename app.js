'use strict';

var init = function init() {
  var yourName = prompt('What is your name?');

  document.getElementById('name').textContent = yourName;

  var thingList = document.getElementById('fav-list');
  var newThingButton = document.getElementById('new-thing-button');
  var checkbox = document.getElementById('click-handler-box');
  var closeListButton = document.getElementById('close-list-button');

  var newThingButtonClickHandler = function newThingButtonClick(event) {
    event.preventDefault();
    MyApp.addToList(thingList);
  };

  var closeListButtonClickHandler = function closeListButtonClick(event) {
    newThingButton.disabled = !newThingButton.disabled;
    console.log(newThingButton.disabled);
    event.target.textContent = event.target.textContent === "No more things" ?
      "More things" :
      "No more things";
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

  newThingButton.addEventListener('click', newThingButtonClickHandler);
  closeListButton.addEventListener('click', closeListButtonClickHandler);
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
