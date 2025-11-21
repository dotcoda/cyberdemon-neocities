const playlist = [
	{
		src: "https://cyberdemon.nekoweb.org/audio/retro tv.mp3",
		title: "Retro TV - Animal Crossing"
	},
	{
		src: "https://cyberdemon.nekoweb.org/audio/The DOG Island OST - 2. Puroro Town (HQ).mp3",
		title: "The DOG Island OST - Puroro Town"
	},
	{
		src: "https://cyberdemon.nekoweb.org/audio/Animal Crossing- Wild World - Title Screen .mp3",
		title: "Animal Crossing: Wild World - Title Screen"
	},
	{
		src: "https://cyberdemon.nekoweb.org/audio/Launcher - Wii Sports + Wii Sports Resort.mp3",
		title: "Launcher - Wii Sports + Wii Sports Resort"
	},
	{
		src: "/audio/Shopping Theme - Nintendogs.mp3",
		title: "Shopping Theme - Nintendogs"
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