// var audio = document.getElementById('audio');
// var button = document.getElementById('playpausebtn');

// button.addEventListener("click", playpause)

// function playpause(){
// 	if(audio.paused){
// 		audio.play();
// 		button.style.background = 'url(../images/pause-button.png)'
// 	}
// 	else {
// 		audio.pause()
// 		button.style.background = 'url(../images/play-button.jpg)'
// 	}
// }



// This are the audio buttons


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



// frontButton1.addEventListener('click', toggleFront);
// backButton1.addEventListener('click', toggleBack);
// rewind1.addEventListener('click', startOver);


// this is the play audio
// function playButton(){
// 	audio1.play();
// 	};

// this is the pause audio
// function pauseButton() {
// 	audio1.pause();	
// }

// this fuctions flips the image when I press play
// function toggleFront(){
// 	if(front.style.display != 'none'){
// 		back.style.display = 'block';
// 		front.style.display = 'none'
// 	}
// };

// this function flips the image back when I press the pause button
// function toggleBack(){
// 	if(back.style.display != 'none'){
// 		front.style.display = 'block';
// 		back.style.display = 'none'
// 	}
// };


// this is the rewind button; stops the music and rewinds from the beginning
    // function startOver(){
    // 	audio1.currentTime = 0;
    // 	audio1.pause();
    // }

// audio buttons part comes to an end here