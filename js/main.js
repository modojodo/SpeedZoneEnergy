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


});