var html5_audiotypes = {
  "mp3": "audio/mpeg",
  "mp4": "audio/mp4",
  "ogg": "audio/ogg",
  "wav": "audio/wav"
}

function createsoundbite(sound) {
  var html5audio = document.createElement('audio');
  if (html5audio.canPlayType) {
      for (var i = 0; i < arguments.length; i++) {
          var sourceel = document.createElement('source');
          sourceel.setAttribute('src', arguments[i]);
          if (arguments[i].match(/\.(\w+)$/i))
              sourceel.setAttribute('type', html5_audiotypes[RegExp.$1]);
          html5audio.appendChild(sourceel);
      }
      html5audio.load();
      html5audio.playclip = function () {
          html5audio.pause();
          html5audio.currentTime = 0;
          html5audio.play();
      }
      return html5audio;
  } else {
      return { playclip: function () { throw new Error("Your browser doesn't support HTML5 audio unfortunately") } }
  }
}

var mouseoversound = createsoundbite("audio/animal-jam-select.mp3");
var clicksound = createsoundbite("audio/animal-jam-select2.mp3");

function myFunction() {
  clicksound.playclip();

  var idArray = [];
  idArray[1] = "i met the mayor of my city at a pride event";
  idArray[2] = "my cat's name is kitty";
  idArray[3] = "i have every achievement in muse dash";
  idArray[4] = "i have exactly 3 degrees of separation from the pope (southside strong)";
  idArray[5] = "i have been playing animal jam since i was 9 and i still play it regularly shit its rare item monday hang on";
  idArray[6] = "my favorite bugs are cicadas and i love covering my arms in them during summer";
  idArray[7] = "my favorte kirby game is kirby's epic yarn it's the first game i ever beat on the wii (the second was new super mario bros 2)";
  idArray[8] = "my favorite block in minecraft is moss with coarse dirt at a close second";
  idArray[9] = "my favorite game ever of all time is doom 2";
  idArray[10] = "i have emetophobia (very bad) + a mild agoraphobia";
  idArray[11] = "i once released a new tumblr theme every month for like 2 years (i have 39 total)";

  var randomParagraph = Math.floor(Math.random() * 11);
  document.getElementById("result").innerHTML = idArray[randomParagraph + 1];
}
