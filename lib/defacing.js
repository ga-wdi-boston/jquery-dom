/* globals $ */
'use strict';

//some ideas for defacing a wikipedia page
//IDs are circa Oct 2016, they may change
$('#firstHeading').hide(500);

$('#firstHeading').show(500);

$('#firstHeading').prepend('HEY THERE ');

let title = $('#firstHeading');

title.append('you suck');
title.append('!');
title.append('!');
title.append('!');

title.on('click', () => {
  title.append('!');
});

$('#content').css('background-color', 'cornflowerblue');

$('th').text('Orange is ugly');

//type something in the search box
$('#searchInput').val();
$('#searchInput').val('WAT');
