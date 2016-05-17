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

var playBut = document.querySelectorAll('#play');
var audio = document.getElementById('audio');
var a = document.getElementById('frontAudio');
var b = document.getElementById('back');
var frontButton = document.getElementById('playButton');
var backButton = document.getElementById('pauseButton');
var rewind = document.getElementById('rewindButton')
var elementIsClicked = false;
console.log('audio/Pineapple Rag.wav', audio.src)

frontButton.addEventListener('click', toggleFront);
backButton.addEventListener('click', toggleBack)
rewind.addEventListener('click', startOver)

// Here I am looping through all the play buttons; querySelectorAll gives you an array
for(i=0;i<playBut.length;i++){
playBut[i].addEventListener('click', clickCard);
}

function clickCard(){
	elementIsClicked = true;
}

// this is the play audio
function playButton(){
	audio.play();
	};

// this is the pause audio
function pauseButton() {
	audio.pause()
}

// this fuctions flips the image when I press play
function toggleFront(){
	if(a.style.display != 'none'){
		b.style.display = 'block';
		a.style.display = 'none'
	}
};

// this function flips the image back when I press the pause button
function toggleBack(){
	if(b.style.display != 'none'){
		a.style.display = 'block';
		b.style.display = 'none'
	}
};


// this is the rewind button; stops the music and rewinds from the beginning
    function startOver(){
    	audio.currentTime = 0;
    	audio.pause();
    }

// audio buttons part comes to an end here