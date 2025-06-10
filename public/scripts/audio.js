const playlist = [
	{
		src: "/audio/retro tv.mp3",
		title: "Retro TV - Animal Crossing"
	},
	{
		src: "/audio/The DOG Island OST - 2. Puroro Town (HQ).mp3",
		title: "The DOG Island OST - Puroro Town"
	},
	{
		src: "/audio/Animal Crossing- Wild World - Title Screen .mp3",
		title: "Animal Crossing: Wild World - Title Screen"
	},
	{
		src: "audio/Launcher - Wii Sports + Wii Sports Resort.mp3",
		title: "Launcher - Wii Sports + Wii Sports Resort"
	}
];

let currentTrack = 0;

const audio = document.getElementById("myAudio");
const icon = document.getElementById("icon");
const nowPlaying = document.getElementById("nowPlaying");

function toggleAudio() {
	if (audio.paused) {
		audio.play();
		icon.textContent = "pause";
	} else {
		audio.pause();
		icon.textContent = "play_arrow";
	}
}

function nextTrack() {
	currentTrack = (currentTrack + 1) % playlist.length;
	audio.src = playlist[currentTrack].src;
	nowPlaying.textContent = "Now Playing: " + playlist[currentTrack].title;
	audio.play();
	icon.textContent = "pause";
}