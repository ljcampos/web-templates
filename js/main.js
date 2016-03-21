$(document).ready (function () {
    $(window).scroll (function () {
        var sT = $(this).scrollTop();
            if (sT >= 700) {
                $('#navbar').css('background','#000');
            }else {
                $('#navbar').css('background','transparent');
            }
    });
});