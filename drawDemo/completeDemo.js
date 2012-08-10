<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Drawing on web with Canvas and Jquery</title>
	<link rel="shortcut icon" href="favicon.ico">  
    <link rel="icon" type="image/ico" href="favicon.ico">
    <meta name="author" content="Motyar D">
    <meta name="keywords" content="JQuery, HTML5,Draw on web, Drawing on web, Motyar">
    <meta name="description" content="How to freehand draw on web with Canvas and JQuery">
	<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Droid+Sans:regular,bold|Inconsolata|Droid+Serif:regular,bold">

	<!--[if IE]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

	<link rel="stylesheet" href="style.css" type="text/css" media="screen" />

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" type="text/javascript" ></script>
   <script type="text/javascript" src="app.js"></script>
   <script type="text/javascript">
		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-9361092-10']);
		  _gaq.push(['_trackPageview']);
		  (function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();
		</script>
</head>
<body>

<br style="clear:both;" />
<h1>Creating your Drawing App is easier than you think!</h1>
<h2>Make it live today, without learning all that Programming languages.</h2>

<form name="_xclick" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
<input type="hidden" name="cmd" value="_xclick">
<input type="hidden" name="business" value="dharmmotyar@gmail.com">
<input type="hidden" name="image_url" value="">
<input type="hidden" name="cpp_header_image" value="">
<input type="hidden" name="currency_code" value="USD">
<input type="hidden" name="item_name" value="Drawing with jQuery on Canvas Script">
<input type="hidden" name="amount" value="29.00">
</form>
<hr />

<h3>Thanks very much - great code :-) - <i>Robert McCabe</i></h3>
<hr />
<h3> I wanted to take your example and integrate it into node JS for real time collaboration with out spending a lot of time figuring out the drawing example!
this saved me time thanks! - <i>Zachary Scally</i></h3>
<hr />

 <h1>Try it</h1>

<!--
<a class="downloadn" href="#" onclick="window.open('http://motyar.info/idraw', 'newwindow', 'width=340, height=430'); return false;" style="text-decoration:none;float:left;">Try it on iPhone</a> -->

<div id="themain">

<canvas id="can" width="450" height="400" ></canvas>
<div id="clr">
<div style="background-color:black;"></div>
<div style="background-color:red;"></div>
<div style="background-color:green;"></div>
<div style="background-color:orange;"></div>
<div style="background-color:#FFFF00;"></div>
<div style="background-color:#F43059;"></div>
<div style="background-color:#ff00ff;"></div>
<div style="background-color:#9ecc3b;"></div>
<div style="background-color:#fbd;"></div>
<div style="background-color:#fff460;"></div>
<div style="background-color:#F43059;"></div>
<div style="background-color:#82B82C;"></div>
<div style="background-color:#0099FF;"></div>
<div style="background-color:#ff00ff;"></div>
<div style="background-color:rgb(128,0,255);"></div>

<div style="background-color:rgb(255,128,0);"></div>
<div style="background-color:rgb(153,254,0);"></div>
<div style="background-color:rgb(18,0,255);"></div>
<div style="background-color:rgb(255,28,0);"></div>
<div style="background-color:rgb(13,54,0);"></div>

</div><br /><br />
Pen size: <input type="range" min="0" max="50" value="5" id="bsz"/><br />
<br />
Pen color: <input type="color" placeholder="#FF00FF"  value="#FF00FF" id="bcl"/><br />
<div id="btns">
<a href="#themain" id="undo" class="minimal" >Undo</a>
<a id="save" href="#themain" class="minimal">Save</a>

<a id="eraser" href="#themain" class="minimal">Eraser</a>
<a href="#themain" id="clear" class="minimal" >Clear</a>
</div>

<span id="result" ><br /></span> 
<form action="" method="post" id="frm"/>
<input type="hidden" name="data" id="data" />
</form>
<h2>On iPhone?</h2>
<img src="http://chart.apis.google.com/chart?cht=qr&chs=100x100&chl=http%3A//motyar.info/idraw&chld=H|0" /><br />
scan or open <a href="http://motyar.info/idraw" onclick="window.open('http://motyar.info/idraw', 'newwindow', 'width=320, height=422'); return false;">http://motyar.info/idraw</a>

<br /><br style="clear:both;"/>

<!-- AddThis Button BEGIN -->
<div class="addthis_toolbox addthis_default_style " style="margin:0 auto;width:400px;">
<a class="addthis_button_facebook_like" fb:like:layout="button_count"></a>
<a class="addthis_button_tweet"></a>
<a class="addthis_button_google_plusone" g:plusone:size="medium"></a>
<a class="addthis_counter addthis_pill_style"></a>
</div>
<script class="jsbin" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script type="text/javascript" src="http://s7.addthis.com/js/250/addthis_widget.js#pubid=xa-4ece1a1424fed0b1"></script>
<!-- AddThis Button END -->
</div>
<br style="clear:both;" />
<!--<h1>The best code base to create your first canvas drawing application.</h1>
<h2>If you are a programmer, this code can help you to get started with <i>freehand draw mechanism</i>, and Discover how to use HTML5 canvas element just like a artist's canvas.</h2>
<br style="clear:both;" /><br style="clear:both;" />
-->

<!-- <a class="download" onclick="document._xclick.submit();" >Buy It for just $29</a> -->

<br style="clear:both;" />
<h1>The best code base to create your first canvas drawing application.</h1>
<h2>If you are a programmer, this code can help you to get started with <i>freehand draw mechanism</i>, and Discover how to use HTML5 canvas element just like a artist's canvas.</h2>
<br style="clear:both;" />


<!--
<h1>It works or it's free.</h1>
<h2>Not sure this system is for you? Try it and if you're not happy, I'll give you your money back and you keep everything.</h2>
-->
<!--
<a class="download" onclick="document._xclick.submit();" >Buy It for just $29</a>
-->
<h1>Get Mobile + Web version for just $39</h1>
<br style="clear:both;"/>

<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_xclick">
<input type="hidden" name="business" value="7SKZFRUCEFQJA">
<input type="hidden" name="lc" value="IN">
<input type="hidden" name="item_name" value="Drawing with jQuery on Canvas Script">
<input type="hidden" name="amount" value="39.00">
<input type="hidden" name="currency_code" value="USD">
<input type="hidden" name="button_subtype" value="services">
<input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">
<input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal � The safer, easier way to pay online.">
<!-- <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1"> -->
</form>
<h3>Note: After payment successful, you will get draw.zip and idraw.zip (web + mobile version) from <a href="mailto:dharmmotyar@gmail.com">dharmmotyar@gmail.com</a> within 24 hours. If any queries please contact this mail id.</h3>

<h3><!--Money back guaranteed, no questions. --> Instant delivery & awesomeness.</h3>

<div id="footer">
by <a href="http://twitter.com/motyar" >@motyar</a>
</div>
</body>
</html>