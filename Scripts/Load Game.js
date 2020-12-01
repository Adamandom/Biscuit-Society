// Script to load the game on click of the start button
// it also start the MUSIC and starts a TIMER
// - Adsu

// a script to load the game and delete the intro section
document.getElementById("start_game").onclick = function() {
    let gameSection = document.getElementsByClassName("game_section")[0];
    let introSection = document.getElementsByClassName("intro_section")[0];

    gameSection.style.display = "grid";
    introSection.style.display = "none";

    // start timer
    window.clearInterval(interval);
    interval = window.setInterval(startTimer, 10);

    Music.toggle(document.getElementById("music_button"));
    
} 

// code for timer
var interval = 0;

var milliSeconds = 0;
var seconds = 0; 
var minutes = 0; 

function startTimer() {
    milliSeconds++; 
    // 100ms = 1s
    if (milliSeconds > 99) {
      milliSeconds = 0;
      seconds++;
      document.getElementById("seconds").innerHTML = "0" + seconds;
    }
    // gets rid of formatting 0 (eg: 0:09 -> 0:10)
    if (seconds > 9) {
      document.getElementById("seconds").innerHTML = seconds;
    }
    // 60s = 1min
    if (seconds > 59){
        seconds = 0;
        minutes++;
        document.getElementById("minutes").innerHTML = minutes;
      }
}


