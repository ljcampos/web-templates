$(window).scroll (function () {
    var sT = $(this).scrollTop();
        if (sT >= 300) {
            $('#navbar').css('background','#000');
        }else {
            $('#navbar').css('background','transparent');
        }
 });