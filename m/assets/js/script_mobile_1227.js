$(document).ready(function() {
	$content = $('#content');
	$spacer = $('#spacer');
	var window_height = $(window).height();
	$content.height(window_height);
	$window = $(window);
	$overlay = $('#overlay');
	$play = $('#play-video');
	var eTop = $content.offset().top;

	/* 
		=================================================
		Scroll-to
		=================================================
	*/
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 800);
	        return false;
	      }
	    }
	  });
	});

			$(window).scroll(function() {

			var windowScroll = $window.scrollTop();
			var stopScroll = (eTop - $window.scrollTop());
		
			var opac = (stopScroll / 1000);

			if (stopScroll <= 30) {
				$('#content_overlay').fadeIn(300);
			} else {
				$('#content_overlay').fadeOut(300);
			}

			console.log(stopScroll);

			if (stopScroll > 800) {
				$('#socials').fadeIn(300);
				$('#socials').css({
					"position" : "fixed",
					"bottom" : "0px",
					"padding" : "10px 0 8px",
					"background-color" : "rgba(0, 0, 0, 0.6)"
				});
			}
			if ((stopScroll <= 800) && (stopScroll > 400)) {
				$('#socials').fadeOut(300);
			}
			if (stopScroll < 400) {
				$('#socials').fadeIn(300);
				$('#socials').css({
					"position" : "relative",
					"bottom" : "0",
					"padding" : "10px 0 8px 0",
					"background-color" : "rgba(0, 0, 0, 0)"
				});
			}
		}); // $window.scroll Ends
}); // document ready 
	$(window).resize( function() {
		var new_window_height = $(window).height();
		$('#content').height(new_window_height);
	});