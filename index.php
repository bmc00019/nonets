<?php 

	header("Cache-Control: max-age: 3600, must-revalidate");

?>
<!doctype html>
<html class="no-js" lang="en">
<head>
<meta charset="utf-8">
<title>NO NETS</title>
<link rel="shortcut icon" href="assets/images/" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width,initial-scale=1">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript" src="assets/js/mobile_redirect.js"></script>
<script type="text/javascript" src="assets/js/modernizr.js"></script>
<link rel="stylesheet" href="assets/css/main.css">

<meta name="description" content="" />
<meta name="keywords" content="" />

<meta property="og:title" content=""/>
<meta property="og:url" content="" />
<meta property="og:image" content="" />
<meta property="og:site_name" content="" />
<meta property="og:description" content="">
<meta name="thumbnail" content="" />
<meta property="og:type" content="website" />
<meta property="og:video" content="" />
<meta property="og:video:secure_url" content="" />
<meta property="og:video:height" content="" />
<meta property="og:video:width" content="" />

<meta name="twitter:title" content=""/>
<meta name="twitter:description" content="" />
<meta name="twitter:image" content="" />
<meta name="twitter:site" content="@whatever" />
<meta name="twitter:card" content="player" />
<meta name="twitter:player" content="https://www.youtube.com/idhere" />
<meta name="twitter:player:height" content="236" />
<meta name="twitter:player:width" content="420" />

<meta itemprop="name" content="">
<meta itemprop="description" content="">
<meta itemprop="image" content="">

</head>

<body>
<div id="overlay"></div>
<header>
	<div id="lockup">
		<div id="lockup-bg"></div>
		<h1>
			<!-- <img src="assets/images/no_nets_text.png" alt="NO NETS"> -->
			No Nets

		</h1>
		<h2>
			Affable &amp; Ready for Small Talk
			
		</h2>
		<div class="listen-buy">
			<span class="copy">Listen / buy the record:</span> 

			<span class="icon"><a href="" target="_blank"><img src="assets/images/no_nets_spotify.png"></a></span>
			<span class="icon" id="rdio"><a href="" target="_blank"><img src="assets/images/no_nets_rdio.png"></a></span>
			<span class="icon"><a href="" target="_blank"><img src="assets/images/no_nets_itunes.png"></a></span>
			<span class="icon"><a href="" target="_blank"><img src="assets/images/no_nets_bandcamp.png"></a></span>

			<!-- image links here -->
		</div>	
	</div>
</header>
	<div id="watch" >
		<span id="play-video">
			<a href="#content">
				<img id="play-icon" src="assets/images/no_nets_play.png" alt="Play">
				Watch the <strong>California Weather</strong> video
			</a>
		</span>
	</div>
<!-- <div id="main_background"> -->
			<div id="spacer" data-speed="16" data-type="background">
			</div> <!-- spacer -->
			<div id="content">
				<div id="content_overlay"></div>
				<div id="video_container_outer">
					<div id="video_container">
						<div id="player"></div>
					</div>
				</div>
				<div id="socials">
					contact or something...
					<!-- <ul>
						<li>
							<div class="fb-like" data-width="60px" data-href="https://www.facebook.com/vicenews" data-layout="button_count" data-colorscheme="dark" data-action="like" data-show-faces="false" data-share="false" ></div>
						</li>
						<li>
							<a href="https://twitter.com/vicenews" class="twitter-follow-button" data-show-count="false" data-show-screen-name="false" data-lang="en">Follow</a>
						</li>
						<li>						
							<div class="g-ytsubscribe" data-channelid="UCZaT_X_mc0BI-djXOlfhqWQ" data-layout="default" data-count="hidden"></div>
</li>
						<li>
							<div class="g-follow" data-annotation="none" data-height="20" data-href="https://plus.google.com/u/1/b/106872472930730227853" data-rel="publisher"></div>

						</li>
					</ul> -->
				</div>
			</div> <!-- content -->
<!-- </div> --> <!-- main_background -->

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="//www.google.com/jsapi" type="text/javascript"></script>
<script type="text/javascript" src="assets/js/script_ytFix.js"></script>
<!-- analytics -->
 <script>
 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

 ga('create', 'UA-44315757-3', 'vice.com');
 ga('send', 'pageview');

</script>

<!-- SOCIALS -->
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>

	  <script src="https://apis.google.com/js/platform.js"></script>
	  <div id="fb-root"></div>
	  <script>(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
	  fjs.parentNode.insertBefore(js, fjs);
	  }(document, 'script', 'facebook-jssdk'));</script>

	<script type="text/javascript">
	  (function() {
	    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
	    po.src = 'https://apis.google.com/js/platform.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
	  })();
	</script>
</body>

</html>
