//CONTACT section open/close
$(document).ready(function(){
	$('#contact .contact__open-btn').click(function(){
		$("#contact").addClass('open');
		$("#contact .chat__main-content").addClass('show');
	});
	$("#contact .chat__close-ic").click(function(){
		$("#contact .chat__main-content").removeClass('show');
		setTimeout(function(){
			$("#contact").removeClass('open');
		}, 1000);
	});
});