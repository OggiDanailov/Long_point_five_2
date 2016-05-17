// jquery for the long point five signature in the begiining

$( document ).ready(function(){ 
	var text = function (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { text(target, message, index, interval); }, interval);
  }
}

	$(function () {
  		text("#bandName", "Long Point Five", 0, 250);   
	});

});

//play buttons here





//end of play buttons here

// here is the slideshow from the left-photos id

$(document).ready(function(){

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);


})