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


function openCity(evt, cityName) {

clicksound.playclip();

var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
}
document.getElementById(cityName).style.display = "block";
evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();