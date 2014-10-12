document.addEventListener("DOMContentLoaded",function(){initializeMediaPlayer();},false);
var mediaPlayer;
var progressBar;
var ischanging = false;

function label(text){
	var label = document.querySelector(".label");
	label.className= "label show";
	label.innerHTML = text;
	setTimeout(function(){
		label.className = "label hide";
	},2000);
}

function initializeMediaPlayer(){
	mediaPlayer = document.getElementById('media-video');
	mediaPlayer.addEventListener('timeupdate', updateProgressBar, false);
	mediaPlayer.controls = false;
	progressBar = document.getElementById('progress-bar');
	progressBar.addEventListener("input", function() {
		var ctime = Math.floor((mediaPlayer.duration * progressBar.value)/100);
		mediaPlayer.currentTime = ctime;
		ischanging = true;
	}, false);
	progressBar.addEventListener("change", function() {
		ischanging = false;
	}, false);
}
function togglePlayPause(){
	var btn = document.getElementById('play-pause-button');
	if (mediaPlayer.paused || mediaPlayer.ended) {
		btn.title = 'pause';
		btn.innerHTML = 'pause';
		btn.className = 'pause';
		mediaPlayer.play();
		label("Playing");
	}
	else {
		btn.title = 'play';
		btn.innerHTML = 'play';
		btn.className = 'play';
		mediaPlayer.pause();
		label("Paused");
	}
}
function stopPlayer() {
	var btn = document.getElementById('play-pause-button');
	btn.title = 'play';
	btn.innerHTML = 'play';
	btn.className = 'play';
	mediaPlayer.pause();
	mediaPlayer.currentTime = 0;
	var progressBar = document.getElementById('progress-bar');
	progressBar.value = 0;
	label("Stoped");
}
function changeVolume(direction) {
	if (direction === '+') mediaPlayer.volume += mediaPlayer.volume == 1 ? 0 : 0.1;
	else mediaPlayer.volume -= (mediaPlayer.volume == 0 ? 0 : 0.1);
	mediaPlayer.volume = parseFloat(mediaPlayer.volume).toFixed(1);
	label("Volume " + (mediaPlayer.volume * 100) + "%");
}
function changeButtonType(btn, value) {
	btn.title = value;
	btn.innerHTML = value;
	btn.className = value;
}
function toggleMute() {
	var btn = document.getElementById('mute-button');
	if (mediaPlayer.muted) {
		changeButtonType(btn, 'mute');
		mediaPlayer.muted = false;
		label("Volume " + (mediaPlayer.volume * 100) + "%");
	}
	else {
		changeButtonType(btn, 'unmute');
		mediaPlayer.muted = true;
		label("Volume 0%");
	}

}
function updateProgressBar() {
	if(!ischanging){
		var percentage = Math.floor((100 / mediaPlayer.duration) *
		mediaPlayer.currentTime);
		progressBar.value = percentage;
		progressBar.innerHTML = percentage + '% played';
	}
}
function showVolumeCtrls(){
	var volumeCtrls = document.querySelector(".volume-controls");
	if(volumeCtrls.className == "volume-controls hide"){
		volumeCtrls.className = "volume-controls show";
	}
	else{
		volumeCtrls.className = "volume-controls hide";
	}
}