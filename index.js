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
var audio1 = document.getElementById('audio1');
var front = document.getElementById('frontAudio');
var back = document.getElementById('back');

var frontButton1 = document.getElementById('playButton1');
var backButton1 = document.getElementById('pauseButton1');
var rewind1 = document.getElementById('rewindButton1')



frontButton1.addEventListener('click', toggleFront);
backButton1.addEventListener('click', toggleBack);
rewind1.addEventListener('click', startOver);


// this is the play audio
function playButton(){
	audio1.play();
	
	};

// this is the pause audio
function pauseButton() {
	audio1.pause();
	
}

// this fuctions flips the image when I press play
function toggleFront(){
	if(front.style.display != 'none'){
		back.style.display = 'block';
		front.style.display = 'none'
	}
};

// this function flips the image back when I press the pause button
function toggleBack(){
	if(back.style.display != 'none'){
		front.style.display = 'block';
		back.style.display = 'none'
	}
};


// this is the rewind button; stops the music and rewinds from the beginning
    function startOver(){
    	audio1.currentTime = 0;
    	audio1.pause();
    }


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