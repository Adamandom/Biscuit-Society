// this script handles the clicking sound effect by randomly selecting one

// path to sounds
// => var soundPath = "Content/Sounds/";


var rng = () => Math.floor( Math.random() * 5 );

// plays little sound on click
function clickSounds() {
    let audio = document.getElementsByTagName("audio")[0];
    let sound = soundPath + "sound" + rng() + ".mp3";
    audio.src = sound;

    audio.play();
}
