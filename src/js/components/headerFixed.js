let $header = $('header');

$(window).scroll(function () {
  let sc = $(window).scrollTop();
  let hh = $header.outerHeight(true);

  if (sc > hh) {
    $header.addClass("header--fixed");
  } else {
    $header.removeClass("header--fixed");
  }
});