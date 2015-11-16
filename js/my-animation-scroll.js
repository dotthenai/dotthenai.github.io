if (screen.width >= 768) {
$(document).ready(function () {

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 1300) {

            $('#food').addClass('fadeInLeft');
            $('#food').removeClass('hide-me');
        }
        
        if(verticalScroll >=2300) {
            
            $('#food').removeClass('fadeInLeft');
            $('#food').addClass('hide-me');
        
        }
        
        if(verticalScroll <=1300) {
            
            $('#food').removeClass('fadeInLeft');
            $('#food').addClass('hide-me');
        
        }

    });
});
}





$('.nav a').on('click', function(){
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
});