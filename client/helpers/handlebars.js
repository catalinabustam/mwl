Handlebars.registerHelper("prettifyDate", function(timestamp) {
     return timestamp.format('{yyyy}/{MM}/{dd} - {12hr}:{mm} {tt}');
});

Handlebars.registerHelper('pluralize', function(n, thing) {
  // fairly stupid pluralizer
  if (n === 1) {
    return '1 ' + thing;
  } else {
    return n + ' ' + thing + 's';
  }
});


