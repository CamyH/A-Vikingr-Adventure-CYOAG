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
const oceanSound = new Audio("../Audio/ocean_sound_edit.mp3");
const warCrySound = new Audio("../Audio/war_cry_sound.mp3");

// Pass sound effects into audio context
const effect1 = audioContext.createMediaElementSource(swordSound);
const effect2 = audioContext.createMediaElementSource(arrowSound);
const effect3 = audioContext.createMediaElementSource(oceanSound);
const effect4 = audioContext.createMediaElementSource(warCrySound);

effect1.connect(audioContext.destination);
effect2.connect(audioContext.destination);
effect3.connect(audioContext.destination);
effect4.connect(audioContext.destination);

// Select Play buttons
const playButtonSword = document.querySelector(".option2-button");
const playButtonArrow = document.querySelector(".option1-button");
const playButtonOcean = document.querySelector(".continue-button-index");
const playButtonWarCry = document.querySelector(".option3-button");

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

// When sword sound effect has ended set playing to false
swordSound.addEventListener('ended', () => {
    playButtonSword.dataset.playing = 'false';
}, false);

////////////////////////////////////////////////////////////////////////////////

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
        arrowSound.pause();
        this.dataset.playing = 'false';
    }

}, false);

// When arrow sound effect has ended set playing to false
arrowSound.addEventListener('ended', () => {
    playButtonArrow.dataset.playing = 'false';
}, false);

////////////////////////////////////////////////////////////////////////////////
// Currently not used/working
// Add event listener to execute function on click
playButtonOcean.addEventListener('click', function () {

    // Check if the context is in a suspended state as per autoplay policy
    if (audioContext.state === 'suspended') {
        oceanSound.volume = 0.1;
        audioContext.resume();
    }

    // Play or Pause the sound effect depending on the state
    if (this.dataset.playing === 'false') {
        oceanSound.volume = 0.1;
        oceanSound.play();
        this.dataset.playing = 'true';
    } else if (this.dataset.playing === 'true') {
        oceanSound.pause();
        this.dataset.playing = 'false';
    }

}, false);

// When sword sound effect has ended set playing to false
oceanSound.addEventListener('ended', () => {
    playButtonOcean.dataset.playing = 'false';
}, false);

////////////////////////////////////////////////////////////////////////////////

// Add event listener to execute function on click
playButtonWarCry.addEventListener('click', function () {

    // Check if the context is in a suspended state as per autoplay policy
    if (audioContext.state === 'suspended') {
        warCrySound.volume = 0.1;
        audioContext.resume();
    }

    // Play or Pause the sound effect depending on the state
    if (this.dataset.playing === 'false') {
        warCrySound.volume = 0.1;
        warCrySound.play();
        this.dataset.playing = 'true';
    } else if (this.dataset.playing === 'true') {
        warCrySound.pause();
        this.dataset.playing = 'false';
    }

}, false);

// When war cry sound effect has ended set playing to false
warCrySound.addEventListener('ended', () => {
    playButtonWarCry.dataset.playing = 'false';
}, false);