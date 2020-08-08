//smooth scroling for the anchor links
$(document).ready(function(){
	var doc_h = $(window).height();
	$("#navbar").find('a[href^="#"]').click(function(){
		//Сохраняем значение атрибута href в переменной:
		var target = $(this).attr('href');
		var scrollCoord = $(target).offset().top - (20*doc_h/100);
		$('html, body').animate({scrollTop: scrollCoord}, 400);

		//close 'nav' menu when clicking on one of 'nav' links
  		$('.navbar').toggleClass('open');
  		$('.navbar__link').removeClass('open-anim');
  		$('.navbar__link').addClass('close-anim');
  		navbMenuState = 'close';
  		return false;
	});
});