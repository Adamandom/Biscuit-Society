// simple script to turn music on and off.
// By Adam Suth

var Music = {
    on: "Content/Vectors/Misc/On/music.svg",
    off: "Content/Vectors/Misc/Off/music.svg",
    audio: document.getElementById("music"),
    currentState: false, // true = on

    toggle: function(musicIcon) {
        if (this.currentState) {
            musicIcon.src = this.off;
            this.audio.pause();
            
        }
        else {
            musicIcon.src = this.on;
            this.audio.play();
        }
        this.currentState = !this.currentState;
    }
}