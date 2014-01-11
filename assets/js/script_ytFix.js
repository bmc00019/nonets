/* 
	script.js 
*/
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
		videoId: 'uMtz1xobvn4',
		playerVars: {'autoplay' : 0, 'controls' : 2, 'rel' : 0, 'vq' : 'large',	'showinfo' : 0,	'iv_load_policy' : 3 },
      	events: { 'onReady': onPlayerReady }
    });
}


function onPlayerReady() {

	$window = $(window);
	$window.scrollTop(0);
	
	$content = $('#content');

	$spacer = $('#spacer');
	
	$login_click = $('#login_click'); $reg = $('#reg'); $log = $('#log')

	var window_height = $(window).height();
	var initial_cont_height = window_height;

	// scroll to top of page
		// $('html').animate({scrollTop:0}, 1);
 //    $('body').animate({scrollTop:0}, 1);

	$content.height(window_height);

	// show username/password if someone clicks 'login' on the Register form
	$login_click.click( function(e) {
		e.preventDefault();
		$reg.hide();
		$log.show();
	});

	
	$overlay = $('#overlay');
	$play = $('#play-video');
	var eTop = $content.offset().top;

	$('div[data-type="background"]').each(function(){
		var $bgobj = $(this); // assigning the object
			$(window).scroll(function() {

				$content.css({ "display" : "block"});

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

			// console.log(stopScroll);

			var headerPos = (stopScroll *3);
			var headerPos = (headerPos / 100);

			// console.log("Header Pos: " + headerPos);

			$('header').css({
				"top" : headerPos + "px"
			});

			$('#reg_unit').css({
				"top" : 190 + headerPos
			});
			
			var opac = (stopScroll / 1000);

			$('#reg_unit').css({
				"opacity" : opac
			});

			$('#lockup_bg').css({
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

	// close the dialogue 
	$('.close-x').click( function() {
		var close_this = $(this).parent();
		$(close_this).hide();
	});

	// $('#email_submit').click( function(e) {
	// 	e.preventDefault();
	// 	$reg_alert = $('#reg_alert');
	// 	$reg_alert.show();
	// });

	// $('#login_submit').click( function(e) {
	// 	e.preventDefault();
	// 	$login_alert = $('#login_alert');
	// 	$login_alert.show();
	// });


/*  ============= Scroll-to ============= */
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
} // end our onPlayerReady function

	$(window).resize( function() {
		var new_window_height = $(window).height();
		$('#content').height(new_window_height);
	});

$('.terms_cond a').click( function(e) {
	e.preventDefault();
});

// TWITTER SHARE POPUP FUNCTION
function terms(url, width, height) {
	var leftPosition, topPosition;
	//Allow for borders.
	leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
	//Allow for title and status bars.
	topPosition = (window.screen.height / 2) - ((height / 2) + 50);
	//Open the window.
	window.open("terms.html", "Window2", "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=1,location=no,directories=no");
}
