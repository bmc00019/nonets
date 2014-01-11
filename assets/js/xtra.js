		// if ( windowScroll <= 20 ) {
			// 	$('#overlay').stop().animate({
			// 		opacity: "0"
			// 	}, 200);
			// 	$('#play-video').stop().show();
			// }
			// if ( (windowScroll >= 100) && (windowScroll < 350) ) {
			// 	$('#overlay').stop().animate({
			// 		opacity: "0.3"
			// 	}, 200);
			// 	$('#play-video').stop().fadeOut(200);
			// }
			// if ( windowScroll >= 350 ) {
			// 	$('#overlay').stop().animate({
			// 		opacity: "0.6"
			// 	}, 200);
			// }
			// if ( windowScroll >= 600 ) {
			// 	$('#overlay').stop().animate({
			// 		opacity: "0.8"
			// 	}, 200);
			// }

$(document).ready(function(){
	// Cache the Window object
	$window = $(window);

	$(function(){
		var eTop = $('#content').offset().top;
		// console.log(eTop - $(window).scrollTop());

		$window.scroll(function() {
			var stopScroll = (eTop - $window.scrollTop());
			var newCoords = (305 + (stopScroll / 10));
			console.log("stop scroll: " + stopScroll);

			if (stopScroll <= 200) {

				$('#content').css({
					"position" : "fixed",
					"top" : "200px"
				});
			} else {
				$('#content').css({
					"position" : "relative",
					"top" : "0px"
				});
			}

			// console.log( "New Coords: " + newCoords);

		});
	});

	$('div[data-type="background"]').each(function(){
	var $bgobj = $(this); // assigning the object
		$(window).scroll(function() {

			var windowScroll = $window.scrollTop();
			// Scroll the background at var speed
			// the yPos is a negative value because we're scrolling it UP!								
			var yPos = -(windowScroll / $bgobj.data('speed')); 
			// Put together our final background position
			var coords = '50% '+ yPos + 'px';
			// Move the background
			$bgobj.css({ backgroundPosition: coords });	
		}); // window scroll Ends
	});	
}); 