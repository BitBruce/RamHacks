$(window).on('scroll', function () {
	var scrollPos = $(document).scrollTop();
   scrollPos = scrollPos * -1;
   $('.scroll').css({top: scrollPos});
}).scroll();
