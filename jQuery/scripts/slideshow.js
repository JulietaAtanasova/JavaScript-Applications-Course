function getSlide(page) {
  switch (page) {
  case 1: $('#wrapper').css('background-image', 'url("images/labShake_960x300.jpg")');
    $('#firstSlide').show();
    $('#secondSlide').hide();
    $('#thirdSlide').hide();
    $('#logIn').hide();
    break;
  case 2: $('#wrapper').css('background-image', 'url("images/Got-Dog-Trouble-Slide.jpg"');
    $('#firstSlide').hide();
    $('#secondSlide').show();
    $('#thirdSlide').hide();
    $('#logIn').hide();
    break;
  case 3: $('#wrapper').css('background-image', 'url("images/dog-training-chicago-il.jpg"');
    $('#firstSlide').hide();
    $('#secondSlide').hide();
    $('#thirdSlide').show();
    $('#logIn').hide();
    break;
  case 4: $('#wrapper').css('background-image', 'url("images/dog-trainers-Calgary.jpg"');
    $('#firstSlide').hide();
    $('#secondSlide').hide();
    $('#thirdSlide').hide();
    $('#logIn').show();
    break;
  }
}

$(document).ready(function () {
  var page = 1;
  getSlide(page);
  setInterval(function () {
    if (page === 4) {
      page = 1;
    } else {
      page++;
    }
    getSlide(page);
  }, 3000);
  $('#nextButton').click(function () {
    if (page === 4) {
      page = 1;
    } else {
      page++;
    }
    getSlide(page);
  });
  $('#backButton').click(function () {
    if (page === 1) {
      page = 4;
    } else {
      page--;
    }
    getSlide(page);
  });
});