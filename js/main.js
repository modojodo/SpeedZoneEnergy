$(function () {
    $("#slick").slick({
        centerMode: true,
        centerPadding: '280px',
        slidesToShow: 3,
        speed: 100,
        draggable: false
//        responsive: [
//            {
//                breakpoint: 768,
//                settings: {
//                    arrows: false,
//                    centerMode: true,
//                    centerPadding: '60px',
//                    slidesToShow: 2
//                }
//            },
//            {
//                breakpoint: 480,
//                settings: {
//                    arrows: true,
//                    centerMode: true,
//                    centerPadding: '60px',
//                    slidesToShow: 1
//                }
//            }
//        ]
    });


//  initializing jQuery backstretch
    $.backstretch(["../img/lambo.jpg", "../img/summer.jpg", "../img/bmw.jpg", "../img/steering.jpg"], {fade: 1000});
    $.backstretch('pause');
    $('#fullpage').fullpage({
        anchors: ['home-page', 'products-page'],
        menu: '#menu',
        scrollOverflow: true,
        onLeave: function (index, nextIndex, direction) {

            //// Make navbar active after leaving 1st section
            //
            //if(index == 1 && nextIndex != 1){
            //    $(".navbar").toggleClass("navbar__initial");
            //}
            //
            //if(index != 1 && nextIndex == 1){
            //    $(".navbar").toggleClass("navbar__initial");
            //}

            // Change Backstretch image on fullPage scroll

            $.backstretch("show", nextIndex - 1)
        }
    });
});