//redirects to the project
//for project section on mobile phones
$(document).ready(function(){
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
		var clicked = false;
		$(".project").click(function(){
			if(clicked == false){
				clicked = true;
				$(this).addClass('active');
				var link = $(this).find("a");
				var href = link.attr('href');
				//setting fixed width to the link container
				//to avoid sharp change of the link width
				var linkContainer = $(this).find('div').filter('.circled__side-elem');
				var linkWidth = linkContainer.css('width');
				linkContainer.css({'width': linkWidth, 'justify-content': 'center'});
				//
				//changing link text to 'redirecting' with an animation
				link.css('position', 'relative');
				var projHeight = $(this).css('height'); //getting project block height to smoother animation coordinates
				setTimeout(function(){
					link.animate({top:projHeight, opacity:'0'}, 'slow')
					.animate({top:'-'+projHeight}, 'fast')
					.animate({top:'0', opacity:'1'}, 'slow');
				}, 1000);
				setTimeout(function(){
					link.text('Redirecting...');
				}, 2000);
				//
				//redirecting
				setTimeout(function(){
					window.location.href = href;
				}, 4500);
			}
		});

	}
});