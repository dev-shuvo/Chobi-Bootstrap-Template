// teams section owl carousel
$(document).ready(function () {
  $("#teamSection").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      991: {
        items: 4,
      },
    },
  });
});
