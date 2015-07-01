'use strict';

var $ = require('jquery');

$(document).ready(function() {
  var yourName = prompt('What is your name?');

  $('#name').html(yourName);

  var $thingList = $('#fav-list');

  var $button = $('#new-thing-button');
  // button.onclick = function(event) {
  $button.on('click', function(event) {
    event.preventDefault();
    MyApp.addToList($thingList);
  });
});

// We can define things outside of the window.onload which are evaluated
// // only when called.
var MyApp = {};

MyApp.addToList = function(list) {
  var $newLi = $('<li>');
  var $newItemText = $('#new-thing');
  $newLi.html($newItemText.val());
  $newItemText.val('');
  if ($newLi.html() !== '') {
    list.append($newLi);
  }
};
