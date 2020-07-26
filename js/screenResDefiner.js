//changing chat icon for the square screens and portrait mode
$(document).ready(function(){
	var doc_w = $(window).width();
	var prop = doc_w / doc_h;
	var squareScrProp = 4 / 3;
	var rectScrProp = 1.66 / 1;
	var ultraRect = 21 / 9;
	if(squareScrProp <= prop && prop <= rectScrProp){
		$("#chat").addClass('mobile');
	}
	else if(doc_h > doc_w){
		$("#chat").addClass('mobile');
	}
	else if(prop > ultraRect){
		$("#chat").addClass('mobile');
	}
});