	//CHATBAR open-close--------
	//--open
$(document).ready(function(){
  $("#chat .chat-sec__open-btn").click(function(){
  	$("#chat.chat-sec").toggleClass('open');
  	$("#chat .chat__main-content").toggleClass('show');
  });
  //--close
  $("#chat .chat__close-ic").click(function(){
  	$("#chat.chat-sec").toggleClass('open');
  	$("#chat .chat__main-content").toggleClass('show');
  	setTimeout(function(){$("#chat .chat-sec__icons-bar").fadeIn()}, 1000);
  });
});