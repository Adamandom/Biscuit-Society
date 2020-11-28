
// list of bite noises
const noises = [
    "bite_MC.mp3",
    "bite_Ter.mp3",
];

function bite(clicked) {
    let identifier = clicked.alt;
    let link = identifier + ".html";
    clicked.src = "Content/Vectors/Biscuits/Off/" + identifier + ".svg";
    playSound();
    clicked.style.transform = "scale(1)";
    window.setInterval(function() {
        location.href = identifier + ".html";
    }, 700)
    
}

function playSound() {
    let audio = document.getElementsByTagName("audio")[0];
    // randomly selects a soundclip from the noises array
    audio.src = "Content/Sounds/" + noises[Math.floor(Math.random() * noises.length)];
    audio.play();
}