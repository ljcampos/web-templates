$(document).ready(function () {
	$(document).on("scroll", onScroll);

	function onScroll(event){
		var scrollPosition = $(document).scrollTop();
		$('nav a').each(function () {
			var currentLink = $(this);
			//var refElement = $(currentLink.attr("href"));
			var top = $(this).offset().top - $('nav').outerHeight();
			var bottom = top + $(this).outerHeight();
			if (scrollPosition >= top && scrollPosition <= bottom) {
			}
			/*if (refElement.position.top <= scrollPosition && refElement.position.top + refElement.height() > scrollPosition) {
				$('nav ul li a').removeClass("active");
				currentLink.addClass("active");
			}
			else{
				currentLink.removeClass("active");
			}*/
		});
	}
});

//var sections = $('#home', '#about', '#service');
/*var sections = $('#home');
var nav = $('nav');
var nav_height = nav.outerHeight();
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});*/