/* script_desktop.js */
/* 
	=================================================
	YouTube 
	=================================================
*/
// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player) after the API code downloads.
var player = null;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '100%',
		width: '100%',
		videoId: 'dhH2vzw1HT0',
		playerVars: {
			'autoplay' : 0,
			'controls' : 2,
			'rel' : 0,
			'vq' : 'large',
			'showinfo' : 0,
			'iv_load_policy' : 3
      	},
		events: {
    		'onReady': onPlayerReady
        	// 'onStateChange': onPlayerStateChange
      	}
    });
}
// The API will call this function when the video player is ready.
function onPlayerReady(event) {
	// console.log('YT Ready');
  }

$(document).ready(function() {
	$content = $('#content');
	$spacer = $('#spacer');
	var window_height = $(window).height();
	var win_diff = (window_height - 1000);
	var new_spacer_height = ((win_diff * 4) + 1000);
	var win_diff = (new_spacer_height - 1000);

	var initial_cont_height = window_height;
	$content.height(window_height);
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
	        }, 1200);
	        return false;
	      }
	    }
	    $('#overlay').animate({
	    	"opacity" : "0.8"
	    }, 400);
	  });
	});

	$window = $(window);
	$overlay = $('#overlay');
	$play = $('#play-video');
	var eTop = $content.offset().top;

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

			var stopScroll = (eTop - $window.scrollTop());
			// var newCoords = (305 + (stopScroll / 10));
			// console.log("stop scroll: " + stopScroll);


			if (!(Modernizr.touch)) {
				// console.log(Modernizr.touch);
				if ((stopScroll <= 20) && (stopScroll > -300)) {
					player.playVideo();
				} else {
					if (player !== null ) {
						player.pauseVideo();
					}
				}
			} else {

			}
			// Background opacity/animations etc
			// if (!(jQuery.browser.mobile)) {
			// 	playOnScroll();
			// } else {
			// 	// do nothing
			// }
			// if (!(Modernizr.touch)) {
			// 	playOnScroll();
			// 	alert("no touch events allowed!");
			// }
			// else {
			// 	// do nothing
			// }
			// console.log(stopScroll);

			// if (stopScroll < 0) {
			// 	$content.css({
			// 		"position" : "relative",
			// 		"top" : "0px"
			// 	});
			// 	$overlay.stop().css({"opacity" : "1"});
			// }
			// if (stopScroll >= 0){
			// 	$content.css({
			// 		"position" : "relative",
			// 		"top" : "0px"
			// 	});
			// }

			// $content.css({
			// 	"height" : window_height
			// });
			// $('#content_overlay').css({
			// 	"height" : window_height
			// });

			// move the lockup UP as we scroll down
			var headerPos = (stopScroll / 10);
			if (stopScroll <= 0) {
				var headerPos = 0;
			}
			$('header').css({
				"top" : headerPos
			});

			var opac = (stopScroll / 1000);
			// steps for doing the #watch
			var step1 = (1000 - stopScroll);
			var step2 = (step1 / 10);
			var step3 = (300 - step2);

			$('#watch').css({
				"top" : step3,
				"opacity" : opac
			});

			// steps for doing the reverse opacity
			var rev1 = (1000 - stopScroll);
			var rev2 = (rev1 * 0.001);
			var rev3 = (1 - rev2);

			$('#white-on-black').css({
				"opacity" : rev3
			});
			$('#date-black').css({
				"opacity" : rev3
			});
			$('#sub_on_black').css({
				"opacity" : rev3
			});
			$('#black-on-white').css({
				"opacity" : rev2
			});
			$('#date-white').css({
				"opacity" : rev2
			});
			$('#sub_on_white').css({
				"opacity" : rev2
			});
			$overlay.css({
				"opacity" : rev2
			});

			if(stopScroll <= 800) {
				$('#content_overlay').fadeIn(300);
			} else {
				$('#content_overlay').fadeOut(300);
			}

			if (stopScroll > 800) {
				$('#socials').fadeIn(300);
				$('#socials').css({
					"position" : "fixed",
					"bottom" : "0px",
					"padding" : "13px 0 8px"
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
					"padding-top" : "20px"
				});
			}
		}); // window scroll Ends
	});	// each data-type background
});

	$(window).resize( function() {
		var new_window_height = $(window).height();
		$('#content').height(new_window_height);
	});

// document.createElement("article");
// document.createElement("section");