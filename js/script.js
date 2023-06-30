$(function() {
   $('.slider-blog__item').slick({
      dots: true,
      prevArrow: false,
      nextArrow: false
   })

   $(document).ready(function(){
      $(".menu a, .go-top").on("click", function (e) {
         e.preventDefault();
   
         const id = $(this).attr('href'),
            top = $(id).offset().top;
         
         $('body,html').animate({scrollTop: top}, 1500);
      });
   });

   $('.menu__btn, .menu a').on('click', function(){
      $('.menu__list').toggleClass('menu__list--active');
   });

   const mixer = mixitup('.gallery__content');
});