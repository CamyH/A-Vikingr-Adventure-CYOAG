/* Help Resources Used
https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API
https://www.zapsplat.com/sound-effect-category/swords/page/6/
*/

// Legacy browser support
const AudioContext = window.AudioContext || window.webKitAudioContext;

const audioContext = new AudioContext();

// Get audio element
const audioElement = new Audio("../Audio/sword_sound_1.mp3");

// Pass into audio context
const track = audioContext.createMediaElementSource(audioElement);

track.connect(audioContext.destination);

// Select Play button
const playButton = document.querySelector(".btn");

// Add event listener to execute function on click
playButton.addEventListener('click', function () {

    // Check if the context is in a suspended state as per autoplay policy
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    // Play or Pause the track depending on the state
    if (this.dataset.playing === 'false') {
        audioElement.play();
        audioElement.volume = 0.2;
        this.dataset.playing = 'true';
    } else if (this.dataset.playing === 'true') {
        audioElement.pause();
        this.dataset.playing = 'false';
    }

}, false);

// When audio has ended set playing to false
audioElement.addEventListener('ended', () => {
    playButton.dataset.playing = 'false';
}, false);