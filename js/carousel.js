$(document).ready(function(){
    $('.slider').slick({
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3500,
        prevArrow: '<button type="button" class="slick-prev material-icons white"></button>',
        nextArrow: '<button type="button" class="slick-next material-icons white"></button>',
        mobileFirst: true,
        fade: true,
        cssEase: 'linear'
    });
  });