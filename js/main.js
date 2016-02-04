$(function () {


//  initializing jQuery backstretch
    $.backstretch("../img/lambo.jpg");
    var windowHeight;
    var navbarHeight = 40; //This is the padding that is required in the css file
    windowHeight = $(window).height() - navbarHeight;
    $('.section').height(windowHeight);
    $(window).on('resize', function () {
        windowHeight = $(window).height() - navbarHeight;
        $('.section').height(windowHeight);
    });
    //$('.slick-center img').width(150);
    //$('#slick').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //
    //    //$('.slick-center img').animate({
    //    //    width: 150
    //    //}, 100);
    //});
    $('#slick').on('afterChange', function (event, slick, currentSlide, nextSlide) {

        //$('.slick-active img').animate({
        //    width: 100
        //}, 100);
        //$('.slick-center img').animate({
        //    width: 200
        //    }, 100);
        $('.slick-active img').removeClass('animated bounce');
        $('.slick-center img').addClass('animated bounce');
        //$('.slick-center img').addClass('animated flash');

    });
});