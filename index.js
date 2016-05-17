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
var front1 = document.getElementById('frontAudio1');
var back1 = document.getElementById('back1');
var frontButton1 = document.getElementById('playButton1');
var backButton1 = document.getElementById('pauseButton1');
var rewind1 = document.getElementById('rewindButton1')

var audio2 = document.getElementById('audio2');
var front2 = document.getElementById('frontAudio2');
var back2 = document.getElementById('back2');
var frontButton2 = document.getElementById('playButton2');
var backButton2 = document.getElementById('pauseButton2');
var rewind2 = document.getElementById('rewindButton2')

var audio3 = document.getElementById('audio3');
var front3 = document.getElementById('frontAudio3');
var back3 = document.getElementById('back3');
var frontButton3 = document.getElementById('playButton3');
var backButton3 = document.getElementById('pauseButton3');
var rewind3 = document.getElementById('rewindButton3')

function audioMelange(audio, front, back, frontButton, backButton, rewindButton){
	frontButton.addEventListener('click', toggleFront);
	backButton.addEventListener('click', toggleBack);
	rewindButton.addEventListener('click', startOver);
	
	
	function toggleFront(){
		audio.play();
		if(front.style.display != 'none'){
		back.style.display = 'block';
		front.style.display = 'none'
		}
	}
	function toggleBack(){
		audio.pause();
	if(back.style.display != 'none'){
		front.style.display = 'block';
		back.style.display = 'none'
		}
	}
	function startOver(){
    	audio1.currentTime = 0;
    	audio1.pause();
    }
}

audioMelange(audio1,front1, back1, frontButton1, backButton1, rewindButton1 );
audioMelange(audio2,front2, back2, frontButton2, backButton2, rewindButton2 );
audioMelange(audio3,front3, back3, frontButton3, backButton3, rewindButton3 );

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