/* Help Resources Used
https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API
https://www.zapsplat.com/sound-effect-category/swords/page/6/
*/

// Legacy browser support
const AudioContext = window.AudioContext || window.webKitAudioContext;

const audioContext = new AudioContext();

// Get sound effects
const swordSound = new Audio("../Audio/sword_sound_1.mp3");
const arrowSound = new Audio("../Audio/arrow_sound_1.mp3");

// Pass into audio context
const effect1 = audioContext.createMediaElementSource(swordSound);
const effect2 = audioContext.createMediaElementSource(arrowSound);

effect1.connect(audioContext.destination);
effect2.connect(audioContext.destination);

// Select Play buttons
const playButtonSword = document.querySelector(".option2-button");
const playButtonArrow = document.querySelector(".option1-button");

// Add event listener to execute function on click
playButtonSword.addEventListener('click', function () {

    // Check if the context is in a suspended state as per autoplay policy
    if (audioContext.state === 'suspended') {
        swordSound.volume = 0.1;
        audioContext.resume();
    }

    // Play or Pause the sound effect depending on the state
    if (this.dataset.playing === 'false') {
        swordSound.volume = 0.1;
        swordSound.play();
        this.dataset.playing = 'true';
    } else if (this.dataset.playing === 'true') {
        swordSound.pause();
        this.dataset.playing = 'false';
    }

}, false);

// When sword audio has ended set playing to
arrowSound.addEventListener('ended', () => {
    playButtonSword.dataset.playing = 'false';
}, false);

// Add event listener to execute function on click
playButtonArrow.addEventListener('click', function () {

    // Check if the context is in a suspended state as per autoplay policy
    if (audioContext.state === 'suspended') {
        arrowSound.volume = 0.1;
        audioContext.resume();
    }

    // Play or Pause the sound effect depending on the state
    if (this.dataset.playing === 'false') {
        arrowSound.volume = 0.1;
        arrowSound.play();
        this.dataset.playing = 'true';
    } else if (this.dataset.playing === 'true') {
        swordSound.pause();
        this.dataset.playing = 'false';
    }

}, false);

// When sword audio has ended set playing to
arrowSound.addEventListener('ended', () => {
    playButtonSword.dataset.playing = 'false';
}, false);