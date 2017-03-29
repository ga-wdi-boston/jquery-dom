/* globals $ */
'use strict'

// some ideas for defacing a wikipedia page
// IDs are circa Oct 2016, they may change
$('#firstHeading').hide()

$('#firstHeading').show()

$('#firstHeading').prepend('The one and only (THANKFULLY) ')

const $title = $('#firstHeading')

// pick one of thesenest to append to our $title variable. Or make your own!
// What happ
$title.append(' writes songs about margaritas and cheeseburger based locales')
$title.append(' couldn\'t write a smooth song if his life depended on it.')
$title.replace('MORE LIKE CHEESERBURGER IN HELL, RIGHT?')
$title.append(' has a song called "math suks" ...what anti-intellctual garbage, right?')

$title.on('click', () => {
  $title.append('is a disgrace to the art of music')
})

$('#content').css('background-color', 'cornflowerblue')

$('th').text('LOL Cheeseburgers and margaritas whoopity doo!')

// type something in the search box
// Let's find better music
$('#searchInput').val()
$('#searchInput').val('Jay Graydon.')

// for defacing a Football Team's page
$('#firstHeading').on('click', function () {
  console.log('Yes, the Steelers are stinky poo poo faces')
})

const steelerLog = function () {
  console.log('and I hate them.')
}

$('#firstHeading').on('click', steelerLog)
