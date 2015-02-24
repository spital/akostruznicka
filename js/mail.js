// JavaScript Popup 
$(document).ready(function() {
  $('#main-container').hide();
  $('#main-container').css("left","-300px");
  $('.input-box_').hide();
  $('#bg_window_2').hide();
  $('.social-network li a').click(function() {
    /*$('#main-container').fadeToggle(200);*/
	$('#main-container').css({"opacity" : "0.9"});
	$('#main-container').show();
	$('#main-container').animate({"left" : "50%", "duration" : "2000", "easing" : "linear",
			complete: function() {
				$('#main-container').hide();
				$('#main-container').css({"opacity":"0"});
				}
			 });
	$('#bg_window_2').fadeToggle(400);
    //return false;
  });
   $('#bg_window_2').click(function() {
    /*$('#main-container').hide(200);*/
	$('#main-container').animate({"left" : "-300px", "duration" : "2000", "easing" : "linear",
			complete: function() {
				$('#main-container').hide();
				$('#main-container').css({"opacity":"0"});
				}
			 });
	$('#bg_window_2').hide(600).delay(100);
    //return false;
  });
  $('#close_mail').click(function() {
    /*$('#main-container').fadeToggle(200);
	$('#bg_window_2').fadeToggle(200);*/
	$('#main-container').animate({"left" : "-300px", "duration" : "2000", "easing" : "linear",
			complete: function() {
				$('#main-container').hide();
				$('#main-container').css({"opacity":"0"});
				}
			 });
	$('#bg_window_2').fadeToggle(600).delay(100);
    //return false;
  });
  $(function() {
    $( "#main-container" ).draggable();
  });

});
