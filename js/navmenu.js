//NAVMENU open/close--------
$(document).ready(function(){
	var navbMenuState = 'close';
  $(".navbar__btns").click(function(){
  	if(navbMenuState == 'close'){
  		$('.navbar').toggleClass('open');
  		$('.navbar__link').removeClass('close-anim');
  		$('.navbar__link').addClass('open-anim');
  		navbMenuState = 'open';
  	}
  	else{
  		$('.navbar').toggleClass('open');
  		$('.navbar__link').removeClass('open-anim');
  		$('.navbar__link').addClass('close-anim');
  		navbMenuState = 'close';
  	}
  });
});