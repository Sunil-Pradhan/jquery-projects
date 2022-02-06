$(document).ready(function () {
  $('.lightbox').click(function () {
    $('.lightbox-overlay').animate({ opacity: '.70' }, 500);
    $('.box').animate({ opacity: '1.0' }, 500);
    $('.lightbox-overlay, .box').css('display', 'block');
  });

  $('.thumb').click(function () {
    var largeImage = $(this).attr('src');
    $('.largeImage').attr({ src: largeImage });
  });

  $('.close').click(function () {
    closeBox();
  });

  $('.lightbox-overlay').click(function () {
    closeBox();
  });
});

function closeBox() {
  $('.lightbox-overlay, .box').animate({ opacity: '0' }, 500, function () {
    $('.lightbox-overlay, .box').css('display', 'none');
  });
}
