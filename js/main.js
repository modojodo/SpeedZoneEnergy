$(function () {


//  initializing jQuery backstretch
    $.backstretch(["../img/lambo.jpg", "../img/summer.jpg"], {fade: 1000});
    $.backstretch('pause');

    var windowHeight;
    var navbarHeight = 40; //This is the padding that is required in the css file
    windowHeight = $(window).height() - navbarHeight;
    $('.section').height(windowHeight);
    $(window).on('resize', function () {
        windowHeight = $(window).height() - navbarHeight;
        $('.section').height(windowHeight);
    });
    $('#product').waypoint(function (direction) {
        if (direction === 'down') {
            $.backstretch('next');
        } else {
            $.backstretch('prev');
        }

    }, {
        offset: '25%'
    })


    //$('.slick-center img').width(180);
    //$('#slick').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //console.log("BeforeChange");
    //console.log("Currrent Slide:  " + currentSlide);
    //console.log("Next Slide:  " + nextSlide);
    //
    //console.log($('.slick').children().eq(currentSlide).html());
    //console.log("Currrent Slide:  " + $("[data-slick-index='" + currentSlide + "']").html());
    //console.log("Next Slide:  " + $("[data-slick-index='" + (nextSlide) + "']").html());
    //console.log("Previous Slide:  " + $("[data-slick-index='" + (currentSlide - 1) + "']").html());
    //$("[data-slick-index='" + currentSlide + "']").find('img').width(100);
    //$("[data-slick-index='" + nextSlide + "']").find('img').width(180);
    //});

    //$('#slick').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    //    console.log("AfterChange");
    //    console.log("Currrent Slide:  " + currentSlide);
    //    console.log("Next Slide:  " + nextSlide);
    //});
});