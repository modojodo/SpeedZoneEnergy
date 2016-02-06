$(function () {


//  initializing jQuery backstretch
    $.backstretch(["../img/lambo.jpg", "../img/summer.jpg"], {fade: 1000});
    $.backstretch('pause');
    $('#fullpage').fullpage({
        anchors: ['home-page', 'products-page'],
        menu: '#menu',
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