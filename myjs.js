var paused = false,
    to_speak;
if ('speechSynthesis' in window) {
    // content to speak
    to_speak = new SpeechSynthesisUtterance(
        document.querySelector(".pages").textContent
    );
    to_speak.rate = 0.9; //-10 to 10
    to_speak.lang = 'en-US';
    to_speak.pitch = 1.2; //0 to 2

    speechSynthesis.getVoices().forEach(function (voice) {
        console.log(voice.name, voice.default ? voice.default : '');
    });

    to_speak.voice = speechSynthesis.getVoices().filter(function (voice) {
        return voice.name == 'Alex';
    })[0];

    to_speak.onpause = function () {
        paused = true;
    };
    document.querySelector("#page1").addEventListener("click", play)

    function play() {
        console.log("read");
        if (paused) {
            paused = false;
            window.speechSynthesis.resume();
        } else {
            window.speechSynthesis.speak(to_speak);
        }
    }

    function pause() {
        window.speechSynthesis.pause();
    }
    document.querySelector("#pause").addEventListener("click", pause);
    document.querySelector("#play").addEventListener("click", play);
} else {

    // when browser does not support
    document.querySelector("#specialh2").innerText = 'Unfortunately your browser doesn’t support this feature.';
}


var $pause_before = document.querySelector("h2");
// synthetic pauses
Array.prototype.forEach.call($pause_before, function ($el) {
    $el.innerHTML = ' , ' + $el.innerHTML;
});