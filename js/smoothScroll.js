//smooth scroling for the anchor links
$(document).ready(function(){
	var doc_h = $(window).height();
	$('a[href^="#"]').click(function(){
		//Сохраняем значение атрибута href в переменной:
		var target = $(this).attr('href');
		var scrollCoord = $(target).offset().top - 20*100/doc_h;
		$('html, body').animate({scrollTop: scrollCoord}, 400);
		return false;
	});
});