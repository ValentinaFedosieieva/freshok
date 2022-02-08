$(function(){
  $('.top-slider__inner').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="../images/icons/arrow-left.svg" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="../images/icons/arrow-right.svg" alt="arrow right"></button>',
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000
  });

  $('.catalog__btn').on('click', function () {
    $('.catalog__content').toggleClass('catalog__content--active');
    $('.catalog__btn').toggleClass('catalog__btn--active');
  });

  $('.user__btn--cart').on('click', function () {
    $('.cart').toggleClass('cart--active');
  });
});

