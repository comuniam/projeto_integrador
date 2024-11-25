// Change navbar background on scroll
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $("nav").addClass("scrolled");
  } else {
    $("nav").removeClass("scrolled");
  }
});
