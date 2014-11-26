$(document).ready(function () {
  $('#textButton').click(function () {
    $('#yoda').append('<p>"Size matters not. Look at me. Judge me by my size, do you? Hmm? Hmm. \nAnd well you should not. For my ally is the Force, and a powerful ally it is."</p>');
  });
  $('#imageButton').click(function () {
    $('<img src="images/yoda.jpg"/>').insertBefore('#yoda');
  });
});