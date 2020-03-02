$('.is-floating-label input, .is-floating-label textarea').on('focus blur', function (e) {
  $(this).parents('.is-floating-label').toggleClass('is-focused', (e.type === 'focus' || this.value.length > 0));
}).trigger('blur');

$('#sq-crousal4').carousel({
  interval: 10000000000 * 10
});

$('.carousel').carousel({
  interval: 10000000000 * 10
});

$('.section5 .carousel').on('slid.bs.carousel', function() {
  $(".section5 .desfrute2 li").removeClass("active");
  indicators = $(".carousel-indicators li.active").data("slide-to");
  a = $(".desfrute2").find("[data-slide-to='" + indicators + "']").addClass("active");
  console.log(indicators);

})

$(".center").slick({
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 1
});

$(".slider1").slick({
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 1
});