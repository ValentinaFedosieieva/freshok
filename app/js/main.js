$(function(){
  $('.catalog__btn').on('click', function () {
    $('.catalog__content').toggleClass('catalog__content--active');
    $('.catalog__btn').toggleClass('catalog__btn--active');
  });
});

