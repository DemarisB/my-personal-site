$(document).ready(function() {

    /* Mobile Nav*/

    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200)
        if (icon.hasClass('ion-ios-menu')) {
            icon.addClass('ion-md-close');
            icon.removeClass('ion-ios-menu');
        } else {
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-md-close');
        }

    });
    
});