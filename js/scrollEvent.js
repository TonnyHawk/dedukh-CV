window.addEventListener('scroll', function() {
	//--CHAT
	var scrHeight = $(window).height();
	var chat = document.getElementById("chat").getBoundingClientRect();
	var chatTouchPoint = scrHeight - $("#chat").height();

	if($(document).scrollTop() > 0){
		if($('#chat').hasClass('aside') == false){
			$('#chat').addClass('aside');
		}
	}
	else if($(document).scrollTop() == 0){
		$('#chat').removeClass('aside');
	}

	//--hide chat bar when 'lets-talk section' appears
	var letsTalk = document.getElementById("contact").getBoundingClientRect();
	if(letsTalk.top < scrHeight){
		if($('#chat').hasClass('hide')==false){
			$('#chat').addClass('hide');
		}
	}
	else{
		if($('#chat').hasClass('hide')){
			$('#chat').removeClass('hide');
		}
	}
});

