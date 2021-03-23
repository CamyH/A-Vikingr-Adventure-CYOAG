/* Help Resources Used
https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API
https://www.zapsplat.com/sound-effect-category/swords/page/6/
*/

// legacy browser support
const AudioContext = window.AudioContext || window.webKitAudioContext;

const audioContext = new AudioContext;

// Get audio element
const audioElement = document.querySelector('audio');

// Pass into audio context
const track = audioContext.createMediaElementSource(audioElement);

track.connect(audioContext.destination);

// Select play/pause button
const playButton = document.querySelector('button');

playButton.addEventListener('click'), function () {
    // Check if context is in suspended state (autoplay policy)
    if (audioContext.state == 'suspended')
        audioContext.resume();

    // Play/Pause track depending on state
    if (this.dataset.playing == false) {
        audioElement.play();
        this.dataset.playing = 'true';
    } else if (this.dataset.playing = 'true') {
        audioElement.pause();
        this.dataset.playing = 'false';
    }
}

audioElement.addEventListener('ended', () => {
    playButton.dataset.playing = 'false';
}, false);