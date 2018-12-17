// navbar
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
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

var audio4 = document.getElementById('audio4');
var front4 = document.getElementById('frontAudio4');
var back4 = document.getElementById('back4');
var frontButton4 = document.getElementById('playButton4');
var backButton4 = document.getElementById('pauseButton4');
var rewind4 = document.getElementById('rewindButton4')

var audio5 = document.getElementById('audio5');
var front5 = document.getElementById('frontAudio5');
var back5 = document.getElementById('back5');
var frontButton5 = document.getElementById('playButton5');
var backButton5 = document.getElementById('pauseButton5');
var rewind5 = document.getElementById('rewindButton5');

var audio6 = document.getElementById('audio6');
var front6 = document.getElementById('frontAudio6');
var back6 = document.getElementById('back6');
var frontButton6 = document.getElementById('playButton6');
var backButton6 = document.getElementById('pauseButton6');
var rewind6 = document.getElementById('rewindButton6');

var audio7 = document.getElementById('audio7');
var front7 = document.getElementById('frontAudio7');
var back7 = document.getElementById('back7');
var frontButton7 = document.getElementById('playButton7');
var backButton7 = document.getElementById('pauseButton7');
var rewind7 = document.getElementById('rewindButton7');

var audio8 = document.getElementById('audio8');
var front8 = document.getElementById('frontAudio8');
var back8 = document.getElementById('back8');
var frontButton8 = document.getElementById('playButton8');
var backButton8 = document.getElementById('pauseButton8');
var rewind8 = document.getElementById('rewindButton8');

var audio9 = document.getElementById('audio9');
var front9 = document.getElementById('frontAudio9');
var back9 = document.getElementById('back9');
var frontButton9 = document.getElementById('playButton9');
var backButton9 = document.getElementById('pauseButton9');
var rewind9 = document.getElementById('rewindButton9');

var audio10 = document.getElementById('audio10');
var front10 = document.getElementById('frontAudio10');
var back10 = document.getElementById('back10');
var frontButton10 = document.getElementById('playButton10');
var backButton10 = document.getElementById('pauseButton10');
var rewind10 = document.getElementById('rewindButton10');

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
    	audio.currentTime = 0;
    	audio.pause();
    }
}

audioMelange(audio1,front1, back1, frontButton1, backButton1, rewindButton1 );
audioMelange(audio2,front2, back2, frontButton2, backButton2, rewindButton2 );
audioMelange(audio3,front3, back3, frontButton3, backButton3, rewindButton3 );
audioMelange(audio4,front4, back4, frontButton4, backButton4, rewindButton4 );
audioMelange(audio5,front5, back5, frontButton5, backButton5, rewindButton5 );
audioMelange(audio6,front6, back6, frontButton6, backButton6, rewindButton6 );
audioMelange(audio7,front7, back7, frontButton7, backButton7, rewindButton7 );
audioMelange(audio8,front8, back8, frontButton8, backButton8, rewindButton8 );
audioMelange(audio9,front9, back9, frontButton9, backButton9, rewindButton9 );
audioMelange(audio10,front10, back10, frontButton10, backButton10, rewindButton10 );

//end of play buttons here

// here is the slideshow from the left-photos id

$(document).ready(function(){

$("#left-photos > div:gt(0)").hide();
	setInterval(function() { 
	  $('#left-photos > div:first')
	    .fadeOut(1000)
	    .next()
	    .fadeIn(1000)
	    .end()
	    .appendTo('#left-photos');
	},  3000);
})




