/* Help Resources Used
https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API
https://www.zapsplat.com/sound-effect-category/swords/page/6/
https://stackoverflow.com/questions/17970734/how-to-call-window-load-event-on-specific-page
*/

// Legacy browser support
const AudioContext = window.AudioContext || window.webKitAudioContext;

const audioContext = new AudioContext();

// Get sound effects
const swordSound = new Audio("../Audio/sword_sound_1.mp3");
const swordSound2 = new Audio("../Audio/sword_sound_2.mp3");
const arrowSound = new Audio("../Audio/arrow_sound_1.mp3");
const oceanSound = new Audio("Audio/ocean_sound.mp3");
const warCrySound = new Audio("../Audio/war_cry_sound.mp3");
const chainmailSound = new Audio("../Audio/chainmail_sound.mp3");

// Pass sound effects into audio context
const effect1 = audioContext.createMediaElementSource(swordSound);
const effect2 = audioContext.createMediaElementSource(swordSound2);
const effect3 = audioContext.createMediaElementSource(arrowSound);
const effect4 = audioContext.createMediaElementSource(oceanSound);
const effect5 = audioContext.createMediaElementSource(warCrySound);
const effect6 = audioContext.createMediaElementSource(chainmailSound);

effect1.connect(audioContext.destination);
effect2.connect(audioContext.destination);
effect3.connect(audioContext.destination);
effect4.connect(audioContext.destination);
effect5.connect(audioContext.destination);
effect6.connect(audioContext.destination);

// Select Play buttons
const playButtonOcean = document.querySelector(".continue-button-index");
const playButtonSword = document.querySelector(".option2-button");
const playButtonArrow = document.querySelector(".option1-button");

////////////////////////////////////////////////////////////////////////////////
// Page3C, Page3B & Page6 Audio
// Different method of playing the audio - need it to be played when the page is loaded, having it run on button click is not possible in these cases.
if (window.location.href.match("page3b.html") != null) {
    swordSound2.volume = 0.2;
    swordSound2.play();
}
if (window.location.href.match("page3c.html") != null) {
    warCrySound.volume = 0.2;
    warCrySound.play();
}
if (window.location.href.match("page6.html") != null) {
    chainmailSound.volume = 0.2;
    chainmailSound.play();
}

////////////////////////////////////////////////////////////////////////////////

// Add event listener to execute function on click if element exists
if (playButtonOcean) {
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
}

// When sword sound effect has ended set playing to false
oceanSound.addEventListener('ended', () => {
    playButtonOcean.dataset.playing = 'false';
}, false);

////////////////////////////////////////////////////////////////////////////////

// Add event listener to execute function on click if element exists
if (playButtonSword) {
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
}
// When sword sound effect has ended set playing to false
swordSound.addEventListener('ended', () => {
    playButtonSword.dataset.playing = 'false';
}, false);

////////////////////////////////////////////////////////////////////////////////

// Add event listener to execute function on click if element exists
if (playButtonArrow) {
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
}

// When arrow sound effect has ended set playing to false
arrowSound.addEventListener('ended', () => {
    playButtonArrow.dataset.playing = 'false';
}, false);