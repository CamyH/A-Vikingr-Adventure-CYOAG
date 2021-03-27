/* Help Resources Used
https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API
https://www.zapsplat.com/sound-effect-category/swords/page/6/
*/

// legacy browser support
const AudioContext = window.AudioContext || window.webKitAudioContext;

const audioContext = new AudioContext();

// Get audio element
const audioElement = new Audio("../Audio/sword_sound_1.mp3");

// Pass into audio context
const track = audioContext.createMediaElementSource(audioElement);

track.connect(audioContext.destination);

audioContext.resume();

// select our play button
const playButton = document.querySelector('button');

playButton.addEventListener('click', function () {

    // check if context is in suspended state (autoplay policy)
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    // play or pause track depending on state
    if (this.dataset.playing === 'false') {
        audioElement.play();
        this.dataset.playing = 'true';
    } else if (this.dataset.playing === 'true') {
        audioElement.pause();
        this.dataset.playing = 'false';
    }

}, false);

audioElement.addEventListener('ended', () => {
    playButton.dataset.playing = 'false';
}, false);

/*
function play() {
    const audioContext = new AudioContext();
    const audio = new Audio("../Audio/sword_sound_1.mp3");

    const source = audioContext.createMediaElementSource(audio);
    source.connect(audioContext.destination);
    audio.play();
}

*/
