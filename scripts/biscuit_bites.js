
// list of biscuit objects (with bitten graphic and link)
const biscuits = [
    { bite: "Home_BiscuitALT.svg", link: "index.html" }, // home
    { bite: "Gallery_BiscuitALT.svg", link: "gallery-html.html" }, // gallery
    { bite: "Quiz_BiscuitALT.svg", link: "quiz-html.html" }, // quiz
    { bite: "Reviews_BiscuitALT.svg", link: "review-html.html" }, // reviews
    { bite: "Game_BiscuitALT.svg", link: "game-html.html" }, // game (empty slot)
    { bite: "Contact_BiscuitALT.svg", link: "contact-html.html" }, // contact
    { bite: "Recipes_BiscuitALT.svg", link: "recipes-html.html" }  // recipes (empty slot)
];

// list of bite noises
const noises = [
    "bite_MC.mp3",
    "bite_Ter.mp3",
];

function biscuitBite(biscuit) {

    let id = getId(biscuit);
    biscuit.src = "Content/Vector Graphics/" + biscuits[id].bite; // which biscuit will be shown
    biscuit.style.transform = "scale(1)";

    let sound = document.getElementById("bite_sfx");
    let randint = Math.floor(Math.random() * (noises.length));
    
    sound.src = "Content/Sounds/" + noises[randint];
    sound.play(); // plays sound

    window.setInterval(function () {
        if (id !== 0) {
            window.location.href = biscuits[id].link;
        }
    }, 500);
}

// switch statement put in its own function for clarity
function getId(biscuit) {
    let page = biscuit.alt;
    let id = 0;
    
    switch (page) {
        case "Gallery":
            id = 1;
            break;
        case "Quiz":
            id = 2;
            break;
        case "Reviews":
            id = 3;
            break;
        case "Game":
            id = 4;
            break;
        case "Contact":
            id = 5;
            break;
        case "Recipes":
            id = 6;
            break;
        default:
            id = 0; // default = index
    }

    return id;
}
