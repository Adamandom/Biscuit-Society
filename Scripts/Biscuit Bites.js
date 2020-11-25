
// list of bite noises
const noises = [
    "bite_MC.mp3",
    "bite_Ter.mp3",
];

var Bite = { 
    id: function(clicked) { return clicked.alt; },
    image: this.id + "_BiscuitALT.svg",
    link: this.id + "-html.html",
    goToPage: function() {
        window.setInterval(function() {
            window.location.href = this.link;
        }, 700)   
    },

}
