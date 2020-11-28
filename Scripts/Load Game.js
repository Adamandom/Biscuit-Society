// a script to load the game and delete the intro section
document.getElementById("start_game").onclick = function() {
    let gameSection = document.getElementsByClassName("game_section")[0];
    let introSection = document.getElementsByClassName("intro_section")[0];

    gameSection.style.display = "grid";
    introSection.style.display = "none";

    // timer
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);

    Music.toggle(document.getElementById("music_button"));
    
} 




// below is modified code for the stopwatch 
// credit for the stopwatch: https://www.cssscript.com/a-minimal-pure-javascript-stopwatch/

var Interval;

var tens = 0;
var seconds = 0; 
var minutes = 0; 

var appendSeconds = document.getElementById("seconds");
var appendMinutes = document.getElementById("minutes");

var buttonStart = document.getElementById('start_game'); // "start game button"


function startTimer () {
        tens++; 
            
        if (tens > 99) {
          seconds++;
          appendSeconds.innerHTML = "0" + seconds;
          tens = 0;
        }
        
        if (seconds > 9){
          appendSeconds.innerHTML = seconds;
        }
      
        if (seconds > 59){
            minutes++;
            appendMinutes.innerHTML = minutes;
            seconds = 0;
          }
    
      }

// Script to load the game on click of button;


