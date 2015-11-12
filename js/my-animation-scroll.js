$(document).ready(function () {

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 1500) {

            $('#food').addClass('fadeInLeft');
            $('#food').removeClass('hide-me');
        }

    });
});