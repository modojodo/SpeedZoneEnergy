$(function () {
    $("#slick").slick({
        centerMode: true,
        centerPadding: '280px',
        slidesToShow: 3,
        speed: 100,
        draggable: false
    });
    $(".owl-carousel").owlCarousel({
        autoPlay: 2500,
        stopOnHover: true

    });

//  initializing jQuery backstretch
    $.backstretch(["./img/lambo.jpg", "./img/bike.jpg", "./img/bmw.jpg", "./img/steering.jpg"], {fade: 1000});
    $.backstretch('pause');
    $('#fullpage').fullpage({
        anchors: ['home-page', 'products-page'],
        menu: '#menu',
        scrollOverflow: true,
        onLeave: function (index, nextIndex, direction) {

            // Make navbar active after leaving 1st section

            if (index == 1 && nextIndex != 1) {
                $(".navbar").toggleClass("navbar-initial");
            }

            if (index != 1 && nextIndex == 1) {
                $(".navbar").toggleClass("navbar-initial");
            }

            // Change Backstretch image on fullPage scroll

            $.backstretch("show", nextIndex - 1)
        }
    });

    //    Configuring the spinner

    var opts = {
        lines: 9 // The number of lines to draw
        , length: 12 // The length of each line
        , width: 3 // The line thickness
        , radius: 5 // The radius of the inner circle
        , scale: 1.25 // Scales overall size of the spinner
        , corners: 1 // Corner roundness (0..1)
        , color: '#000' // #rgb or #rrggbb or array of colors
        , opacity: 0.3 // Opacity of the lines
        , rotate: 14 // The rotation offset
        , direction: 1 // 1: clockwise, -1: counterclockwise
        , speed: 0.9 // Rounds per second
        , trail: 22 // Afterglow percentage
        , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
        , zIndex: 2e9 // The z-index (defaults to 2000000000)
        , className: 'spinner' // The CSS class to assign to the spinner
        , top: '50%' // Top position relative to parent
        , left: '50%' // Left position relative to parent
        , shadow: false // Whether to render a shadow
        , hwaccel: false // Whether to use hardware acceleration
        , position: 'absolute' // Element positioning
    }
    var target = document.getElementById('preloader');
    var spinner = new Spinner(opts).spin(target);

    $(window).on('load', function () {
        setTimeout(function () {
            spinner.stop();
            $('#preloader').fadeOut();
        }, 3000);
    });


});

