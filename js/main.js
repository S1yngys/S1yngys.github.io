$(function () {
    $('.photo__slider').slick({
   
        prevArrow:"<button type='button' class='slick-prev'><img src='images/arrow-l.svg' alt=''></button>",
        nextArrow:"<button type='button' class='slick-next'><img src='images/arrow-r.svg' alt=''></button>",
    });
    $('.menu__btn').on('click',function(){
        $('.menu__list').slideToggle();
    })
});