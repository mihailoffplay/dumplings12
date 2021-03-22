$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#upbutton').fadeIn('slow');
        } else {
            $('#upbutton').fadeOut('slow');
        }
    });
    $('#upbutton').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 700);
    });
    $("body").on('click', '[href*="#"]', function(){
        $.scrollTo($(this.hash), 700);
        console.log(this);
    });
});